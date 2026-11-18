import React from "react";

interface PrincessCharacterProps {
  name: string;
  className?: string;
  dressPrimary?: string;
  dressHighlight?: string;
  crownGold?: string;
  ribbonPink?: string;
}

/**
 * Original 2D kawaii storybook princess illustration.
 * Layered pastel pink ballgown, pearl hairpins, golden mini-crown, sparkling eyes, and blooming rose.
 */
export function PrincessCharacter({
  name,
  className = "w-56 h-72",
  dressPrimary = "#F8B6D2",
  dressHighlight = "#FFEAF2",
  crownGold = "#E8C77B",
  ribbonPink = "#E57AA8",
}: PrincessCharacterProps) {
  return (
    <svg
      viewBox="0 0 280 345"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`Original 2D storybook illustration of Princess ${name} wearing a pastel pink royal dress and golden crown`}
    >
      {/* Soft Fairytale Aura Halo */}
      <circle cx="140" cy="172" r="120" fill="#FFE8F1" fillOpacity="0.65" />
      <circle
        cx="140"
        cy="172"
        r="104"
        fill="#FFFFFF"
        fillOpacity="0.58"
        stroke={crownGold}
        strokeWidth="1.2"
        strokeDasharray="4 5"
      />

      {/* Shadow under dress */}
      <ellipse cx="140" cy="320" rx="78" ry="12" fill="#F2D1E0" fillOpacity="0.68" />

      {/* Back Flowing Wavy Hair with Soft Curls */}
      <path
        d="M82 114C70 148 68 194 84 222C102 230 178 230 196 222C212 194 210 148 198 114C188 76 168 60 140 60C112 60 92 76 82 114Z"
        fill="#694356"
        stroke="#4C2E3D"
        strokeWidth="2.1"
      />
      {/* Hair Shine Waves */}
      <path
        d="M94 126C87 152 88 180 96 200"
        stroke="#8F647A"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.52"
      />
      <path
        d="M186 126C193 152 192 180 184 200"
        stroke="#8F647A"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.52"
      />

      {/* Royal Pink Ballgown Skirt */}
      <path
        d="M111 196H169C196 228 216 276 222 310C200 322 170 322 140 322C110 322 80 322 58 310C64 276 84 228 111 196Z"
        fill={dressPrimary}
        stroke="#9F6580"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Soft Tulle Center Overskirt Panel */}
      <path
        d="M126 200H154C167 236 177 282 179 318C165 322 152 322 140 322C128 322 115 322 101 318C103 282 113 236 126 200Z"
        fill={dressHighlight}
      />
      {/* Scalloped Peplum Flounces */}
      <path
        d="M108 200C102 216 115 228 128 216C134 226 146 226 152 216C165 228 178 216 172 200"
        fill={dressHighlight}
        stroke="#B97B97"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Golden Embroidery Hem & Tiny Lace Trim */}
      <path
        d="M64 302C92 312 116 314 140 314C164 314 188 312 216 302"
        stroke={crownGold}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
      {/* Scattered Starlight on Skirt */}
      <path d="M96 270L97.5 274L101.5 275.5L97.5 277L96 281L94.5 277L90.5 275.5L94.5 274L96 270Z" fill="#FFFFFF" />
      <path d="M184 272L185.5 276L189.5 277.5L185.5 279L184 283L182.5 279L178.5 277.5L182.5 276L184 272Z" fill="#FFFFFF" />
      <path d="M140 264L141.8 268.5L146.5 270.2L141.8 272L140 276.5L138.2 272L133.5 270.2L138.2 268.5L140 264Z" fill={crownGold} />

      {/* Bodice & Puff Sleeves */}
      <circle cx="101" cy="178" r="15.5" fill={dressHighlight} stroke="#9F6580" strokeWidth="2" />
      <circle cx="179" cy="178" r="15.5" fill={dressHighlight} stroke="#9F6580" strokeWidth="2" />
      <path
        d="M111 168H169L163 202H117L111 168Z"
        fill={dressPrimary}
        stroke="#9F6580"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sweetheart Lace Trim */}
      <path
        d="M115 170C123 178 134 178 140 172C146 178 157 178 165 170"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Golden Waist Sash & Silk Ribbon Bow */}
      <rect x="114" y="193" width="52" height="8" rx="4" fill={crownGold} stroke="#B58943" strokeWidth="1.3" />
      <path
        d="M140 197L127 190C124 193 124 201 127 204L140 197Z"
        fill={ribbonPink}
        stroke="#9F5474"
        strokeWidth="1.2"
      />
      <path
        d="M140 197L153 190C156 193 156 201 153 204L140 197Z"
        fill={ribbonPink}
        stroke="#9F5474"
        strokeWidth="1.2"
      />
      {/* Trailing Bow Tails */}
      <path d="M137 201L131 217" stroke={ribbonPink} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M143 201L149 217" stroke={ribbonPink} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="140" cy="197" r="3.5" fill="#FFF7FA" stroke="#B58943" strokeWidth="1.2" />

      {/* Arms */}
      <path
        d="M95 188C87 206 93 220 110 220"
        stroke="#FFE5D8"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M95 188C87 206 93 220 110 220"
        stroke="#C79282"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.38"
      />
      <path
        d="M185 188C193 206 187 220 170 218"
        stroke="#FFE5D8"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Petite Blooming Rose Held in Right Hand */}
      <g transform="translate(168, 195)">
        <path d="M4 26L15 6" stroke="#7FA883" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M9 17C3 14 1 19 6 21" fill="#B5D7B7" stroke="#7FA883" strokeWidth="1.2" />
        <path d="M13 15C19 14 21 19 15 20" fill="#B5D7B7" stroke="#7FA883" strokeWidth="1.2" />
        <circle cx="15" cy="5" r="8" fill={ribbonPink} stroke="#9E5272" strokeWidth="1.3" />
        <path
          d="M12.2 5C12.8 2.4 17.6 2.4 17.9 5C18.2 7.6 14.2 8.2 13.4 6.2"
          stroke="#FFE6F0"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>

      {/* Neck & Pearl Necklace */}
      <rect x="131" y="149" width="18" height="20" rx="8" fill="#FFE5D8" />
      <path
        d="M126 168C134 173 146 173 154 168"
        stroke="#FFF7FA"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="1 5"
      />

      {/* Cute Rounded Kawaii Face */}
      <circle
        cx="140"
        cy="116"
        r="44.5"
        fill="#FFE7DA"
        stroke="#BA8678"
        strokeWidth="1.8"
      />

      {/* Soft Front Bangs & Glossy Highlight */}
      <path
        d="M94 113C94 82 114 63 140 63C166 63 186 82 186 113C177 99 166 91 156 88C152 99 144 104 136 92C125 104 111 105 94 113Z"
        fill="#694356"
        stroke="#4C2E3D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M114 78C124 72 138 71 150 75"
        stroke="#9A7085"
        strokeWidth="2.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Side Hair Locks & Pearl Hairpins */}
      <path
        d="M95 109C91 128 94 144 102 154"
        stroke="#694356"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path
        d="M185 109C189 128 186 144 178 154"
        stroke="#694356"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <circle cx="96" cy="112" r="3" fill="#FFF7FA" stroke={crownGold} strokeWidth="1.3" />
      <circle cx="184" cy="112" r="3" fill="#FFF7FA" stroke={crownGold} strokeWidth="1.3" />

      {/* Expressive Sparkling Kawaii Eyes with Delicate Eyelashes */}
      <g>
        {/* Left Eye */}
        <ellipse cx="122" cy="121" rx="6.4" ry="7.6" fill="#4A2D3D" />
        <circle cx="119.8" cy="117.8" r="2.5" fill="#FFFFFF" />
        <circle cx="124.4" cy="123.6" r="1.3" fill="#FFE1EC" />
        <path d="M113 115.5C115.5 112 119 111.2 122.5 111.5" stroke="#4A2D3D" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M112.5 117.5L115 116" stroke="#4A2D3D" strokeWidth="1.3" strokeLinecap="round" />

        {/* Right Eye */}
        <ellipse cx="158" cy="121" rx="6.4" ry="7.6" fill="#4A2D3D" />
        <circle cx="155.8" cy="117.8" r="2.5" fill="#FFFFFF" />
        <circle cx="160.4" cy="123.6" r="1.3" fill="#FFE1EC" />
        <path d="M167 115.5C164.5 112 161 111.2 157.5 111.5" stroke="#4A2D3D" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M167.5 117.5L165 116" stroke="#4A2D3D" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* Soft Rosy Cheeks */}
      <ellipse cx="109" cy="131" rx="8" ry="4.6" fill="#F8A8C6" fillOpacity="0.65" />
      <ellipse cx="171" cy="131" rx="8" ry="4.6" fill="#F8A8C6" fillOpacity="0.65" />

      {/* Warm Genuine Smile */}
      <path
        d="M132.5 134C135.8 139.2 144.2 139.2 147.5 134"
        stroke="#8C4E67"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Royal Golden Mini-Crown with Heart Rose-Quartz */}
      <g transform="translate(112, 30)">
        <path
          d="M6 34L2 14L16 22L28 6L40 22L54 14L50 34H6Z"
          fill="#F7E4AA"
          stroke="#B58943"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect
          x="7"
          y="33"
          width="42"
          height="6"
          rx="2.5"
          fill={crownGold}
          stroke="#B58943"
          strokeWidth="1.6"
        />
        <circle cx="2" cy="12.5" r="3" fill="#FFF7FA" stroke="#B58943" strokeWidth="1.4" />
        <circle cx="28" cy="4.5" r="3.6" fill="#FFE1EC" stroke="#B58943" strokeWidth="1.4" />
        <circle cx="54" cy="12.5" r="3" fill="#FFF7FA" stroke="#B58943" strokeWidth="1.4" />
        <path
          d="M28 20.5C26.7 18.8 24.3 19.3 24.3 21.3C24.3 23.3 28 26 28 26C28 26 31.7 23.3 31.7 21.3C31.7 19.3 29.3 18.8 28 20.5Z"
          fill={ribbonPink}
        />
      </g>

      {/* Floating Sparkles & Tiny Heart Around Princess */}
      <path d="M50 128L52 134L58 136L52 138L50 144L48 138L42 136L48 134L50 128Z" fill={crownGold} />
      <path d="M230 110L232.5 117L239.5 119.5L232.5 122L230 129L227.5 122L220.5 119.5L227.5 117L230 110Z" fill={crownGold} />
      <path
        d="M224 226C222.5 224.2 219.6 224.8 219.6 227.2C219.6 229.6 224 232.8 224 232.8C224 232.8 228.4 229.6 228.4 227.2C228.4 224.8 225.5 224.2 224 226Z"
        fill="#F5A6C8"
      />
    </svg>
  );
}
