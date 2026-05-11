import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

let welcomeShown = false;

const WELCOME_ENGLISH =
  "Welcome! You are at Anglo Sanskrit Senior Secondary School, Pundri — a prestigious institution with over a century of excellence since 1916. I am your AI Guide. Press Start Tour to explore our school, or browse on your own!";

const TOUR_STEPS = [
  {
    path: "/",
    audio: "/menus/home.mp3",
    label: "Home",
    englishText:
      "Welcome to Anglo Sanskrit Senior Secondary School, Pundri! Established in 1916, we have been nurturing young minds for over a century. Our school offers co-educational, holistic learning in Hindi and English medium from Class 1 to Class 12, in Pundri, Kaithal, Haryana.",
  },
  {
    path: "/about",
    audio: "/menus/about us.mp3",
    label: "About Us",
    englishText:
      "About Us: For over 109 years, Anglo Sanskrit School has been a pillar of education in Pundri. Founded with a vision to blend traditional values with modern learning, we stand as a symbol of academic excellence, integrity, and community pride in the region.",
  },
  {
    path: "/academics",
    audio: "/menus/academic.mp3",
    label: "Academics",
    englishText:
      "Academics: We follow the Board of School Education Haryana curriculum, offering Science, Commerce, and Arts streams at the senior level. Our dedicated faculty uses innovative teaching methods to help every student reach their full potential.",
  },
  {
    path: "/admissions",
    audio: "/menus/admission.mp3",
    label: "Admissions",
    englishText:
      "Admissions: We are open for Session 2026-27! Enroll your child in Classes 1 to 12 through our transparent, merit-based admission process. Apply before May 31st. Visit our office or contact us for more details and to secure your seat.",
  },
  {
    path: "/faculty",
    audio: "/menus/faculty.mp3",
    label: "Faculty",
    englishText:
      "Faculty: Our highly qualified and experienced teachers are the heart of our school. With decades of combined expertise, they provide personalized attention and dedicated mentorship to help every student grow academically and personally.",
  },
  {
    path: "/facilities",
    audio: "/menus/facilites.mp3",
    label: "Facilities",
    englishText:
      "Facilities: Our campus is equipped with modern science labs, a well-stocked library, computer labs, a spacious sports ground, and smart classrooms — everything needed to provide a world-class and inspiring learning environment.",
  },
  {
    path: "/gallery",
    audio: "/menus/gallery.mp3",
    label: "Gallery",
    englishText:
      "Gallery: Explore our vibrant school life through photos and memories. From Annual Sports Day and cultural festivals to science exhibitions and board exam achievements — every image reflects the spirit and energy of our school community.",
  },
  {
    path: "/contact",
    audio: "/menus/contact us.mp3",
    label: "Contact",
    englishText:
      "Contact Us: We are located in Pundri, Kaithal, Haryana - 136026. Reach out for admission queries, school events, or any information. Our friendly team is always happy to assist you. Visit us or get in touch by phone or email.",
  },
];

function RobotImage({ isSpeaking, size = 180 }: { isSpeaking: boolean; size?: number }) {
  return (
    <motion.img
      src="/robot.png"
      alt="AI Robot"
      width={size}
      height={size}
      style={{ objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(109,40,217,0.35))" }}
      animate={
        isSpeaking
          ? { y: [0, -7, 2, -5, 0], rotate: [0, 1, -1, 0] }
          : { y: [0, -10, 0] }
      }
      transition={
        isSpeaking
          ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
          : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}

export function AIAssistant() {
  const [, navigate] = useLocation();

  const initialPhase = !welcomeShown ? "welcome" : "minimized";
  const [phase, setPhase] = useState<"welcome" | "tour" | "minimized" | "hidden">(initialPhase);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [tourStep, setTourStep] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTyping = useCallback(() => {
    if (typingRef.current) {
      clearInterval(typingRef.current);
      typingRef.current = null;
    }
  }, []);

  const stopScrolling = useCallback(() => {
    if (scrollRef.current) {
      clearInterval(scrollRef.current);
      scrollRef.current = null;
    }
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
  }, []);

  // Typewriter that runs in sync with audio: reveals text proportionally to audio progress
  const startAudioSyncedTyping = useCallback(
    (audio: HTMLAudioElement, text: string) => {
      stopTyping();
      setDisplayedText("");

      // Poll audio.currentTime every ~60ms and reveal text proportionally
      typingRef.current = setInterval(() => {
        const duration = audio.duration;
        if (!duration || duration === 0 || !isFinite(duration)) return;
        const progress = Math.min(audio.currentTime / duration, 1);
        const charsToShow = Math.floor(progress * text.length);
        setDisplayedText(text.slice(0, charsToShow));
      }, 60);
    },
    [stopTyping]
  );

  // Regular typewriter for welcome (no audio sync needed for welcome)
  const startTyping = useCallback(
    (text: string) => {
      stopTyping();
      let i = 0;
      setDisplayedText("");
      const tick = setInterval(() => {
        if (i < text.length) {
          i++;
          setDisplayedText(text.slice(0, i));
        } else {
          clearInterval(tick);
        }
      }, 38);
      typingRef.current = tick;
    },
    [stopTyping]
  );

  // Smooth page scroll synced with audio progress
  const startAudioSyncedScroll = useCallback(
    (audio: HTMLAudioElement) => {
      stopScrolling();
      // Scroll page from top to 80% of total scrollable height over audio duration
      scrollRef.current = setInterval(() => {
        const duration = audio.duration;
        if (!duration || duration === 0 || !isFinite(duration)) return;
        const progress = Math.min(audio.currentTime / duration, 1);
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll > 0) {
          window.scrollTo({ top: progress * maxScroll * 0.85, behavior: "smooth" });
        }
      }, 600);
    },
    [stopScrolling]
  );

  // Welcome phase — play welcome.mp3 and typewriter-type English text
  useEffect(() => {
    if (phase !== "welcome") return;
    welcomeShown = true;

    const audio = new Audio("/welcome.mp3");
    audioRef.current = audio;
    audio.addEventListener("ended", () => setIsSpeaking(false));

    const t = setTimeout(async () => {
      try {
        await audio.play();
        setIsSpeaking(true);
        startTyping(WELCOME_ENGLISH);
      } catch {
        setIsSpeaking(false);
        startTyping(WELCOME_ENGLISH);
      }
    }, 500);

    return () => {
      clearTimeout(t);
      stopAudio();
      stopTyping();
    };
  }, [phase, startTyping, stopTyping, stopAudio]);

  // Tour phase — navigate, play mp3, sync text + scroll, then advance
  useEffect(() => {
    if (phase !== "tour") return;

    const step = TOUR_STEPS[tourStep];
    if (!step) {
      setPhase("minimized");
      return;
    }

    navigate(step.path);
    window.scrollTo({ top: 0, behavior: "instant" });

    setIsSpeaking(false);
    setDisplayedText("");

    const audio = new Audio(step.audio);
    audioRef.current = audio;

    const onCanPlay = () => {
      // Start synced typing and scrolling once we know the duration
      startAudioSyncedTyping(audio, step.englishText);
      startAudioSyncedScroll(audio);
    };

    const onEnded = () => {
      setIsSpeaking(false);
      stopTyping();
      stopScrolling();
      // Show full text at end
      setDisplayedText(step.englishText);
      setTimeout(() => {
        setTourStep((prev) => {
          const next = prev + 1;
          if (next >= TOUR_STEPS.length) {
            setPhase("minimized");
            return prev;
          }
          return next;
        });
      }, 1200);
    };

    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("ended", onEnded);

    const t = setTimeout(async () => {
      try {
        await audio.play();
        setIsSpeaking(true);
      } catch {
        setIsSpeaking(false);
        // Fallback: just type text if audio fails
        startTyping(step.englishText);
      }
    }, 700);

    return () => {
      clearTimeout(t);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("ended", onEnded);
      stopAudio();
      stopTyping();
      stopScrolling();
    };
  }, [phase, tourStep, navigate, startAudioSyncedTyping, startAudioSyncedScroll, startTyping, stopTyping, stopScrolling, stopAudio]);

  const startTour = () => {
    stopAudio();
    stopTyping();
    stopScrolling();
    setIsSpeaking(false);
    setTourStep(0);
    setPhase("tour");
  };

  // Minimizes robot to draggable bottom-right bubble
  const dismiss = () => {
    stopAudio();
    stopTyping();
    stopScrolling();
    setIsSpeaking(false);
    setPhase("minimized");
  };

  const skipStep = () => {
    stopAudio();
    stopTyping();
    stopScrolling();
    setIsSpeaking(false);
    const next = tourStep + 1;
    if (next >= TOUR_STEPS.length) {
      setPhase("minimized");
    } else {
      setTourStep(next);
    }
  };

  // Fully hides robot (only used on minimized close button)
  const handleClose = () => {
    stopAudio();
    stopTyping();
    stopScrolling();
    setPhase("hidden");
  };

  if (phase === "hidden") return null;

  const currentStep = TOUR_STEPS[tourStep];
  const activeText = phase === "tour" && currentStep ? currentStep.englishText : WELCOME_ENGLISH;

  return (
    <>
      {/* ══════════════════════════════════════════════
          WELCOME MODAL
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {phase === "welcome" && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(9px)" }}
          >
            <motion.div
              initial={{ scale: 0.72, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.72, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="flex flex-col items-center max-w-xs w-full"
            >
              {/* Robot — clean, no rings */}
              <div style={{ zIndex: 10, marginBottom: -30 }}>
                <RobotImage isSpeaking={isSpeaking} size={178} />
              </div>

              {/* White card */}
              <div
                className="bg-white w-full rounded-3xl pt-10 pb-6 px-5"
                style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
              >
                {/* Wave bars */}
                {isSpeaking && (
                  <div className="flex items-end justify-center gap-[3px] mb-4" style={{ height: 16 }}>
                    {[0.5, 0.9, 0.65, 1, 0.6, 0.85, 0.55].map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-[3px] rounded-full"
                        style={{
                          height: 14,
                          background: "linear-gradient(to top, #7c3aed, #a78bfa)",
                          transformOrigin: "bottom",
                        }}
                        animate={{ scaleY: [h, 1, h * 0.3, 1, h] }}
                        transition={{ duration: 0.62, repeat: Infinity, delay: i * 0.07, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                )}

                {/* English text box */}
                <div
                  className="rounded-2xl p-4 text-sm text-slate-700 leading-relaxed"
                  style={{ minHeight: 82, background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  {displayedText}
                  {displayedText.length < WELCOME_ENGLISH.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.55, repeat: Infinity }}
                      className="inline-block w-[2px] h-[13px] bg-violet-500 ml-[2px] align-middle"
                    />
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={startTour}
                    className="flex-1 h-11 rounded-xl font-semibold shadow-lg text-white"
                    style={{ background: "linear-gradient(135deg, #6d28d9, #4f46e5)" }}
                  >
                    🚀 Start Tour
                  </Button>
                  <Button
                    onClick={dismiss}
                    variant="outline"
                    className="flex-1 h-11 rounded-xl border-slate-200 text-slate-500 hover:bg-slate-50 font-medium"
                  >
                    No Thanks
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          TOUR MODE — fixed bottom-right
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {phase === "tour" && currentStep && (
          <motion.div
            key="tour-robot"
            initial={{ scale: 0, opacity: 0, x: 60 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 60 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="fixed z-[110] flex flex-col items-end"
            style={{ bottom: "1.5rem", right: "1.5rem", maxWidth: 270 }}
          >
            {/* Text bubble above robot */}
            <div
              className="mb-3 bg-white rounded-2xl p-3 shadow-2xl w-full"
              style={{ border: "1px solid #e2e8f0" }}
            >
              {/* Step header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-violet-600 uppercase tracking-wide">
                  {currentStep.label}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {tourStep + 1} / {TOUR_STEPS.length}
                </span>
              </div>

              {/* Wave bars */}
              {isSpeaking && (
                <div className="flex items-end gap-[2px] mb-2" style={{ height: 14 }}>
                  {[0.5, 0.9, 0.65, 1, 0.6, 0.85, 0.55].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-[3px] rounded-full"
                      style={{
                        height: 12,
                        background: "linear-gradient(to top, #7c3aed, #a78bfa)",
                        transformOrigin: "bottom",
                      }}
                      animate={{ scaleY: [h, 1, h * 0.3, 1, h] }}
                      transition={{ duration: 0.62, repeat: Infinity, delay: i * 0.07, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              )}

              {/* English narration text — synced with audio */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {displayedText}
                {displayedText.length < activeText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.55, repeat: Infinity }}
                    className="inline-block w-[2px] h-[13px] bg-violet-500 ml-[2px] align-middle"
                  />
                )}
              </p>
            </div>

            {/* Robot + action buttons */}
            <div className="flex items-end gap-2">
              <div className="flex flex-col gap-1.5 mb-1">
                <button
                  onClick={skipStep}
                  className="text-xs bg-violet-100 hover:bg-violet-200 text-violet-700 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 transition-colors shadow-sm"
                >
                  Skip <ChevronRight className="w-3 h-3" />
                </button>
                {/* End → minimizes robot to draggable bubble (same as No Thanks) */}
                <button
                  onClick={dismiss}
                  className="text-xs bg-red-50 hover:bg-red-100 text-red-500 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1 transition-colors shadow-sm"
                >
                  End <X className="w-3 h-3" />
                </button>
              </div>
              <RobotImage isSpeaking={isSpeaking} size={90} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          MINIMIZED ROBOT — draggable, bottom-right
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {phase === "minimized" && (
          <motion.div
            key="mini-robot"
            drag
            dragMomentum={false}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="fixed z-[110] flex flex-col items-center cursor-grab active:cursor-grabbing select-none"
            style={{ bottom: "6rem", right: "2rem", touchAction: "none" }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-1 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg,#6d28d9,#4f46e5)" }}
            >
              ✨ Drag me
            </motion.div>

            <div className="relative">
              {/* Only this X truly hides the robot */}
              <button
                onClick={handleClose}
                onPointerDown={(e) => e.stopPropagation()}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center z-10 shadow-md transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              <RobotImage isSpeaking={false} size={64} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
