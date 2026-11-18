import React from "react";

interface FairytaleCastleProps {
  className?: string;
  primaryPink?: string;
  softGold?: string;
}

export function FairytaleCastle({
  className = "w-full max-w-md",
  primaryPink = "#F5A6C8",
  softGold = "#E8C77B",
}: FairytaleCastleProps) {
  return (
    <svg
      viewBox="0 0 480 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustrated pastel pink royal fairytale castle with golden spires, candlelit windows, climbing roses, and soft clouds"
    >
      {/* Dreamy Pastel Halo Behind Castle */}
      <circle cx="240" cy="192" r="158" fill="#FFE6F0" fillOpacity="0.62" />
      <circle cx="240" cy="192" r="122" fill="#FFFFFF" fillOpacity="0.62" />
      {/* Crescent Fairytale Moon Accent */}
      <path
        d="M92 64C81 66 74 76 76 88C78 99 89 106 100 103C91 102 85 95 85 85C85 75 88 68 92 64Z"
        fill="#F8E4AE"
        opacity="0.9"
      />

      {/* Distant Pastel Storybook Hills */}
      <path
        d="M36 318C90 282 152 278 214 298C278 318 358 272 444 316C430 332 350 342 240 342C130 342 52 334 36 318Z"
        fill="#FBE4EE"
      />

      {/* Background Fluffy Clouds */}
      <g opacity="0.94">
        <path
          d="M32 232H122C131 232 138 225 138 217C138 209.5 132 203.5 124 203C121 195 113.5 190 104.5 190C95 190 87 196 84.5 204.5C77.5 202.5 69.5 205.5 66 212C57 212.5 50 219.5 50 228C50 230.2 42 232 32 232Z"
          fill="#FFFFFF"
        />
        <path
          d="M336 222H434C443 222 450 215 450 207C450 199.5 443.5 193.5 435.5 193C432 184.5 424 179 414 179C404 179 395.5 185 392.5 194C384.5 192 376 195.5 372.5 202.5C363.5 203 356 210 356 218.5C356 220.5 346 222 336 222Z"
          fill="#FFFFFF"
        />
      </g>

      {/* Left Outer Spire */}
      <g>
        <rect
          x="82"
          y="200"
          width="48"
          height="114"
          rx="4"
          fill="#FFF6FA"
          stroke="#A8748D"
          strokeWidth="2"
        />
        {/* Delicate stone lines */}
        <line x1="88" y1="268" x2="104" y2="268" stroke="#F0D0DF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="106" y1="286" x2="122" y2="286" stroke="#F0D0DF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Roof */}
        <path
          d="M74 202L106 130L138 202H74Z"
          fill={primaryPink}
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M106 133L92 200" stroke="#FFD6E7" strokeWidth="1.8" opacity="0.7" />
        <path d="M76 200H136" stroke={softGold} strokeWidth="3.5" strokeLinecap="round" />

        {/* Swallowtail Flag */}
        <line x1="106" y1="130" x2="106" y2="104" stroke="#B58943" strokeWidth="2" />
        <path
          d="M106 106L132 111L124 115L132 119L106 121Z"
          fill={softGold}
          stroke="#B58943"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Warm Candlelit Window */}
        <path
          d="M97 236C97 229.5 101 224.5 106 224.5C111 224.5 115 229.5 115 236V252H97V236Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
        <line x1="106" y1="224.5" x2="106" y2="252" stroke={softGold} strokeWidth="1.4" />
        <line x1="97" y1="240" x2="115" y2="240" stroke={softGold} strokeWidth="1.2" />

        {/* Climbing Rose Vine */}
        <path
          d="M84 312C88 292 84 274 92 260"
          stroke="#8FAF91"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="88" cy="284" r="3.4" fill={primaryPink} />
        <circle cx="91" cy="264" r="2.8" fill="#F9C5DA" />
      </g>

      {/* Right Outer Spire */}
      <g>
        <rect
          x="350"
          y="200"
          width="48"
          height="114"
          rx="4"
          fill="#FFF6FA"
          stroke="#A8748D"
          strokeWidth="2"
        />
        <line x1="358" y1="274" x2="374" y2="274" stroke="#F0D0DF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="372" y1="290" x2="390" y2="290" stroke="#F0D0DF" strokeWidth="1.5" strokeLinecap="round" />

        <path
          d="M342 202L374 130L406 202H342Z"
          fill={primaryPink}
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M374 133L388 200" stroke="#FFD6E7" strokeWidth="1.8" opacity="0.7" />
        <path d="M344 200H404" stroke={softGold} strokeWidth="3.5" strokeLinecap="round" />

        <line x1="374" y1="130" x2="374" y2="104" stroke="#B58943" strokeWidth="2" />
        <path
          d="M374 106L400 111L392 115L400 119L374 121Z"
          fill={softGold}
          stroke="#B58943"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        <path
          d="M365 236C365 229.5 369 224.5 374 224.5C379 224.5 383 229.5 383 236V252H365V236Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
        <line x1="374" y1="224.5" x2="374" y2="252" stroke={softGold} strokeWidth="1.4" />
        <line x1="365" y1="240" x2="383" y2="240" stroke={softGold} strokeWidth="1.2" />

        <path
          d="M396 312C392 292 396 274 388 260"
          stroke="#8FAF91"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="392" cy="284" r="3.4" fill={primaryPink} />
        <circle cx="389" cy="264" r="2.8" fill="#F9C5DA" />
      </g>

      {/* Inner Twin Towers */}
      <g>
        {/* Left Inner Tower */}
        <rect
          x="138"
          y="156"
          width="56"
          height="158"
          fill="#FFFFFF"
          stroke="#A8748D"
          strokeWidth="2"
        />
        <path
          d="M130 158L166 80L202 158H130Z"
          fill="#F9B8D4"
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M133 157H199" stroke={softGold} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="166" y1="80" x2="166" y2="56" stroke="#B58943" strokeWidth="2" />
        <path
          d="M166 58L192 64L166 71Z"
          fill={primaryPink}
          stroke="#A8748D"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M156 192C156 184.5 160.5 179.5 166 179.5C171.5 179.5 176 184.5 176 192V208H156V192Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
        <line x1="166" y1="179.5" x2="166" y2="208" stroke={softGold} strokeWidth="1.3" />

        {/* Right Inner Tower */}
        <rect
          x="286"
          y="156"
          width="56"
          height="158"
          fill="#FFFFFF"
          stroke="#A8748D"
          strokeWidth="2"
        />
        <path
          d="M278 158L314 80L350 158H278Z"
          fill="#F9B8D4"
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M281 157H347" stroke={softGold} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="314" y1="80" x2="314" y2="56" stroke="#B58943" strokeWidth="2" />
        <path
          d="M314 58L340 64L314 71Z"
          fill={primaryPink}
          stroke="#A8748D"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M304 192C304 184.5 308.5 179.5 314 179.5C319.5 179.5 324 184.5 324 192V208H304V192Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
        <line x1="314" y1="179.5" x2="314" y2="208" stroke={softGold} strokeWidth="1.3" />
      </g>

      {/* Grand Central Spire */}
      <g>
        <rect
          x="194"
          y="128"
          width="92"
          height="186"
          fill="#FFFBFD"
          stroke="#A8748D"
          strokeWidth="2"
        />
        {/* Tall Central Roof */}
        <path
          d="M184 130L240 32L296 130H184Z"
          fill={primaryPink}
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Decorative Roof Stripes */}
        <path d="M240 34L214 128" stroke="#FFD6E7" strokeWidth="2" opacity="0.72" />
        <path d="M240 34L266 128" stroke="#FFD6E7" strokeWidth="2" opacity="0.72" />
        <path d="M186 129H294" stroke={softGold} strokeWidth="4.2" strokeLinecap="round" />

        {/* Central Golden Pennant & Crown Finial */}
        <line x1="240" y1="32" x2="240" y2="10" stroke="#B58943" strokeWidth="2.2" />
        <path
          d="M240 12L274 19L264 23L274 27L240 28Z"
          fill={softGold}
          stroke="#B58943"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="240" cy="31" r="4.8" fill={softGold} stroke="#B58943" strokeWidth="1.4" />

        {/* Rose Heart Stained Glass Window */}
        <circle
          cx="240"
          cy="170"
          r="22"
          fill="#FFF4D4"
          stroke={softGold}
          strokeWidth="3"
        />
        <circle
          cx="240"
          cy="170"
          r="15.5"
          fill="#FFF7FA"
          stroke="#DDA0A8"
          strokeWidth="1.5"
        />
        <path
          d="M240 165.5C237.6 162.2 233 163.4 233 167.2C233 171 240 176 240 176C240 176 247 171 247 167.2C247 163.4 242.4 162.2 240 165.5Z"
          fill={primaryPink}
        />
      </g>

      {/* Main Palace Front Wall & Battlements */}
      <g>
        <path
          d="M124 222H142V232H160V222H178V232H196V222H284V232H302V222H320V232H338V222H356V314H124V222Z"
          fill="#FFF7FA"
          stroke="#A8748D"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Scalloped Golden Balcony Rail */}
        <rect x="192" y="218" width="96" height="8.5" rx="4" fill={softGold} stroke="#B58943" strokeWidth="1.4" />
        <circle cx="206" cy="222" r="1.5" fill="#FFF7FA" />
        <circle cx="223" cy="222" r="1.5" fill="#FFF7FA" />
        <circle cx="240" cy="222" r="1.5" fill="#FFF7FA" />
        <circle cx="257" cy="222" r="1.5" fill="#FFF7FA" />
        <circle cx="274" cy="222" r="1.5" fill="#FFF7FA" />

        {/* Grand Royal Archway Gate */}
        <path
          d="M204 314V268C204 249 219 236 240 236C261 236 276 249 276 268V314H204Z"
          fill="#F9D0E2"
          stroke="#A8748D"
          strokeWidth="2.2"
        />
        <path
          d="M212 314V270C212 255.5 224.5 245 240 245C255.5 245 268 255.5 268 270V314H212Z"
          fill="#E8B4C9"
          stroke={softGold}
          strokeWidth="2.2"
        />
        <line x1="240" y1="245" x2="240" y2="314" stroke="#A8748D" strokeWidth="1.8" />
        <circle cx="231" cy="284" r="2.8" fill={softGold} stroke="#B58943" strokeWidth="1" />
        <circle cx="249" cy="284" r="2.8" fill={softGold} stroke="#B58943" strokeWidth="1" />

        {/* Side Decorative Windows */}
        <path
          d="M152 270C152 263 157 258 163 258C169 258 174 263 174 270V288H152V270Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
        <path
          d="M306 270C306 263 311 258 317 258C323 258 328 263 328 270V288H306V270Z"
          fill="#FFF4D4"
          stroke="#A8748D"
          strokeWidth="1.8"
        />
      </g>

      {/* Lush Pastel Meadow & Rose Bushes Base */}
      <ellipse cx="240" cy="324" rx="198" ry="26" fill="#FCE5EF" />
      <path
        d="M58 318C64 300 84 296 98 306C108 296 128 300 134 318H58Z"
        fill="#D6E8D5"
        stroke="#8FAF91"
        strokeWidth="1.5"
      />
      <path
        d="M346 318C352 300 372 296 386 306C396 296 416 300 422 318H346Z"
        fill="#D6E8D5"
        stroke="#8FAF91"
        strokeWidth="1.5"
      />
      <circle cx="82" cy="310" r="4.2" fill={primaryPink} />
      <circle cx="112" cy="309" r="3.6" fill="#F9C6DC" />
      <circle cx="368" cy="309" r="3.6" fill="#F9C6DC" />
      <circle cx="396" cy="310" r="4.2" fill={primaryPink} />

      {/* Royal Steps */}
      <rect x="198" y="314" width="84" height="8" rx="3" fill="#FFF7FA" stroke="#DDA0A8" strokeWidth="1.5" />
      <rect x="184" y="322" width="112" height="10" rx="4" fill="#FFE6F0" stroke="#DDA0A8" strokeWidth="1.5" />

      {/* Sparkling Fairytale Stars */}
      <path d="M134 94L136 100L142 102L136 104L134 110L132 104L126 102L132 100L134 94Z" fill={softGold} />
      <path d="M352 88L354.5 95L361.5 97.5L354.5 100L352 107L349.5 100L342.5 97.5L349.5 95L352 88Z" fill={softGold} />
      <path d="M292 46L294 51L299 53L294 55L292 60L290 55L285 53L290 51L292 46Z" fill={primaryPink} />
    </svg>
  );
}
