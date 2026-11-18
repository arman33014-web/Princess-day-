import React from "react";

interface SvgProps {
  className?: string;
  "aria-hidden"?: boolean;
}

export function RoyalCrownIcon({
  className = "w-8 h-6",
  "aria-hidden": ariaHidden = true,
}: SvgProps) {
  return (
    <svg
      viewBox="0 0 64 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        d="M8 35L4 14L19 23L32 7L45 23L60 14L56 35H8Z"
        fill="#F6E2A8"
        stroke="#B58943"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M10 35H54L52.5 41H11.5L10 35Z"
        fill="#E8C77B"
        stroke="#B58943"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="12" r="3.2" fill="#FFF7FA" stroke="#B58943" strokeWidth="1.5" />
      <circle cx="32" cy="5.5" r="3.8" fill="#FFE1EC" stroke="#B58943" strokeWidth="1.5" />
      <circle cx="60" cy="12" r="3.2" fill="#FFF7FA" stroke="#B58943" strokeWidth="1.5" />
      <path
        d="M32 21C30.4 19 27.5 19.6 27.5 22C27.5 24.4 32 27.5 32 27.5C32 27.5 36.5 24.4 36.5 22C36.5 19.6 33.6 19 32 21Z"
        fill="#F5A6C8"
        stroke="#B86B8B"
        strokeWidth="1.2"
      />
      <circle cx="19" cy="29" r="2" fill="#FFE1EC" />
      <circle cx="45" cy="29" r="2" fill="#FFE1EC" />
    </svg>
  );
}

export function GoldenDivider({
  className = "w-full max-w-xs mx-auto",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#E8C77B] to-[#DDA0A8]" />
      <svg
        viewBox="0 0 44 22"
        fill="none"
        className="w-11 h-5 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2.5L24.4 8.6L30.5 11L24.4 13.4L22 19.5L19.6 13.4L13.5 11L19.6 8.6L22 2.5Z"
          fill="#E8C77B"
        />
        <circle cx="6" cy="11" r="2.6" fill="#F5A6C8" />
        <circle cx="38" cy="11" r="2.6" fill="#F5A6C8" />
      </svg>
      <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#E8C77B] to-[#DDA0A8]" />
    </div>
  );
}

export function RoyalSectionDivider({
  className = "my-2 sm:my-4",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 flex items-center justify-center px-6 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[320px] h-8 opacity-90"
      >
        <path
          d="M12 18H134C144 18 150 10 158 10C165 10 170 15 174 18"
          stroke="#E8C77B"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M348 18H226C216 18 210 10 202 10C195 10 190 15 186 18"
          stroke="#E8C77B"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M142 18C149 23 157 26 166 22"
          stroke="#DDA0A8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M218 18C211 23 203 26 194 22"
          stroke="#DDA0A8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Tiny leaves */}
        <ellipse cx="122" cy="18" rx="6" ry="3" fill="#CFE2CF" stroke="#8DAE8F" strokeWidth="1" />
        <ellipse cx="238" cy="18" rx="6" ry="3" fill="#CFE2CF" stroke="#8DAE8F" strokeWidth="1" />
        {/* Center Mini Rose & Star */}
        <circle cx="180" cy="18" r="7.5" fill="#FFE1EC" stroke="#E8C77B" strokeWidth="1.5" />
        <path
          d="M180 14.5C178.7 13 176.5 13.6 176.5 15.4C176.5 17.4 180 20.2 180 20.2C180 20.2 183.5 17.4 183.5 15.4C183.5 13.6 181.3 13 180 14.5Z"
          fill="#F5A6C8"
        />
        <circle cx="92" cy="18" r="2.2" fill="#E8C77B" />
        <circle cx="268" cy="18" r="2.2" fill="#E8C77B" />
      </svg>
    </div>
  );
}

export function ButterflyIllustration({
  className = "w-10 h-10",
  wingColor = "#F8B6D2",
  accentColor = "#FFEAF2",
  "aria-hidden": ariaHidden = true,
}: SvgProps & { wingColor?: string; accentColor?: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      {/* Left Upper Wing */}
      <path
        d="M31 27C25 12 10 7 5.5 15.5C1.5 23 11 33.5 26 31"
        fill={wingColor}
        fillOpacity="0.92"
        stroke="#A46B84"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="20.5" rx="5" ry="3.4" fill={accentColor} />
      <circle cx="11.5" cy="16" r="1.4" fill="#E8C77B" />

      {/* Right Upper Wing */}
      <path
        d="M33 27C39 12 54 7 58.5 15.5C62.5 23 53 33.5 38 31"
        fill={wingColor}
        fillOpacity="0.92"
        stroke="#A46B84"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <ellipse cx="48" cy="20.5" rx="5" ry="3.4" fill={accentColor} />
      <circle cx="52.5" cy="16" r="1.4" fill="#E8C77B" />

      {/* Left Lower Wing */}
      <path
        d="M30 31C20 32 12 40 16 46.5C20 51.5 29 45 31 35"
        fill="#FFE1EC"
        stroke="#A46B84"
        strokeWidth="1.6"
      />
      {/* Right Lower Wing */}
      <path
        d="M34 31C44 32 52 40 48 46.5C44 51.5 35 45 33 35"
        fill="#FFE1EC"
        stroke="#A46B84"
        strokeWidth="1.6"
      />

      {/* Golden Wing Accents */}
      <circle cx="21" cy="41" r="2.2" fill="#E8C77B" />
      <circle cx="43" cy="41" r="2.2" fill="#E8C77B" />

      {/* Body */}
      <ellipse cx="32" cy="31" rx="2.5" ry="9" fill="#7A5368" />
      <circle cx="32" cy="20" r="2.9" fill="#7A5368" />

      {/* Delicate Antennae */}
      <path
        d="M30.5 17.5C28.5 12 25.5 10 22.8 10.8"
        stroke="#7A5368"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M33.5 17.5C35.5 12 38.5 10 41.2 10.8"
        stroke="#7A5368"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="22.3" cy="10.8" r="1.5" fill="#E8C77B" />
      <circle cx="41.7" cy="10.8" r="1.5" fill="#E8C77B" />
    </svg>
  );
}

export function CloudIllustration({
  className = "w-28 h-14",
  "aria-hidden": ariaHidden = true,
}: SvgProps) {
  return (
    <svg
      viewBox="0 0 140 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        d="M28 56H112C123.5 56 132 47.8 132 37.5C132 28 124.5 20.5 114.5 19.8C111.2 10.2 101.8 4 90.5 4C79.8 4 70.6 9.8 66.5 18.4C63.2 16.5 59.3 15.5 55 15.5C43.5 15.5 34.2 24.2 33.4 35.2C23.4 36.2 16 44 16 53.2C16 54.8 21.5 56 28 56Z"
        fill="#FFFFFF"
        fillOpacity="0.94"
      />
      <path
        d="M26 56H114C121 56 127 52 129.8 46.5C120 49.5 104 51 84 51C60 51 39 49 21 47C19 51 21 56 26 56Z"
        fill="#FFE6F0"
        fillOpacity="0.88"
      />
    </svg>
  );
}

export function SparkleStar({
  className = "w-5 h-5",
  color = "#E8C77B",
  "aria-hidden": ariaHidden = true,
}: SvgProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        d="M12 1.5L14.2 9.4L22.5 12L14.2 14.6L12 22.5L9.8 14.6L1.5 12L9.8 9.4L12 1.5Z"
        fill={color}
      />
    </svg>
  );
}

export function RoseCornerOrnament({
  className = "w-14 h-14",
  flipX = false,
  "aria-hidden": ariaHidden = true,
}: SvgProps & { flipX?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flipX ? "-scale-x-100" : ""}`}
      aria-hidden={ariaHidden}
    >
      <path
        d="M8 54C8 30 22 12 52 10"
        stroke="#E8C77B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M20 26C13 24 10 31 15 35C19 37 24 31 20 26Z"
        fill="#C9DFCA"
        stroke="#84A688"
        strokeWidth="1.2"
      />
      <path
        d="M29 19C30 12 37 11 40 16C41 20 35 24 29 19Z"
        fill="#C9DFCA"
        stroke="#84A688"
        strokeWidth="1.2"
      />
      <circle
        cx="22"
        cy="22"
        r="8.5"
        fill="#F8B6D2"
        stroke="#B57491"
        strokeWidth="1.3"
      />
      <path
        d="M18.5 21.5C19 18.5 24.5 18 25.5 21C26.5 24 22.5 26 20 24.5C18.5 23.5 19.5 21 22 21.2C23.5 21.3 23.5 23 22 23.2"
        stroke="#A45B7B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="46" cy="14" r="2.2" fill="#E8C77B" />
      <circle cx="12" cy="45" r="2" fill="#F5A6C8" />
    </svg>
  );
}
