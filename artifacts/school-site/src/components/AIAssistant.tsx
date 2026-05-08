import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WELCOME_SCRIPT =
  "Namaste! Welcome to Anglo Sanskrit Senior Secondary School, Pundri — a premier institution with over a century of excellence since 1916. I am your AI Guide. I can take you on a complete tour of our school. Click Start Tour to explore, or feel free to browse on your own!";

export function AIAssistant() {
  const [phase, setPhase] = useState<"welcome" | "minimized" | "hidden">("welcome");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopTyping = useCallback(() => {
    if (typingRef.current) clearTimeout(typingRef.current);
  }, []);

  const startTyping = useCallback((text: string) => {
    stopTyping();
    let i = 0;
    setDisplayedText("");
    const typeNext = () => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        typingRef.current = setTimeout(typeNext, 38);
      }
    };
    typingRef.current = setTimeout(typeNext, 700);
  }, [stopTyping]);

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
    }, 700);

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
      {/* ── WELCOME MODAL ─────────────────────────────────── */}
      <AnimatePresence>
        {phase === "welcome" && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.52)", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ scale: 0.72, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.72, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden"
              style={{ boxShadow: "0 30px 90px rgba(0,0,0,0.4)" }}
            >
              {/* ── Robot header area */}
              <div
                className="relative flex flex-col items-center pt-10 pb-5"
                style={{
                  background: "linear-gradient(135deg, #e0f2fe 0%, #ede9fe 100%)",
                }}
              >
                {/* Pulsing rings while speaking */}
                {isSpeaking &&
                  [0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full border-2 border-blue-400/60"
                      style={{ width: 110 + i * 30, height: 110 + i * 30 }}
                      animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0, 0.55] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.28,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                {/* Robot — float + head-bob when speaking */}
                <motion.div
                  animate={{
                    y: isSpeaking ? [0, -10, 2, -7, 0] : [0, -9, 0],
                    rotate: isSpeaking ? [0, 1.5, -1.5, 0] : 0,
                  }}
                  transition={{
                    duration: isSpeaking ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <img
                    src="/robot.png"
                    alt="AI Guide"
                    className="w-40 h-40 object-contain"
                    style={{ filter: "drop-shadow(0 10px 28px rgba(59,130,246,0.38))" }}
                  />
                </motion.div>

                {/* Sound-wave bars while speaking */}
                {isSpeaking && (
                  <div className="flex items-end gap-[3px] h-5 mt-1 z-10">
                    {[0.6, 1, 0.75, 1, 0.55, 0.9, 0.65].map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-1 rounded-full bg-blue-500/70"
                        animate={{ scaleY: [h, 1, h * 0.4, 1, h] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                        style={{ height: 18, originY: 1 }}
                      />
                    ))}
                  </div>
                )}

                {/* Online badge */}
                <div className="mt-3 flex items-center gap-1.5 bg-white/75 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200 shadow-sm z-10">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.45, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold text-blue-700">AI Guide · Online</span>
                </div>
              </div>

              {/* ── Script text box + buttons */}
              <div className="p-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[88px] text-sm text-slate-700 leading-relaxed">
                  {displayedText}
                  {displayedText.length < WELCOME_SCRIPT.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.55, repeat: Infinity }}
                      className="inline-block w-[2px] h-[14px] bg-primary ml-[2px] align-middle"
                    />
                  )}
                </div>

                <div className="flex gap-3 mt-5">
                  <Button
                    onClick={dismiss}
                    variant="outline"
                    className="flex-1 h-11 rounded-xl border-slate-200 text-slate-500 hover:bg-slate-50 font-medium"
                  >
                    No Thanks
                  </Button>
                  <Button
                    onClick={dismiss}
                    className="flex-1 h-11 rounded-xl font-semibold shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
                      color: "white",
                    }}
                  >
                    🚀 Start Tour
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MINIMIZED ROBOT (bottom-right, draggable) ─────── */}
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
              {/* X close */}
              <button
                onClick={handleClose}
                onPointerDown={(e) => e.stopPropagation()}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center z-10 shadow-md transition-colors"
              >
                <X className="w-3 h-3" />
              </button>

              {/* Robot float */}
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
