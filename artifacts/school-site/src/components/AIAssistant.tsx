import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Persists for the lifetime of the SPA session — welcome shows only once
let welcomeShown = false;

const WELCOME_SCRIPT =
  "नमस्ते! आपका स्वागत है Anglo Sanskrit Senior Secondary School, Pundri में — जो 1916 से उत्कृष्टता की एक शताब्दी से भी अधिक की विरासत लिए एक प्रतिष्ठित संस्था है। मैं आपका AI गाइड हूँ। मैं आपको हमारे विद्यालय का पूरा भ्रमण करा सकता हूँ। Tour शुरू करने के लिए Start Tour दबाएँ, या स्वयं भी देख सकते हैं!";

// ─────────────────────────────────────────────────────────────────────
// Image-based robot with float / speaking animation
// ─────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────
// Main AI Assistant component
// ─────────────────────────────────────────────────────────────────────
export function AIAssistant() {
  const [location] = useLocation();
  const isHome = location === "/";

  // Welcome only on home page and only once per session
  const initialPhase = (isHome && !welcomeShown) ? "welcome" : "minimized";
  const [phase, setPhase] = useState<"welcome" | "minimized" | "hidden">(initialPhase);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopTyping = useCallback(() => {
    if (typingRef.current) clearTimeout(typingRef.current);
  }, []);

  const startTyping = useCallback(
    (text: string) => {
      stopTyping();
      let i = 0;
      setDisplayedText("");
      const typeNext = () => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          typingRef.current = setTimeout(typeNext, 35);
        }
      };
      typingRef.current = setTimeout(typeNext, 620);
    },
    [stopTyping]
  );

  // Only run audio + typing when in welcome phase
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
      } catch {
        setIsSpeaking(false);
      }
    }, 620);
    startTyping(WELCOME_SCRIPT);
    return () => {
      clearTimeout(t);
      audio.pause();
      audio.src = "";
      stopTyping();
    };
  }, [phase, startTyping, stopTyping]);

  const dismiss = () => {
    audioRef.current?.pause();
    stopTyping();
    setIsSpeaking(false);
    setPhase("minimized");
  };

  const handleClose = () => {
    audioRef.current?.pause();
    setPhase("hidden");
  };

  if (phase === "hidden") return null;

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
              {/* ── ROBOT — completely alone, no card behind ── */}
              <div
                className="relative flex items-center justify-center"
                style={{ zIndex: 10, marginBottom: -30 }}
              >
                {/* Speaking rings */}
                {isSpeaking &&
                  [120, 148, 176].map((size, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: size,
                        height: size,
                        border: "1.5px solid rgba(167,139,250,0.5)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.55, 0, 0.55] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                <RobotImage isSpeaking={isSpeaking} size={178} />
              </div>

              {/* ── WHITE CARD — starts below robot ── */}
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
                        transition={{
                          duration: 0.62,
                          repeat: Infinity,
                          delay: i * 0.07,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Text box */}
                <div
                  className="rounded-2xl p-4 text-sm text-slate-700 leading-relaxed"
                  style={{
                    minHeight: 82,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {displayedText}
                  {displayedText.length < WELCOME_SCRIPT.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.55, repeat: Infinity }}
                      className="inline-block w-[2px] h-[13px] bg-violet-500 ml-[2px] align-middle"
                    />
                  )}
                </div>

                {/* Buttons — Start Tour first */}
                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={dismiss}
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
          MINIMIZED ROBOT — bottom-right, draggable
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
            {/* Drag badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-1 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg,#6d28d9,#4f46e5)" }}
            >
              ✨ Drag me
            </motion.div>

            <div className="relative">
              <button
                onClick={handleClose}
                onPointerDown={(e) => e.stopPropagation()}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center z-10 shadow-md transition-colors"
              >
                <X className="w-3 h-3" />
              </button>

              {/* Mini robot — no speaking, just floating */}
              <RobotImage isSpeaking={false} size={64} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
