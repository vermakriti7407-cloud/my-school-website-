import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
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
  const rafRef = useRef<number | null>(null);

  // Motion values for draggable robot — used for gravity snap-back
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);

  const handleRobotDragEnd = useCallback(() => {
    // Animate back to default position with a gravity-like falling spring
    animate(robotX, 0, { type: "spring", stiffness: 260, damping: 18, mass: 1.2 });
    animate(robotY, 0, { type: "spring", stiffness: 260, damping: 18, mass: 1.2 });
  }, [robotX, robotY]);

  // Cancel the running RAF loop
  const stopRAF = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
  }, []);

  const stopAll = useCallback(() => {
    stopRAF();
    stopAudio();
  }, [stopRAF, stopAudio]);

  /**
   * Starts a 60fps RAF loop that:
   *  - Reveals text word-by-word in sync with audio.currentTime
   *  - Smoothly scrolls the page in sync with audio.currentTime
   * Returns a cleanup function.
   */
  // Constant scroll speed in pixels per second — same feel on every page
  const SCROLL_PPS = 85;

  const startSyncLoop = useCallback(
    (audio: HTMLAudioElement, text: string, enableScroll: boolean) => {
      stopRAF();
      const words = text.split(" ");

      const tick = () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if (duration && isFinite(duration) && duration > 0) {
          const progress = Math.min(currentTime / duration, 1);

          // Word-by-word reveal in sync with audio
          const wordCount = Math.round(progress * words.length);
          setDisplayedText(words.slice(0, wordCount).join(" "));

          // Fixed-speed scroll: same px/s regardless of page height
          if (enableScroll) {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll > 0) {
              const targetScroll = Math.min(currentTime * SCROLL_PPS, maxScroll * 0.9);
              window.scrollTo({ top: targetScroll, behavior: "instant" });
            }
          }
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    [stopRAF]
  );

  // ─── WELCOME PHASE ───────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "welcome") return;
    welcomeShown = true;

    setDisplayedText("");
    setIsSpeaking(false);

    const audio = new Audio("/welcome.mp3");
    audioRef.current = audio;

    const onEnded = () => {
      setIsSpeaking(false);
      stopRAF();
      setDisplayedText(WELCOME_ENGLISH);
    };
    audio.addEventListener("ended", onEnded);

    // Start as soon as browser allows — no artificial delay for welcome
    audio
      .play()
      .then(() => {
        setIsSpeaking(true);
        // Use a simple typewriter for welcome (no scroll sync needed)
        const words = WELCOME_ENGLISH.split(" ");
        let wordIndex = 0;
        const typeWord = () => {
          wordIndex++;
          setDisplayedText(words.slice(0, wordIndex).join(" "));
          if (wordIndex < words.length) {
            // Spread words evenly; welcome audio ~15s → ~15000ms / wordCount ms each
            rafRef.current = window.setTimeout(typeWord, 180) as unknown as number;
          }
        };
        typeWord();
      })
      .catch(() => {
        setIsSpeaking(false);
        setDisplayedText(WELCOME_ENGLISH);
      });

    return () => {
      audio.removeEventListener("ended", onEnded);
      stopAll();
    };
  }, [phase, stopRAF, stopAll]);

  // ─── TOUR PHASE ──────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "tour") return;

    const step = TOUR_STEPS[tourStep];
    if (!step) {
      setPhase("minimized");
      return;
    }

    // Navigate and reset scroll immediately
    navigate(step.path);
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsSpeaking(false);
    setDisplayedText("");

    const audio = new Audio(step.audio);
    audioRef.current = audio;

    const onEnded = () => {
      setIsSpeaking(false);
      stopRAF();
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
      }, 1000);
    };

    audio.addEventListener("ended", onEnded);

    // Play immediately — no delay, so text and audio are in sync from frame 0
    audio
      .play()
      .then(() => {
        setIsSpeaking(true);
        startSyncLoop(audio, step.englishText, true);
      })
      .catch(() => {
        // Autoplay blocked — still show text
        setIsSpeaking(false);
        setDisplayedText(step.englishText);
      });

    return () => {
      audio.removeEventListener("ended", onEnded);
      stopAll();
    };
  }, [phase, tourStep, navigate, startSyncLoop, stopAll, stopRAF]);

  // ─── ACTIONS ─────────────────────────────────────────────────────────
  const startTour = () => {
    stopAll();
    setIsSpeaking(false);
    setTourStep(0);
    setPhase("tour");
  };

  const dismiss = () => {
    stopAll();
    setIsSpeaking(false);
    setPhase("minimized");
  };

  const skipStep = () => {
    stopAll();
    setIsSpeaking(false);
    const next = tourStep + 1;
    if (next >= TOUR_STEPS.length) {
      setPhase("minimized");
    } else {
      setTourStep(next);
    }
  };

  const handleClose = () => {
    stopAll();
    setPhase("hidden");
  };

  const restartWelcome = () => {
    stopAll();
    setIsSpeaking(false);
    setTourStep(0);
    setDisplayedText("");
    welcomeShown = false;
    setPhase("welcome");
  };

  if (phase === "hidden") return null;

  const currentStep = TOUR_STEPS[tourStep];
  const activeFullText =
    phase === "tour" && currentStep ? currentStep.englishText : WELCOME_ENGLISH;

  return (
    <>
      {/* ══════ WELCOME MODAL ══════════════════════════════════════════ */}
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
              {/* Clean robot — no rings */}
              <div style={{ zIndex: 10, marginBottom: -30 }}>
                <RobotImage isSpeaking={isSpeaking} size={178} />
              </div>

              <div
                className="bg-white w-full rounded-3xl pt-10 pb-6 px-5"
                style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
              >
                <div
                  className="rounded-2xl p-4 text-sm text-slate-700 leading-relaxed"
                  style={{ minHeight: 82, background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  {displayedText}
                  {displayedText.length < WELCOME_ENGLISH.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-[2px] h-[13px] bg-violet-500 ml-[2px] align-middle"
                    />
                  )}
                </div>

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

      {/* ══════ TOUR MODE — fixed bottom-right ════════════════════════ */}
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
            {/* Text bubble */}
            <div
              className="mb-3 bg-white rounded-2xl p-3 shadow-2xl w-full"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-violet-600 uppercase tracking-wide">
                  {currentStep.label}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {tourStep + 1} / {TOUR_STEPS.length}
                </span>
              </div>

              {/* Text synced with audio — word-by-word, smooth */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {displayedText}
                {displayedText.length < activeFullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-[2px] h-[13px] bg-violet-500 ml-[2px] align-middle"
                  />
                )}
              </p>
            </div>

            {/* Robot + controls */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 w-full">
                <button
                  onClick={skipStep}
                  className="flex-1 text-xs bg-violet-100 hover:bg-violet-200 text-violet-700 px-3 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors shadow-sm"
                >
                  Skip <ChevronRight className="w-3 h-3" />
                </button>
                {/* End → minimized bubble, not hidden */}
                <button
                  onClick={dismiss}
                  className="flex-1 text-xs bg-red-50 hover:bg-red-100 text-red-500 px-3 py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors shadow-sm"
                >
                  End <X className="w-3 h-3" />
                </button>
              </div>
              <RobotImage isSpeaking={isSpeaking} size={178} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════ MINIMIZED ROBOT — draggable bubble ════════════════════ */}
      <AnimatePresence>
        {phase === "minimized" && (
          <motion.div
            key="mini-robot"
            drag
            dragMomentum={false}
            style={{ x: robotX, y: robotY, bottom: "1rem", right: "1.5rem", touchAction: "none" }}
            onDragEnd={handleRobotDragEnd}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            onDoubleClick={restartWelcome}
            className="fixed z-[110] flex flex-col items-center cursor-grab active:cursor-grabbing select-none"
          >
            {/* "Drag me" pill — pointer-events:none so drag fires on outer div */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
              style={{
                background: "linear-gradient(135deg,#6d28d9,#4f46e5)",
                pointerEvents: "none",
                marginBottom: "-6px",
              }}
            >
              ✨ Drag me
            </motion.div>

            <div className="relative">
              {/* Close button — kept interactive, stops drag propagation */}
              <button
                onClick={handleClose}
                onPointerDown={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center z-10 shadow-md transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              {/* Robot image — pointer-events:none lets drag/dblclick reach outer div */}
              <div style={{ pointerEvents: "none" }}>
                <RobotImage isSpeaking={false} size={178} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
