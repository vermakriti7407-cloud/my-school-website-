import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WELCOME_SCRIPT =
  "Namaste! Welcome to Anglo Sanskrit Senior Secondary School, Pundri — a premier institution with over a century of excellence since 1916. I am your AI Guide. I can take you on a complete tour of our school. Click Start Tour to explore, or feel free to browse on your own!";

// ── Animated robot face overlay (blink + lip-sync) ────────────
function RobotFace({ isSpeaking }: { isSpeaking: boolean }) {
  return (
    // Container sized to match the rendered robot image
    <div className="relative" style={{ width: 160, height: 240 }}>
      {/* The robot image – no background, full portrait */}
      <motion.img
        src="/robot.png"
        alt="AI Guide"
        style={{
          width: 160,
          height: "auto",
          filter: "drop-shadow(0 12px 28px rgba(59,130,246,0.42))",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        animate={
          isSpeaking
            ? { y: [0, -5, 2, -4, 0], rotate: [0, 0.8, -0.8, 0] }
            : { y: [0, -7, 0] }
        }
        transition={
          isSpeaking
            ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
            : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* ── LEFT EYELID (blinks over left blue eye) */}
      <motion.div
        style={{
          position: "absolute",
          left: 44,
          top: 40,
          width: 28,
          height: 26,
          borderRadius: "50%",
          background: "rgba(12,14,28,0.96)",
          originY: 0,
          transformOrigin: "top center",
        }}
        animate={{ scaleY: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── RIGHT EYELID */}
      <motion.div
        style={{
          position: "absolute",
          left: 88,
          top: 40,
          width: 28,
          height: 26,
          borderRadius: "50%",
          background: "rgba(12,14,28,0.96)",
          originY: 0,
          transformOrigin: "top center",
        }}
        animate={{ scaleY: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.06 }}
      />

      {/* ── MOUTH / LIP SYNC */}
      <motion.div
        style={{
          position: "absolute",
          left: 63,
          top: 68,
          width: 34,
          borderRadius: 8,
          background: "rgba(10,12,24,0.92)",
          originY: 0.5,
        }}
        animate={
          isSpeaking
            ? { height: [3, 9, 3, 11, 3, 7, 3, 10, 3], scaleX: [1, 1.08, 1, 1.05, 1] }
            : { height: 3 }
        }
        transition={
          isSpeaking
            ? { duration: 0.55, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      />

      {/* ── SMILE GLOW while speaking */}
      {isSpeaking && (
        <motion.div
          style={{
            position: "absolute",
            left: 55,
            top: 62,
            width: 50,
            height: 20,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
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
          typingRef.current = setTimeout(typeNext, 36);
        }
      };
      typingRef.current = setTimeout(typeNext, 650);
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
    }, 650);

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
      {/* ── WELCOME MODAL ──────────────────────────────────── */}
      <AnimatePresence>
        {phase === "welcome" && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ scale: 0.72, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.72, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="bg-white rounded-3xl max-w-xs w-full overflow-hidden"
              style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
            >
              {/* ── Robot section: plain white, robot alone ── */}
              <div className="flex flex-col items-center pt-8 pb-3 relative">

                {/* Pulsing speaking rings behind robot */}
                {isSpeaking &&
                  [100, 130, 160].map((size, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: size,
                        height: size,
                        border: "1.5px solid rgba(59,130,246,0.5)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                      }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                    />
                  ))}

                {/* Robot with face animations */}
                <RobotFace isSpeaking={isSpeaking} />

                {/* AI Guide badge */}
                <div className="mt-2 flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-sm z-10">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold text-blue-700">AI Guide · Online</span>
                </div>
              </div>

              {/* ── Text box ── */}
              <div className="px-5 pt-1 pb-2">
                <div
                  className="rounded-2xl p-4 text-sm text-slate-700 leading-relaxed"
                  style={{
                    minHeight: 84,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {displayedText}
                  {displayedText.length < WELCOME_SCRIPT.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.55, repeat: Infinity }}
                      className="inline-block w-[2px] h-[13px] bg-primary ml-[2px] align-middle"
                    />
                  )}
                </div>
              </div>

              {/* ── Buttons: Start Tour FIRST, then No Thanks ── */}
              <div className="px-5 pb-6 flex gap-3 mt-3">
                <Button
                  onClick={dismiss}
                  className="flex-1 h-11 rounded-xl font-semibold shadow-lg text-white"
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MINIMIZED ROBOT (bottom-right, draggable) ──────── */}
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
            {/* Drag-me badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-2 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}
            >
              ✨ Drag me
            </motion.div>

            {/* Robot + X button */}
            <div className="relative">
              <button
                onClick={handleClose}
                onPointerDown={(e) => e.stopPropagation()}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center z-10 shadow-md transition-colors"
              >
                <X className="w-3 h-3" />
              </button>

              <motion.img
                src="/robot.png"
                alt="AI Guide"
                className="w-16 h-16 object-contain"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 8px 18px rgba(59,130,246,0.42))" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
