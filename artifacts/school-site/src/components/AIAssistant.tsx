import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WELCOME_SCRIPT =
  "Namaste! Welcome to Anglo Sanskrit Senior Secondary School, Pundri — a premier institution with over a century of excellence since 1916. I am your AI Guide. I can take you on a complete tour of our school. Click Start Tour to explore, or feel free to browse on your own!";

// ─────────────────────────────────────────────────────────────
// Face overlay positions on robot2.png displayed at 180×180 px
//   Left  eye: center (58 px, 55 px), radius ~14 px
//   Right eye: center (121 px, 55 px), radius ~14 px
//   Mouth:     center (90 px, 80 px), width ~48 px
// ─────────────────────────────────────────────────────────────
function RobotFace({ isSpeaking }: { isSpeaking: boolean }) {
  return (
    <div style={{ position: "relative", width: 180, height: 180, flexShrink: 0 }}>
      {/* Robot image — transparent background */}
      <motion.img
        src="/robot2.png"
        alt="AI Guide"
        draggable={false}
        style={{
          width: 180,
          height: 180,
          objectFit: "contain",
          filter: "drop-shadow(0 16px 36px rgba(109,40,217,0.45))",
          position: "absolute",
          inset: 0,
          userSelect: "none",
        }}
        animate={
          isSpeaking
            ? { y: [0, -6, 2, -5, 0], rotate: [0, 0.8, -0.8, 0] }
            : { y: [0, -9, 0] }
        }
        transition={
          isSpeaking
            ? { duration: 0.85, repeat: Infinity, ease: "easeInOut" }
            : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* LEFT eyelid */}
      <motion.div
        style={{
          position: "absolute",
          left: 44,
          top: 42,
          width: 30,
          height: 28,
          borderRadius: "50%",
          background: "rgba(13,10,26,0.97)",
          transformOrigin: "top center",
          pointerEvents: "none",
        }}
        animate={{ scaleY: [0, 0, 0, 0, 0, 1, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0.05, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
      />

      {/* RIGHT eyelid */}
      <motion.div
        style={{
          position: "absolute",
          left: 107,
          top: 42,
          width: 30,
          height: 28,
          borderRadius: "50%",
          background: "rgba(13,10,26,0.97)",
          transformOrigin: "top center",
          pointerEvents: "none",
        }}
        animate={{ scaleY: [0, 0, 0, 0, 0, 1, 0.05, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0.05, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 0.05 }}
      />

      {/* MOUTH / lip-sync */}
      <motion.div
        style={{
          position: "absolute",
          left: 67,
          top: 76,
          width: 46,
          borderRadius: 10,
          background: "rgba(10,8,22,0.92)",
          transformOrigin: "center",
          pointerEvents: "none",
        }}
        animate={
          isSpeaking
            ? { height: [3, 11, 3, 15, 3, 9, 2, 13, 3], scaleX: [1, 1.06, 1, 1.05, 1] }
            : { height: 3 }
        }
        transition={
          isSpeaking
            ? { duration: 0.46, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      />

      {/* Mouth glow while speaking */}
      {isSpeaking && (
        <motion.div
          style={{
            position: "absolute",
            left: 52,
            top: 68,
            width: 76,
            height: 26,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(140,100,255,0.32) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
export function AIAssistant() {
  const [phase, setPhase] = useState<"welcome" | "minimized" | "hidden">("welcome");
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
      typingRef.current = setTimeout(typeNext, 600);
    },
    [stopTyping]
  );

  useEffect(() => {
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
    }, 600);
    startTyping(WELCOME_SCRIPT);
    return () => {
      clearTimeout(t);
      audio.pause();
      audio.src = "";
      stopTyping();
    };
  }, [startTyping, stopTyping]);

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
      {/* ══════ WELCOME MODAL ══════ */}
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
            {/* Outer wrapper — robot on top, card below */}
            <motion.div
              initial={{ scale: 0.72, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.72, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="flex flex-col items-center max-w-xs w-full"
            >
              {/* ── ROBOT ALONE — no card behind it ── */}
              <div
                className="relative flex items-center justify-center"
                style={{ width: 180, height: 180, zIndex: 10, marginBottom: -28 }}
              >
                {/* Pulsing rings (behind robot) while speaking */}
                {isSpeaking &&
                  [130, 158, 186].map((size, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: size,
                        height: size,
                        border: "1.5px solid rgba(167,139,250,0.55)",
                      }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                <RobotFace isSpeaking={isSpeaking} />
              </div>

              {/* ── WHITE CARD — starts below the robot ── */}
              <div
                className="bg-white w-full rounded-3xl pt-10 pb-6 px-5"
                style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
              >
                {/* Badge + wave bars */}
                <div className="flex flex-col items-center mb-4">
                  {isSpeaking ? (
                    <div className="flex items-end gap-[3px] mb-2" style={{ height: 16 }}>
                      {[0.5, 0.9, 0.65, 1, 0.6, 0.85, 0.55].map((h, i) => (
                        <motion.span
                          key={i}
                          className="w-[3px] rounded-full"
                          style={{
                            height: 14,
                            background: "linear-gradient(to top, #7c3aed, #a78bfa)",
                            originY: 1,
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
                  ) : (
                    <div style={{ height: 16 }} />
                  )}

                  <div className="flex items-center gap-1.5 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold text-violet-700">AI Guide · Online</span>
                  </div>
                </div>

                {/* Text box */}
                <div
                  className="rounded-2xl p-4 text-sm text-slate-700 leading-relaxed"
                  style={{ minHeight: 82, background: "#f8fafc", border: "1px solid #e2e8f0" }}
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

      {/* ══════ MINIMIZED ROBOT ══════ */}
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
            style={{ bottom: "11rem", right: "2rem", touchAction: "none" }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-2 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
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
              <motion.img
                src="/robot2.png"
                alt="AI Guide"
                className="w-16 h-16 object-contain"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 8px 18px rgba(109,40,217,0.45))" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
