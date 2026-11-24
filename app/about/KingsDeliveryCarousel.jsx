"use client";

import { useEffect, useState } from "react";

const PHASES = [
  { id: 0, ms: 1800, caption: "La la la, what a lovely walk 🎵" },
  { id: 1, ms: 2800, caption: "Beep beep! 🚗 Coming through!" },
  { id: 2, ms: 1500, caption: "SPLASH!! 💦" },
  { id: 3, ms: 2400, caption: "Uh oh… muddy mess 😱" },
  { id: 4, ms: 2600, caption: "…to be continued!" },
];

const W = 900, H = 560;

// ── Perspective ─────────────────────────────────────────────────────────────
const VX = 450, VY = 235;
const NEAR_L = -120, NEAR_R = 1020;
const FAR_L  = 330,  FAR_R  = 570;
const SCENE_H = 380;
const HORIZON = VY;

const lerp = (a, b, t) => a + (b - a) * t;
const roadPoint = (depth, side) => {
  const y = lerp(HORIZON, SCENE_H, depth);
  const left  = lerp(FAR_L, NEAR_L, depth);
  const right = lerp(FAR_R, NEAR_R, depth);
  const x = lerp((left + right) / 2, side < 0 ? left : right, Math.abs(side));
  return { x, y };
};

export default function KingsDeliveryCarousel() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let cancelled = false, timer, i = 0;
    const tick = () => {
      if (cancelled) return;
      setPhase(PHASES[i].id);
      const d = PHASES[i].ms;
      i = (i + 1) % PHASES.length;
      timer = setTimeout(tick, d);
    };
    tick();
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  const carVisible = phase === 1 || phase === 2;
  const carDepth   = phase === 1 ? 0.85 : 0.85;
  const carSide    = phase === 1 ? -0.85 : -0.62;
  const carPos     = roadPoint(carDepth, carSide);
  const carScale   = 0.38 + carDepth * 0.95;

  const honk       = phase === 1;
  const splash     = phase === 2;
  const soaked     = phase >= 2;
  const walking    = phase === 0 || phase === 1;
  const react      = phase === 2;   // "!?" reaction
  const sad        = phase === 3 || phase === 4;

  const pedDepth = 0.72;
  const pedSide  = 0.78;
  const pedPos   = roadPoint(pedDepth, pedSide);
  const pedScale = 0.5 + pedDepth * 0.75;

  return (
    <div className="kings-3d">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="kings-3d-svg"
        role="img"
        aria-label="Fun 3D street scene — car splashes a walker"
      >
        <defs>
          {/* Sunny sky */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#7dd3fc" />
            <stop offset="55%"  stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>

          <linearGradient id="hazeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#6b7280" />
            <stop offset="55%"  stopColor="#4b5563" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          <linearGradient id="roadSheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#cbd5e1" stopOpacity="0" />
            <stop offset="55%"  stopColor="#e2e8f0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.7" />
          </linearGradient>

          {/* Bright, saturated car */}
          <linearGradient id="carFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fbbf24" />
            <stop offset="45%"  stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="carSideGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#b45309" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
          <linearGradient id="carTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          <radialGradient id="mudGrad" cx="0.5" cy="0.35" r="0.7">
            <stop offset="0%"   stopColor="#b45309" />
            <stop offset="100%" stopColor="#451a03" />
          </radialGradient>

          <radialGradient id="puddleGrad" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0%"   stopColor="#7c2d12" />
            <stop offset="80%"  stopColor="#451a03" />
            <stop offset="100%" stopColor="#1c1917" />
          </radialGradient>

          <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="tight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>

          <clipPath id="sceneClip">
            <rect x="0" y="0" width={W} height={SCENE_H} />
          </clipPath>
        </defs>

        {/* ═════════════ SCENE 1 ═════════════ */}
        <g clipPath="url(#sceneClip)">

          {/* SKY */}
          <rect width={W} height={SCENE_H} fill="url(#skyGrad)" />

          {/* SUN with sunglasses 😎 */}
          <g transform={`translate(${VX + 270}, ${VY - 120})`}>
            <circle r="72" fill="#fef3c7" opacity="0.5" />
            <circle r="48" fill="#fde68a" className="sun-bob" />
            <circle r="30" fill="#fbbf24" />
            {/* sunglasses */}
            <g transform="translate(-14, -4)">
              <rect x="0" y="0" width="11" height="7" rx="2" fill="#0f172a" />
              <rect x="16" y="0" width="11" height="7" rx="2" fill="#0f172a" />
              <line x1="11" y1="3" x2="16" y2="3" stroke="#0f172a" strokeWidth="2" />
            </g>
            {/* smile */}
            <path d="M-10,10 Q0,18 10,10" stroke="#7c2d12" strokeWidth="2"
              fill="none" strokeLinecap="round" />
          </g>

          {/* Fluffy clouds drifting */}
          <g opacity="0.95">
            <g className="cloud-drift">
              <ellipse cx={VX - 260} cy={VY - 130} rx="62" ry="22" fill="#fff" />
              <ellipse cx={VX - 205} cy={VY - 138} rx="46" ry="18" fill="#fff" />
              <ellipse cx={VX - 310} cy={VY - 136} rx="38" ry="15" fill="#fff" />
            </g>
            <g className="cloud-drift cloud-drift--slow">
              <ellipse cx={VX + 40} cy={VY - 170} rx="52" ry="16" fill="#fff" />
              <ellipse cx={VX + 85} cy={VY - 176} rx="38" ry="12" fill="#fff" />
            </g>
          </g>

          {/* Little birds (V shapes) */}
          {[
            { x: VX + 130, y: VY - 150, s: 1, d: 0 },
            { x: VX + 200, y: VY - 165, s: 0.8, d: 0.4 },
            { x: VX - 90, y: VY - 180, s: 0.9, d: 0.8 },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x}, ${b.y}) scale(${b.s})`}
               className="bird-flap" style={{ animationDelay: `${b.d}s` }}>
              <path d="M-6,0 Q-3,-4 0,0 Q3,-4 6,0"
                stroke="#1e293b" strokeWidth="1.6" fill="none"
                strokeLinecap="round" />
            </g>
          ))}

          {/* DISTANT BUILDINGS (colorful) */}
          <g opacity="0.9">
            {[
              { x: -80, w: 130, h: 60,  fill: "#fca5a5" },
              { x: 40,  w: 90,  h: 85,  fill: "#fcd34d" },
              { x: 130, w: 110, h: 55,  fill: "#93c5fd" },
              { x: 640, w: 100, h: 75,  fill: "#c4b5fd" },
              { x: 740, w: 120, h: 60,  fill: "#fdba74" },
              { x: 850, w: 110, h: 90,  fill: "#f9a8d4" },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={HORIZON - b.h} width={b.w} height={b.h} fill={b.fill} />
                {Array.from({ length: Math.floor(b.w / 22) }).map((_, j) =>
                  Array.from({ length: Math.floor(b.h / 22) }).map((_, k) => (
                    <rect key={`${j}-${k}`}
                      x={b.x + 8 + j * 22}
                      y={HORIZON - b.h + 8 + k * 22}
                      width="10" height="12" fill="#ffffff" opacity="0.85" />
                  ))
                )}
              </g>
            ))}
          </g>

          {/* HAZE */}
          <rect x="0" y={HORIZON - 30} width={W} height="80" fill="url(#hazeGrad)" />

          {/* FAR SIDEWALK */}
          <polygon
            points={`0,${HORIZON} ${W},${HORIZON} ${W},${HORIZON + 20} 0,${HORIZON + 20}`}
            fill="#f1f5f9" opacity="0.8"
          />

          {/* ROAD */}
          <polygon
            points={`${FAR_L},${HORIZON} ${FAR_R},${HORIZON} ${NEAR_R},${SCENE_H} ${NEAR_L},${SCENE_H}`}
            fill="url(#asphalt)"
          />

          {/* Road sheen */}
          <polygon
            points={`${(FAR_L + FAR_R) / 2 - 6},${HORIZON} ${(FAR_L + FAR_R) / 2 + 6},${HORIZON} ${(NEAR_L + NEAR_R) / 2 + 20},${SCENE_H} ${(NEAR_L + NEAR_R) / 2 - 20},${SCENE_H}`}
            fill="url(#roadSheen)" opacity="0.45"
          />

          {/* Dashed center line */}
          {Array.from({ length: 12 }).map((_, i) => {
            const t = (i + 0.4) / 12;
            const y = lerp(HORIZON + 6, SCENE_H - 4, t);
            const w = lerp(4, 34, t);
            const h = lerp(1.5, 6, t);
            const cx = lerp((FAR_L + FAR_R) / 2, (NEAR_L + NEAR_R) / 2, t);
            return (
              <rect key={i} x={cx - w / 2} y={y} width={w} height={h} rx={h / 2}
                fill="#fef3c7" opacity={0.7 + t * 0.3} />
            );
          })}

          {/* Left + right curbs */}
          <polygon
            points={`${FAR_L},${HORIZON} ${FAR_L - 30},${HORIZON} ${NEAR_L - 90},${SCENE_H} ${NEAR_L},${SCENE_H}`}
            fill="#e2e8f0" />
          <polygon
            points={`${FAR_R},${HORIZON} ${FAR_R + 30},${HORIZON} ${NEAR_R + 90},${SCENE_H} ${NEAR_R},${SCENE_H}`}
            fill="#e2e8f0" />

          {/* Bright grassy strips beyond curbs */}
          <polygon
            points={`${FAR_R + 30},${HORIZON} ${W},${HORIZON} ${W},${SCENE_H} ${NEAR_R + 90},${SCENE_H}`}
            fill="#86efac" opacity="0.55" />

          {/* Lamp posts */}
          {[0.15, 0.35, 0.6, 0.85].map((t, i) => {
            const p = roadPoint(t, -1.05);
            const s = 0.4 + t * 0.9;
            return (
              <g key={i} transform={`translate(${p.x}, ${p.y}) scale(${s})`}>
                <line x1="0" y1="0" x2="0" y2="-90" stroke="#0f172a" strokeWidth="3" />
                <circle cx="0" cy="-92" r="6" fill="#fbbf24" />
                <circle cx="0" cy="-92" r="14" fill="#fde68a" opacity="0.45" filter="url(#soft)" />
              </g>
            );
          })}

          {/* Trees on right (bright green) */}
          {[0.2, 0.4, 0.7].map((t, i) => {
            const p = roadPoint(t, 1.18);
            const s = 0.4 + t * 0.7;
            return (
              <g key={i} transform={`translate(${p.x}, ${p.y}) scale(${s})`}>
                <rect x="-3" y="-30" width="6" height="30" fill="#78350f" />
                <circle cx="0" cy="-38" r="22" fill="#22c55e" />
                <circle cx="-12" cy="-30" r="16" fill="#4ade80" />
                <circle cx="12" cy="-30" r="16" fill="#16a34a" />
              </g>
            );
          })}

          {/* ═════════════ PEDESTRIAN ═════════════ */}
          <g transform={`translate(${pedPos.x}, ${pedPos.y}) scale(${pedScale})`}>
            {/* cast shadow */}
            <ellipse cx="0" cy="4" rx="22" ry="6"
              fill="#000" opacity="0.35" filter="url(#tight)" />

            {/* bobbing walk container */}
            <g className={walking ? "ped-bob" : ""}>
              {/* legs */}
              <line x1="-4" y1="0" x2={walking ? "-14" : "-6"} y2="18"
                stroke="#1e293b" strokeWidth="7" strokeLinecap="round"
                className={walking ? "ped-leg-l" : ""}
                style={{ transformOrigin: "-4px 0" }} />
              <line x1="4" y1="0" x2={walking ? "14" : "6"} y2="18"
                stroke="#1e293b" strokeWidth="7" strokeLinecap="round"
                className={walking ? "ped-leg-r" : ""}
                style={{ transformOrigin: "4px 0" }} />

              {/* torso — bright white */}
              <path d="M-13,-42 L13,-42 L13,0 Q0,4 -13,0 Z"
                fill={soaked ? "#a8a29e" : "#ffffff"} />
              <path d="M-13,-42 L-13,0 Q-7,3 0,3 L0,-42 Z"
                fill={soaked ? "#57534e" : "#e2e8f0"} opacity="0.5" />
              {/* collar */}
              <path d="M-6,-42 L0,-36 L6,-42 Z"
                fill={soaked ? "#78716c" : "#cbd5e1"} />

              {/* arms */}
              <line x1="-13" y1="-32" x2={walking ? "-24" : "-20"} y2={walking ? "-20" : "-14"}
                stroke="#fcd34d" strokeWidth="7" strokeLinecap="round"
                className={walking ? "ped-arm-l" : ""}
                style={{ transformOrigin: "-13px -32px" }} />
              <line x1="13" y1="-32" x2={walking ? "24" : "20"} y2={walking ? "-20" : "-14"}
                stroke="#fcd34d" strokeWidth="7" strokeLinecap="round"
                className={walking ? "ped-arm-r" : ""}
                style={{ transformOrigin: "13px -32px" }} />

              {/* head */}
              <circle cx="0" cy="-56" r="14" fill="#fcd34d" />
              <path d="M-14,-56 A14,14 0 0 1 14,-56"
                fill="#fbbf24" opacity="0.4" />
              <ellipse cx="-5" cy="-58" rx="1.8" ry="2.4" fill="#1e293b" />
              <ellipse cx="5"  cy="-58" rx="1.8" ry="2.4" fill="#1e293b" />

              {/* mouth / expression */}
              {soaked ? (
                sad ? (
                  <path d="M-4,-49 Q0,-53 4,-49" stroke="#78350f" strokeWidth="1.8"
                    fill="none" strokeLinecap="round" />
                ) : (
                  <ellipse cx="0" cy="-50" rx="3.5" ry="4.5" fill="#78350f" />
                )
              ) : (
                <path d="M-4,-50 Q0,-47 4,-50" stroke="#78350f" strokeWidth="1.8"
                  fill="none" strokeLinecap="round" />
              )}

              {/* music notes while walking */}
              {walking && (
                <g>
                  <text x="-32" y="-70" fontSize="14" fill="#3b82f6"
                    className="note-float">♪</text>
                  <text x="-26" y="-90" fontSize="12" fill="#8b5cf6"
                    className="note-float" style={{ animationDelay: "0.4s" }}>♫</text>
                </g>
              )}

              {/* "!?" reaction when splashed */}
              {react && (
                <g style={{ animation: "reactPop .6s ease-out" }}>
                  <text x="0" y="-100" textAnchor="middle" fontSize="34"
                    fontWeight="900" fill="#ef4444" fontFamily="sans-serif">!?</text>
                </g>
              )}

              {/* mud splotches once soaked */}
              {soaked && (
                <g style={{ animation: "fadeIn .3s ease-out" }}>
                  <circle cx="-6" cy="-28" r="5" fill="#451a03" opacity="0.85" />
                  <circle cx="7"  cy="-20" r="6" fill="#78350f" opacity="0.85" />
                  <circle cx="-3" cy="-10" r="4" fill="#451a03" opacity="0.85" />
                  <circle cx="-8" cy="-52" r="2.5" fill="#451a03" opacity="0.85" />
                  <circle cx="8"  cy="-54" r="2.5" fill="#451a03" opacity="0.85" />
                </g>
              )}
            </g>

            {/* sweat drop when sad */}
            {sad && (
              <g className="sweat-drop" transform="translate(16, -66)">
                <path d="M0,0 Q4,6 0,10 Q-4,6 0,0 Z" fill="#38bdf8" />
              </g>
            )}
          </g>

          {/* ═════════════ CAR — bright yellow cartoon car ═════════════ */}
          {carVisible && (
            <g
              style={{
                transform: `translate(${carPos.x}px, ${carPos.y}px) scale(${carScale})`,
                transition: "transform 2.4s cubic-bezier(.34,1.2,.44,1)",
              }}
              className="car-bounce"
            >
              {/* ground shadow */}
              <ellipse cx="0" cy="48" rx="72" ry="12"
                fill="#000" opacity="0.4" filter="url(#soft)" />

              {/* side face */}
              <polygon points="-62,10 -62,42 62,42 62,10" fill="url(#carSideGrad)" />
              {/* front face hints */}
              <polygon points="-62,10 -44,22 -44,46 -62,42" fill="url(#carFront)" />
              <polygon points="62,10 44,22 44,46 62,42" fill="url(#carFront)" />
              {/* roof */}
              <polygon points="-62,10 -44,0 -8,-14 32,-14 62,10" fill="url(#carTop)" />

              {/* cabin box */}
              <polygon points="-38,10 -22,-2 22,-2 38,10" fill="#b45309" />
              <polygon points="-38,10 -22,-2 -22,4 -38,14" fill="#d97706" />
              <polygon points="38,10 22,-2 22,4 38,14" fill="#d97706" />

              {/* windshield with big cartoon eyes peeking through */}
              <polygon points="-30,10 -16,-2 16,-2 30,10"
                fill="#bfdbfe" opacity="0.95" />
              <polygon points="-30,10 -16,-2 16,-2 30,10"
                fill="#0ea5e9" opacity="0.2" />
              {/* eyes */}
              <circle cx="-6" cy="2" r="3.2" fill="#1e293b" />
              <circle cx="6"  cy="2" r="3.2" fill="#1e293b" />
              <circle cx="-5" cy="1" r="1" fill="#fff" />
              <circle cx="7"  cy="1" r="1" fill="#fff" />
              {/* smile */}
              <path d="M-8,6 Q0,10 8,6" stroke="#1e293b" strokeWidth="1.2"
                fill="none" strokeLinecap="round" />

              {/* side windows */}
              <rect x="-56" y="16" width="14" height="12" rx="1.5" fill="#bfdbfe" />
              <rect x="42"  y="16" width="14" height="12" rx="1.5" fill="#bfdbfe" />

              {/* door line + handle */}
              <line x1="0" y1="10" x2="0" y2="42" stroke="#7c2d12" strokeWidth="1.5" />
              <rect x="-8" y="24" width="6" height="2" rx="1" fill="#fef3c7" />
              <rect x="2"  y="24" width="6" height="2" rx="1" fill="#fef3c7" />

              {/* lights */}
              <rect x="-42" y="34" width="14" height="6" rx="1" fill="#fef08a" />
              <rect x="28"  y="34" width="14" height="6" rx="1" fill="#fef08a" />
              <rect x="-16" y="36" width="32" height="4" rx="1" fill="#0f172a" opacity="0.85" />

              {/* wheels — big and bouncy */}
              {[{ x: -40, y: 40 }, { x: 40, y: 40 }].map((w, i) => (
                <g key={i} className="wheel-spin" style={{ transformOrigin: `${w.x}px ${w.y}px` }}>
                  <ellipse cx={w.x} cy={w.y} rx="14" ry="12.5" fill="#0f172a" />
                  <ellipse cx={w.x} cy={w.y} rx="7.5" ry="6.5" fill="#94a3b8" />
                  <ellipse cx={w.x} cy={w.y} rx="3" ry="2.5" fill="#e2e8f0" />
                  <line x1={w.x - 5} y1={w.y} x2={w.x + 5} y2={w.y}
                    stroke="#475569" strokeWidth="1.5" />
                </g>
              ))}

              {/* "beep beep!" speech bubble while honking */}
              {honk && (
                <g style={{ animation: "bubblePop .5s ease-out" }}>
                  <ellipse cx="-92" cy="-32" rx="42" ry="20" fill="#ffffff"
                    stroke="#0f172a" strokeWidth="2" />
                  <polygon points="-70,-18 -60,-8 -78,-14" fill="#ffffff"
                    stroke="#0f172a" strokeWidth="2" />
                  <polygon points="-70,-18 -60,-8 -78,-14" fill="#ffffff" />
                  <text x="-92" y="-26" textAnchor="middle" fontSize="12"
                    fontWeight="900" fill="#0f172a" fontFamily="sans-serif">BEEP</text>
                  <text x="-92" y="-14" textAnchor="middle" fontSize="10"
                    fontWeight="700" fill="#ef4444" fontFamily="sans-serif">beep!</text>
                </g>
              )}

              {/* splash spray from wheels */}
              {splash && (
                <g style={{ animation: "splashOut .9s ease-out forwards" }}>
                  {[
                    { x: -40, y: 44, dx: -44, dy: -26 },
                    { x: -40, y: 46, dx: -60, dy: -14 },
                    { x: 40,  y: 46, dx: 60,  dy: -16 },
                  ].map((d, i) => (
                    <path key={i}
                      d={`M ${d.x} ${d.y} q ${d.dx / 2} ${d.dy} ${d.dx} 8`}
                      fill="none" stroke="#7c2d12" strokeWidth="4"
                      strokeLinecap="round" opacity="0.9" />
                  ))}
                </g>
              )}
            </g>
          )}

          {/* ═════════════ BIG COMIC SPLASH ═════════════ */}
          {splash && (
            <g transform={`translate(${pedPos.x}, ${pedPos.y - 40 * pedScale})`}>
              {/* big cartoon starburst */}
              <g style={{ animation: "splashBurst 1.2s ease-out forwards" }}>
                <polygon
                  points={Array.from({ length: 24 }).map((_, i) => {
                    const a = (i / 24) * Math.PI * 2;
                    const r = i % 2 === 0 ? 110 * pedScale : 62 * pedScale;
                    return `${Math.cos(a) * r},${Math.sin(a) * r * 0.75}`;
                  }).join(" ")}
                  fill="#7c2d12" opacity="0.85" />
                <polygon
                  points={Array.from({ length: 24 }).map((_, i) => {
                    const a = (i / 24) * Math.PI * 2;
                    const r = i % 2 === 0 ? 88 * pedScale : 46 * pedScale;
                    return `${Math.cos(a) * r},${Math.sin(a) * r * 0.75}`;
                  }).join(" ")}
                  fill="#a16207" />
                {/* SPLASH word */}
                <text x="0" y="6" textAnchor="middle" fontSize="30"
                  fontWeight="900" fill="#fef3c7" fontFamily="sans-serif"
                  letterSpacing="2">SPLASH!</text>
              </g>

              {/* 3D droplets */}
              {Array.from({ length: 18 }).map((_, i) => {
                const a = (i / 18) * Math.PI * 2;
                const dist = (50 + (i % 5) * 12) * pedScale;
                return (
                  <circle key={i}
                    cx={Math.cos(a) * dist}
                    cy={Math.sin(a) * dist * 0.7}
                    r={(2 + (i % 3)) * pedScale}
                    fill={i % 3 === 0 ? "#7c2d12" : i % 3 === 1 ? "#451a03" : "#a16207"}
                    style={{
                      animation: "dropletFly 1s ease-out forwards",
                      animationDelay: `${i * 0.03}s`,
                      transformOrigin: "center",
                    }} />
                );
              })}

              {/* puddle expanding under them */}
              <ellipse cx="0" cy={44 * pedScale}
                rx={72 * pedScale} ry={16 * pedScale}
                fill="url(#puddleGrad)"
                style={{ animation: "puddlePop .8s ease-out forwards" }} />
            </g>
          )}

          {/* wet reflection */}
          {carVisible && (
            <g
              style={{
                transform: `translate(${carPos.x}px, ${carPos.y}px) scale(${carScale})`,
                transition: "transform 2.4s cubic-bezier(.34,1.2,.44,1)",
                opacity: 0.28,
              }}
            >
              <ellipse cx="0" cy="54" rx="58" ry="10" fill="#b45309" filter="url(#soft)" />
              <ellipse cx="0" cy="52" rx="40" ry="6" fill="#fbbf24" filter="url(#soft)" />
            </g>
          )}
        </g>

        {/* ═════════════ RESERVED SPACE ═════════════ */}
        <g>
          <rect x="0" y={SCENE_H} width={W} height={H - SCENE_H} fill="#f8fafc" />
          <line x1="40" y1={SCENE_H + 30} x2={W - 40} y2={SCENE_H + 30}
            stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 8" opacity="0.7" />
          <text x={W / 2} y={SCENE_H + 80} textAnchor="middle"
            fontSize="14" fill="#94a3b8" fontFamily="sans-serif" letterSpacing="2">
            SCENE 2 — coming next
          </text>
        </g>
      </svg>

      <p className="kings-3d-caption" aria-live="polite">
        {PHASES.find((p) => p.id === phase)?.caption}
      </p>

      <style>{`
        .kings-3d { position: relative; width: 100%; }
        .kings-3d-svg {
          width: 100%; height: auto; display: block;
          border-radius: 20px;
          box-shadow:
            0 14px 34px rgba(15,23,42,.15),
            inset 0 0 0 1px rgba(255,255,255,.4);
          background: #f8fafc;
        }
        .kings-3d-caption {
          margin-top: .8rem; text-align: center;
          font-size: .95rem; font-weight: 600; color: #334155;
          min-height: 1.5em;
        }

        /* ── walking pedestrian ── */
        .ped-arm-l, .ped-leg-l { animation: pedSwing .8s ease-in-out infinite alternate; }
        .ped-arm-r, .ped-leg-r { animation: pedSwing .8s ease-in-out infinite alternate-reverse; }
        @keyframes pedSwing { from { transform: rotate(-15deg); } to { transform: rotate(15deg); } }

        .ped-bob { animation: pedBob 1.2s ease-in-out infinite; }
        @keyframes pedBob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }

        /* ── floating music notes ── */
        .note-float {
          animation: noteFloat 1.6s ease-in-out infinite;
          opacity: 0;
        }
        @keyframes noteFloat {
          0%   { transform: translateY(0) rotate(-8deg); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(-26px) rotate(8deg); opacity: 0; }
        }

        /* ── birds ── */
        .bird-flap { animation: birdFlap 1.4s ease-in-out infinite; }
        @keyframes birdFlap {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }

        /* ── clouds ── */
        .cloud-drift { animation: cloudDrift 16s linear infinite; }
        .cloud-drift--slow { animation-duration: 22s; }
        @keyframes cloudDrift {
          0%   { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }

        /* ── sun bobbing ── */
        .sun-bob { animation: sunBob 3s ease-in-out infinite; transform-origin: center; }
        @keyframes sunBob {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }

        /* ── car bounce ── */
        .car-bounce {
          animation: carBounce .6s ease-in-out infinite;
        }
        @keyframes carBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }

        /* ── wheels spin ── */
        .wheel-spin { animation: wheelSpin .9s linear infinite; }
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── speech bubble ── */
        @keyframes bubblePop {
          0%   { transform: scale(0.4); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }

        /* ── splash ── */
        @keyframes splashBurst {
          0%   { opacity: 0; transform: scale(0.2) rotate(-15deg); }
          25%  { opacity: 1; transform: scale(1.15) rotate(0deg); }
          55%  { transform: scale(1) rotate(0); }
          100% { opacity: 0; transform: scale(1.5) rotate(6deg); }
        }
        @keyframes dropletFly {
          0%   { transform: scale(0.4); opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: scale(1.6) translateY(10px); opacity: 0; }
        }
        @keyframes splashOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes puddlePop {
          from { transform: scale(0.2); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }

        /* ── reaction "!?" ── */
        @keyframes reactPop {
          0%   { transform: scale(0.3) translateY(10px); opacity: 0; }
          60%  { transform: scale(1.3) translateY(0); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }

        /* ── sweat drop ── */
        .sweat-drop { animation: sweatDrip 2s ease-in-out infinite; }
        @keyframes sweatDrip {
          0%   { transform: translate(16px, -66px) scale(0.6); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translate(16px, -46px) scale(1); opacity: 0; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          .ped-arm-l, .ped-arm-r, .ped-leg-l, .ped-leg-r,
          .ped-bob, .note-float, .bird-flap, .cloud-drift,
          .sun-bob, .car-bounce, .wheel-spin, .sweat-drop {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}