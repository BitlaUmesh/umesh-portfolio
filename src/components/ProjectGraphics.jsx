import React from 'react';

export default function ProjectGraphics({ type }) {
  switch (type) {
    case 'rag':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          {/* Background pattern */}
          <defs>
            <radialGradient id="rag-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(196, 192, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(196, 192, 255, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#rag-glow)" />
          
          {/* Sanskrit Text lines / Document */}
          <g transform="translate(75, 30)">
            {/* Scroll/Paper base */}
            <rect x="0" y="0" width="50" height="80" rx="4" fill="rgba(18, 18, 31, 0.6)" stroke="rgba(196, 192, 255, 0.4)" strokeWidth="1.5" className="floating-scroll" />
            {/* Sanskrit-like lines */}
            <line x1="10" y1="18" x2="40" y2="18" stroke="rgba(196, 192, 255, 0.8)" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="28" x2="35" y2="28" stroke="rgba(196, 192, 255, 0.8)" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="38" x2="40" y2="38" stroke="rgba(196, 192, 255, 0.8)" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="48" x2="30" y2="48" stroke="rgba(196, 192, 255, 0.8)" strokeWidth="2" strokeLinecap="round" />
            {/* Scroll bottom curl */}
            <path d="M -4 76 L 54 76 C 54 82, -4 82, -4 76" fill="rgba(196, 192, 255, 0.3)" stroke="rgba(196, 192, 255, 0.5)" strokeWidth="1" />
          </g>

          {/* Semantic Search Vector nodes */}
          <g className="vector-nodes">
            {/* Converging vectors */}
            <path d="M 25 35 Q 50 45, 80 50" fill="none" stroke="rgba(0, 210, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" className="vector-line-1" />
            <path d="M 30 110 Q 55 90, 80 75" fill="none" stroke="rgba(0, 210, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" className="vector-line-2" />
            <path d="M 175 40 Q 150 55, 120 60" fill="none" stroke="rgba(0, 210, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" className="vector-line-3" />
            <path d="M 170 105 Q 145 95, 120 85" fill="none" stroke="rgba(0, 210, 255, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" className="vector-line-4" />

            {/* Pulse dots */}
            <circle cx="80" cy="50" r="3" fill="#00d2ff" className="vector-pulse-dot" />
            <circle cx="80" cy="75" r="3" fill="#00d2ff" className="vector-pulse-dot" />
            <circle cx="120" cy="60" r="3" fill="#00d2ff" className="vector-pulse-dot" />
            <circle cx="120" cy="85" r="3" fill="#00d2ff" className="vector-pulse-dot" />

            <circle cx="25" cy="35" r="4" fill="rgba(135, 129, 255, 0.8)" />
            <circle cx="30" cy="110" r="4" fill="rgba(135, 129, 255, 0.8)" />
            <circle cx="175" cy="40" r="4" fill="rgba(135, 129, 255, 0.8)" />
            <circle cx="170" cy="105" r="4" fill="rgba(135, 129, 255, 0.8)" />
          </g>
        </svg>
      );

    case 'neural':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          <defs>
            <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0, 210, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(0, 210, 255, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#neural-glow)" />

          {/* Central Hub Chip */}
          <g transform="translate(100, 70)" className="neural-chip-group">
            <rect x="-22" y="-22" width="44" height="44" rx="6" fill="rgba(18, 18, 31, 0.8)" stroke="#00d2ff" strokeWidth="2" className="neural-chip" />
            <circle cx="0" cy="0" r="8" fill="rgba(135, 129, 255, 0.4)" stroke="#8781ff" strokeWidth="1.5" className="chip-core" />
            
            {/* Connection tracks */}
            <path d="M -22 -10 H -42 V -30 H -62" fill="none" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="1.5" className="circuit-path-1" />
            <path d="M -22 10 H -42 V 30 H -62" fill="none" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="1.5" className="circuit-path-2" />
            <path d="M 22 -10 H 42 V -30 H 62" fill="none" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="1.5" className="circuit-path-3" />
            <path d="M 22 10 H 42 V 30 H 62" fill="none" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="1.5" className="circuit-path-4" />

            {/* Nodes at end of tracks */}
            <circle cx="-62" cy="-30" r="3" fill="#00d2ff" />
            <circle cx="-62" cy="30" r="3" fill="#00d2ff" />
            <circle cx="62" cy="-30" r="3" fill="#00d2ff" />
            <circle cx="62" cy="30" r="3" fill="#00d2ff" />

            {/* Data flow pulses */}
            <circle r="2.5" fill="#fff" className="data-pulse-1" />
            <circle r="2.5" fill="#fff" className="data-pulse-2" />
            <circle r="2.5" fill="#fff" className="data-pulse-3" />
            <circle r="2.5" fill="#fff" className="data-pulse-4" />
          </g>
        </svg>
      );

    case 'vision':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          <defs>
            <radialGradient id="vision-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(52, 211, 153, 0.25)" />
              <stop offset="100%" stopColor="rgba(52, 211, 153, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#vision-glow)" />

          <g transform="translate(75, 25)">
            {/* Document sheet */}
            <rect x="10" y="10" width="40" height="65" rx="3" fill="rgba(18, 18, 31, 0.7)" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
            
            {/* Image mock inside document */}
            <rect x="16" y="18" width="28" height="20" rx="2" fill="rgba(52, 211, 153, 0.15)" stroke="rgba(52, 211, 153, 0.3)" strokeWidth="1" />
            <circle cx="24" cy="26" r="3" fill="rgba(52, 211, 153, 0.6)" />
            <path d="M 18 34 L 26 28 L 32 32 L 40 26 L 42 34 Z" fill="rgba(52, 211, 153, 0.3)" />

            {/* Text lines mock */}
            <line x1="16" y1="46" x2="44" y2="46" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="52" x2="38" y2="52" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="58" x2="42" y2="58" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="64" x2="30" y2="64" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Scanning laser line */}
          <g className="laser-scanner">
            <line x1="45" y1="0" x2="155" y2="0" stroke="#10b981" strokeWidth="2" strokeLinecap="round" className="laser-beam" />
            <rect x="45" y="-6" width="110" height="12" fill="url(#laser-gradient)" className="laser-glow" opacity="0.3" />
          </g>
          <defs>
            <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'security':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          <defs>
            <radialGradient id="sec-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.25)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#sec-glow)" />

          {/* Radar Circles */}
          <g transform="translate(100, 70)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="15" fill="none" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1" />
            
            {/* Axis */}
            <line x1="-52" y1="0" x2="52" y2="0" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />
            <line x1="0" y1="-52" x2="0" y2="52" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />

            {/* Sweep radar hand */}
            <line x1="0" y1="0" x2="35" y2="-30" stroke="rgba(239, 68, 68, 0.8)" strokeWidth="1.5" className="radar-sweep" />

            {/* Pulsing Shield in center */}
            <g className="shield-pulse">
              <path d="M -8 -10 L 0 -14 L 8 -10 L 8 -2 C 8 4, 0 10, 0 12 C 0 10, -8 4, -8 -2 Z" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1.5" />
            </g>

            {/* Warning threat blips */}
            <circle cx="-25" cy="-20" r="3" fill="#ef4444" className="radar-threat-1" />
            <circle cx="28" cy="20" r="2.5" fill="#ef4444" className="radar-threat-2" />
          </g>
        </svg>
      );

    case 'shopping':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          <defs>
            <radialGradient id="shop-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.25)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#shop-glow)" />

          <g transform="translate(100, 70)">
            {/* Shopping Cart Outline */}
            <g transform="translate(-18, -18)" className="floating-cart">
              <path d="M 0 5 H 6 L 12 24 H 30 L 35 10 H 10" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="14" cy="29" r="3.5" fill="#3b82f6" />
              <circle cx="28" cy="29" r="3.5" fill="#3b82f6" />
            </g>

            {/* Floating Price tags / sparkles */}
            <g className="floating-deals">
              <g className="deal-pill-1">
                <rect x="-42" y="-35" width="22" height="12" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                <text x="-31" y="-27" fontSize="8" fill="#a5f3fc" textAnchor="middle" fontWeight="bold">$</text>
              </g>
              <g className="deal-pill-2">
                <rect x="22" y="-20" width="22" height="12" rx="3" fill="rgba(0, 210, 255, 0.2)" stroke="rgba(0, 210, 255, 0.5)" strokeWidth="1" />
                <text x="33" y="-12" fontSize="8" fill="#a5f3fc" textAnchor="middle" fontWeight="bold">%</text>
              </g>
              <g className="deal-pill-3">
                <rect x="5" y="-45" width="20" height="12" rx="3" fill="rgba(135, 129, 255, 0.2)" stroke="rgba(135, 129, 255, 0.5)" strokeWidth="1" />
                <text x="15" y="-37" fontSize="8" fill="#a5f3fc" textAnchor="middle" fontWeight="bold">AI</text>
              </g>
            </g>
          </g>
        </svg>
      );

    case 'recycle':
      return (
        <svg viewBox="0 0 200 140" className="banner-graphic-svg">
          <defs>
            <radialGradient id="rec-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.25)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </radialGradient>
          </defs>
          <rect width="200" height="140" fill="url(#rec-glow)" />

          {/* Viewfinder Target corners */}
          <g stroke="#22c55e" strokeWidth="1.5" fill="none" className="viewfinder">
            <path d="M 40 30 L 40 20 L 50 20" />
            <path d="M 160 30 L 160 20 L 150 20" />
            <path d="M 40 110 L 40 120 L 50 120" />
            <path d="M 160 110 L 160 120 L 150 120" />
          </g>

          <g transform="translate(100, 70)" className="rotating-hub">
            {/* Outer dotted scanning ring */}
            <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1.5" strokeDasharray="5 4" className="scan-ring" />
            
            {/* Central recycle symbol */}
            <g className="recycle-symbol-wrap" transform="scale(1.2)">
              <path d="M -8 -8 L -1 -12 L 6 -8 L 4 2 L -6 2 Z M -1 -12 L -1 6" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="recycle-icon-svg" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      );

    default:
      return null;
  }
}
