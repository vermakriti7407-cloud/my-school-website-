import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Persists for the lifetime of the SPA session — welcome shows only once
let welcomeShown = false;

const WELCOME_SCRIPT =
  "Namaste! Welcome to Anglo Sanskrit Senior Secondary School, Pundri — a premier institution with over a century of excellence since 1916. I am your AI Guide. I can take you on a complete tour of our school. Click Start Tour to explore, or feel free to browse on your own!";

// ─────────────────────────────────────────────────────────────────────
// Pure SVG/CSS robot — no image file needed.
// Matches the reference: round white/lavender head, dark visor,
// blue glowing eyes, curved smile, "AI" body, antenna, arms.
// Eyes blink via scaleY; mouth opens/closes for lip-sync.
// ─────────────────────────────────────────────────────────────────────
function SVGRobot({ isSpeaking, size = 180 }: { isSpeaking: boolean; size?: number }) {
  // blink sequence: [open × many, close (0), open × many, close, …]
  const blinkKF = [1, 1, 1, 1, 1, 1, 0.04, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.04, 1];
  const blinkT  = { duration: 5.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as [number,number,number,number] };

  const lipKF   = [2, 11, 2, 14, 3, 8, 2, 12, 2];
  const lipT    = { duration: 0.44, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <motion.svg
      viewBox="0 0 200 265"
      width={size}
      style={{ overflow: "visible" }}
      animate={
        isSpeaking
          ? { y: [0, -6, 2, -5, 0], rotate: [0, 0.8, -0.8, 0] }
          : { y: [0, -9, 0] }
      }
      transition={
        isSpeaking
          ? { duration: 0.85, repeat: Infinity, ease: "easeInOut" }
          : { duration: 2.6,  repeat: Infinity, ease: "easeInOut" }
      }
    >
      <defs>
        {/* Head gradient — white core → lavender edge */}
        <radialGradient id="rg-head" cx="38%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#f8f4ff" />
          <stop offset="70%"  stopColor="#ddd6fe" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </radialGradient>

        {/* Body gradient — lavender */}
        <radialGradient id="rg-body" cx="38%" cy="28%" r="68%">
          <stop offset="0%"   stopColor="#ede9fe" />
          <stop offset="70%"  stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>

        {/* Eye iris — blue glow */}
        <radialGradient id="rg-eye" cx="35%" cy="28%" r="70%">
          <stop offset="0%"   stopColor="#bfdbfe" />
          <stop offset="55%"  stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </radialGradient>

        {/* Arm/hand gradient */}
        <radialGradient id="rg-arm" cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#ede9fe" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </radialGradient>

        {/* Eye glow filter */}
        <filter id="eye-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft drop-shadow filter */}
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="5"
            floodColor="rgba(109,40,217,0.28)" />
        </filter>
      </defs>

      {/* ── ANTENNAE ─────────────────────────── */}
      {/* Left */}
      <line x1="76" y1="47" x2="65" y2="21"
        stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="65" cy="18" r="5.5" fill="#6b7280" />
      <circle cx="65" cy="18" r="3.5" fill="#e5e7eb" />

      {/* Centre (tallest) */}
      <line x1="100" y1="42" x2="100" y2="14"
        stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="10" r="7"   fill="#6b7280" />
      <circle cx="100" cy="10" r="4.5" fill="#e5e7eb" />

      {/* Right */}
      <line x1="124" y1="47" x2="135" y2="21"
        stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="135" cy="18" r="5.5" fill="#6b7280" />
      <circle cx="135" cy="18" r="3.5" fill="#e5e7eb" />

      {/* ── HEAD ─────────────────────────────── */}
      <ellipse cx="100" cy="80" rx="57" ry="52"
        fill="url(#rg-head)" filter="url(#soft-shadow)" />
      {/* Head specular shine */}
      <ellipse cx="80" cy="60" rx="21" ry="13"
        fill="white" fillOpacity="0.38"
        transform="rotate(-22 80 60)" />

      {/* ── FACE VISOR (dark panel) ───────────── */}
      <rect x="50" y="56" width="100" height="58" rx="23" fill="#0d0a1f" />
      <rect x="52" y="58" width="96"  height="54" rx="21" fill="#130e2a" />

      {/* ── LEFT EYE ─────────────────────────── */}
      {/* Group centred at (80, 79) so scaleY blinks from the centre */}
      <g transform="translate(80,79)">
        <motion.g
          animate={{ scaleY: blinkKF }}
          transition={blinkT}
        >
          {/* socket */}
          <circle r="17" fill="#060412" />
          {/* iris */}
          <circle r="13" fill="url(#rg-eye)" filter="url(#eye-glow)" />
          {/* rim */}
          <circle r="13" fill="none" stroke="#60a5fa"
            strokeWidth="1.5" strokeOpacity="0.55" />
          {/* highlights */}
          <circle cx="-6" cy="-6" r="4.5" fill="white" fillOpacity="0.78" />
          <circle cx="5"  cy="5"  r="2"   fill="white" fillOpacity="0.35" />
        </motion.g>
      </g>

      {/* ── RIGHT EYE ────────────────────────── */}
      <g transform="translate(120,79)">
        <motion.g
          animate={{ scaleY: blinkKF }}
          transition={{ ...blinkT, delay: 0.06 }}
        >
          <circle r="17" fill="#060412" />
          <circle r="13" fill="url(#rg-eye)" filter="url(#eye-glow)" />
          <circle r="13" fill="none" stroke="#60a5fa"
            strokeWidth="1.5" strokeOpacity="0.55" />
          <circle cx="-6" cy="-6" r="4.5" fill="white" fillOpacity="0.78" />
          <circle cx="5"  cy="5"  r="2"   fill="white" fillOpacity="0.35" />
        </motion.g>
      </g>

      {/* ── MOUTH ────────────────────────────── */}
      {isSpeaking ? (
        /* Open oval mouth for lip-sync */
        <motion.ellipse
          cx="100" cy="103"
          rx="13"
          ry={2}
          fill="#0a0818"
          stroke="#4c1d95" strokeWidth="0.8"
          animate={{ ry: lipKF }}
          transition={lipT}
        />
      ) : (
        /* Resting cute smile */
        <path
          d="M 82,100 Q 100,117 118,100"
          stroke="white" strokeWidth="3"
          fill="none" strokeLinecap="round"
        />
      )}

      {/* ── NECK ─────────────────────────────── */}
      <rect x="82" y="130" width="36" height="22" rx="11"
        fill="#7c3aed" fillOpacity="0.75" />
      <rect x="85" y="133" width="30" height="16" rx="8"
        fill="#a78bfa" fillOpacity="0.65" />

      {/* ── BODY ─────────────────────────────── */}
      <rect x="36" y="148" width="128" height="98" rx="44"
        fill="url(#rg-body)" filter="url(#soft-shadow)" />
      {/* Body shine */}
      <ellipse cx="74" cy="163" rx="29" ry="18"
        fill="white" fillOpacity="0.26"
        transform="rotate(-16 74 163)" />

      {/* AI badge */}
      <circle cx="100" cy="194" r="18"
        fill="#0e0b20" fillOpacity="0.78" />
      <text x="100" y="199"
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize="12" fontWeight="700"
        fontFamily="system-ui, sans-serif" letterSpacing="0.8">
        AI
      </text>

      {/* ── LEFT ARM ─────────────────────────── */}
      <rect x="6" y="155" width="32" height="62" rx="16"
        fill="url(#rg-arm)" filter="url(#soft-shadow)"
        transform="rotate(-10 22 186)" />
      {/* Left hand */}
      <circle cx="13" cy="218" r="13"
        fill="#c4b5fd"
        transform="rotate(-10 13 218)" />
      <circle cx="13" cy="218" r="13"
        fill="white" fillOpacity="0.2"
        transform="rotate(-10 13 218)" />

      {/* ── RIGHT ARM ────────────────────────── */}
      <rect x="162" y="155" width="32" height="62" rx="16"
        fill="url(#rg-arm)" filter="url(#soft-shadow)"
        transform="rotate(10 178 186)" />
      {/* Right hand */}
      <circle cx="187" cy="218" r="13"
        fill="#c4b5fd"
        transform="rotate(10 187 218)" />
      <circle cx="187" cy="218" r="13"
        fill="white" fillOpacity="0.2"
        transform="rotate(10 187 218)" />
    </motion.svg>
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

                <SVGRobot isSpeaking={isSpeaking} size={178} />
              </div>

              {/* ── WHITE CARD — starts below robot ── */}
              <div
                className="bg-white w-full rounded-3xl pt-10 pb-6 px-5"
                style={{ boxShadow: "0 32px 100px rgba(0,0,0,0.45)" }}
              >
                {/* Wave bars + badge */}
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
                  ) : (
                    <div style={{ height: 16 }} />
                  )}

                  <div className="flex items-center gap-1.5 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold text-violet-700">
                      AI Guide · Online
                    </span>
                  </div>
                </div>

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
              <SVGRobot isSpeaking={false} size={64} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
