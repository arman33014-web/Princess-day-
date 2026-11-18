import React from "react";

interface MagicalGardenSceneProps {
  primaryPink?: string;
  softGold?: string;
}

export function MagicalGardenScene({
  primaryPink = "#F5A6C8",
  softGold = "#E8C77B",
}: MagicalGardenSceneProps) {
  return (
    <svg
      viewBox="0 0 960 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover select-none pointer-events-none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {/* Dreamy Pastel Fairytale Sky */}
      <rect width="960" height="460" fill="#FFF7FA" />
      <ellipse cx="480" cy="110" rx="460" ry="170" fill="#FFE8F1" fillOpacity="0.72" />
      <ellipse cx="480" cy="150" rx="280" ry="100" fill="#FFFFFF" fillOpacity="0.6" />

      {/* Soft Distant Fairytale Castle Silhouette on Horizon */}
      <g opacity="0.45" transform="translate(390, 96)">
        <rect x="64" y="56" width="52" height="90" fill="#F4C7DA" />
        <path d="M58 56L90 12L122 56H58Z" fill="#EFAFD0" />
        <rect x="28" y="82" width="32" height="64" fill="#F7D3E3" />
        <path d="M24 82L44 46L64 82H24Z" fill="#F2B8D3" />
        <rect x="120" y="82" width="32" height="64" fill="#F7D3E3" />
        <path d="M116 82L136 46L156 82H116Z" fill="#F2B8D3" />
      </g>

      {/* Soft Rolling Storybook Hills */}
      <path
        d="M0 296C160 238 330 254 480 288C640 322 810 248 960 280V460H0V296Z"
        fill="#FCEAF1"
      />
      <path
        d="M0 332C210 284 370 316 520 330C700 344 820 296 960 324V460H0V332Z"
        fill="#EDF5ED"
      />
      <path
        d="M0 370C250 338 420 366 600 362C760 358 870 342 960 360V460H0V370Z"
        fill="#E2EFE3"
      />

      {/* Winding Pink Cobblestone Storybook Pathway */}
      <path
        d="M446 322C438 358 402 388 342 460H618C558 388 522 358 514 322H446Z"
        fill="#FFE3EE"
        stroke="#E4B8CA"
        strokeWidth="2"
      />
      <ellipse cx="480" cy="354" rx="36" ry="8.5" fill="#FFF7FA" stroke="#E8C2D2" strokeWidth="1.2" />
      <ellipse cx="472" cy="384" rx="46" ry="10.5" fill="#FFF7FA" stroke="#E8C2D2" strokeWidth="1.2" />
      <ellipse cx="490" cy="420" rx="58" ry="13" fill="#FFF7FA" stroke="#E8C2D2" strokeWidth="1.2" />

      {/* Warm Glowing Garden Lanterns Flanking Pathway */}
      <g transform="translate(310, 260)">
        <line x1="12" y1="22" x2="12" y2="74" stroke="#9E737D" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M12 22C12 14 20 12 24 16" stroke="#9E737D" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" fill="#FFF2C2" fillOpacity="0.55" />
        <rect x="19" y="18" width="10" height="12" rx="4" fill="#FFF8DC" stroke={softGold} strokeWidth="1.4" />
      </g>
      <g transform="translate(618, 260)">
        <line x1="24" y1="22" x2="24" y2="74" stroke="#9E737D" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M24 22C24 14 16 12 12 16" stroke="#9E737D" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="12" cy="24" r="10" fill="#FFF2C2" fillOpacity="0.55" />
        <rect x="7" y="18" width="10" height="12" rx="4" fill="#FFF8DC" stroke={softGold} strokeWidth="1.4" />
      </g>

      {/* Left Cherry Blossom Tree */}
      <g transform="translate(-14, 42)">
        <path
          d="M92 292C94 242 90 198 78 158C95 168 108 184 114 208C122 184 136 170 156 160C136 190 126 232 128 292H92Z"
          fill="#9E737D"
          stroke="#79535E"
          strokeWidth="2"
        />
        <circle cx="62" cy="138" r="58" fill="#FFD9E8" />
        <circle cx="124" cy="110" r="66" fill="#FFE6F0" />
        <circle cx="178" cy="148" r="52" fill="#FFD2E4" />
        <circle cx="106" cy="158" r="48" fill={primaryPink} fillOpacity="0.45" />
        <circle cx="88" cy="110" r="6" fill="#FFFFFF" fillOpacity="0.88" />
        <circle cx="146" cy="122" r="5.5" fill="#FFFFFF" fillOpacity="0.88" />
        <circle cx="164" cy="160" r="4.5" fill="#FFF7FA" />
        {/* Floating blossom petals near canopy */}
        <ellipse cx="212" cy="186" rx="5" ry="3" transform="rotate(24 212 186)" fill="#FFD2E4" />
        <ellipse cx="192" cy="214" rx="4.5" ry="2.6" transform="rotate(-18 192 214)" fill="#FFE6F0" />
      </g>

      {/* Right Cherry Blossom Tree */}
      <g transform="translate(758, 36)">
        <path
          d="M110 298C108 248 112 204 124 164C107 174 94 190 88 214C80 190 66 176 46 166C66 196 76 238 74 298H110Z"
          fill="#9E737D"
          stroke="#79535E"
          strokeWidth="2"
        />
        <circle cx="142" cy="142" r="58" fill="#FFD9E8" />
        <circle cx="82" cy="112" r="66" fill="#FFE6F0" />
        <circle cx="28" cy="152" r="52" fill="#FFD2E4" />
        <circle cx="96" cy="160" r="46" fill={primaryPink} fillOpacity="0.42" />
        <circle cx="114" cy="112" r="6" fill="#FFFFFF" fillOpacity="0.88" />
        <circle cx="62" cy="128" r="5.5" fill="#FFFFFF" fillOpacity="0.88" />
        <ellipse cx="6" cy="196" rx="5" ry="3" transform="rotate(-22 6 196)" fill="#FFD2E4" />
      </g>

      {/* Rose Hedges Along Meadow */}
      <g>
        <path
          d="M148 338C160 308 196 302 218 318C236 304 268 312 278 338H148Z"
          fill="#CFE2CF"
          stroke="#8FAF91"
          strokeWidth="1.5"
        />
        <circle cx="184" cy="322" r="5" fill={primaryPink} />
        <circle cx="212" cy="326" r="4.2" fill="#FFB9D5" />
        <circle cx="246" cy="323" r="5" fill={primaryPink} />

        <path
          d="M682 338C694 308 728 302 750 318C768 304 800 312 810 338H682Z"
          fill="#CFE2CF"
          stroke="#8FAF91"
          strokeWidth="1.5"
        />
        <circle cx="716" cy="322" r="5" fill={primaryPink} />
        <circle cx="744" cy="326" r="4.2" fill="#FFB9D5" />
        <circle cx="778" cy="323" r="5" fill={primaryPink} />
      </g>

      {/* Enchanted Central Magical Fountain */}
      <g transform="translate(395, 174)">
        <path
          d="M85 48C66 26 42 42 36 86"
          stroke="#BEE6F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M85 48C104 26 128 42 134 86"
          stroke="#BEE6F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <path
          d="M85 48C74 36 62 46 58 72"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M85 48C96 36 108 46 112 72"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle cx="85" cy="48" r="7" fill={softGold} stroke="#B58943" strokeWidth="1.4" />
        <path
          d="M52 74H118C114 88 101 94 85 94C69 94 56 88 52 74Z"
          fill="#FFF8FB"
          stroke="#C596AB"
          strokeWidth="2"
        />
        <ellipse cx="85" cy="74" rx="33" ry="6" fill="#DDF3FC" stroke="#C596AB" strokeWidth="1.5" />

        <path
          d="M74 94H96L102 124H68L74 94Z"
          fill="#FFF2F7"
          stroke="#C596AB"
          strokeWidth="1.8"
        />

        <path
          d="M18 122H152C146 144 122 156 85 156C48 156 24 144 18 122Z"
          fill="#FFFFFF"
          stroke="#C596AB"
          strokeWidth="2.2"
        />
        <ellipse cx="85" cy="122" rx="67" ry="12" fill="#DDF3FC" stroke={softGold} strokeWidth="2" />
        <ellipse cx="85" cy="122" rx="48" ry="6" fill="#FFFFFF" fillOpacity="0.65" />

        <path
          className="animate-fountain-sparkle"
          d="M85 16L87 22L93 24L87 26L85 32L83 26L77 24L83 22L85 16Z"
          fill={softGold}
        />
        <circle cx="48" cy="52" r="3" fill="#FFFFFF" />
        <circle cx="122" cy="50" r="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
