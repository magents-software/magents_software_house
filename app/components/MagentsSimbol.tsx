"use client";
import React, { useId } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

// Cycle: 3.5s  |  Draw: 0–70%  |  Hold: 70–80%  |  Fade: 80–100%
//
// l1 (22,94)→(34,26)=69.1   0%–14.3%     d1 pop: 0%–8.6%
// l2 (34,26)→(60,62)=44.4   12.9%–24.3%  d2 pop: 13.4%–22%
// l3 (60,62)→(86,26)=44.4   22.9%–34.3%  d3 pop: 23.7%–32.3%
// l4 (86,26)→(98,94)=69.1   32.9%–47.1%  d4 pop: 33.7%–42.3%
// l5 (34,26)→(86,26)=52     42.9%–52.9%  d5 pop: 46.6%–55.1%
// l6 (22,94)→(98,94)=76     50%–61.4%    ds pop: 60%–70%

export default function MagentsSimbol({ className, style }: Props) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9]/g, "");
  const g = `mg_${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={g} x1="0" y1="0.1" x2="1" y2="0.95">
          <stop offset="0" stopColor="#0e4d48" />
          <stop offset="0.4" stopColor="#157a73" />
          <stop offset="0.72" stopColor="#2496b8" />
          <stop offset="1" stopColor="#43afe0" />
        </linearGradient>

        {/* Radial gradient for node halos & center bg glow */}
        <radialGradient id={`${g}-rg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#43afe0" stopOpacity="1" />
          <stop offset="60%" stopColor="#157a73" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0e4d48" stopOpacity="0" />
        </radialGradient>

        {/* Blur filter for line bloom & halo rings */}
        <filter id={`${g}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
          </feMerge>
        </filter>

        <filter id={`${g}-softblur`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>

        <style>{`
          .${g}-l { fill:none; stroke:url(#${g}); stroke-linecap:round; stroke-linejoin:round; }

          /* crisp lines */
          .${g}-l1 { stroke-width:1.9;  stroke-dasharray:69.1; animation:${g}-dl1 3.5s linear infinite; }
          .${g}-l2 { stroke-width:1.9;  stroke-dasharray:44.4; animation:${g}-dl2 3.5s linear infinite; }
          .${g}-l3 { stroke-width:1.9;  stroke-dasharray:44.4; animation:${g}-dl3 3.5s linear infinite; }
          .${g}-l4 { stroke-width:1.9;  stroke-dasharray:69.1; animation:${g}-dl4 3.5s linear infinite; }
          .${g}-l5 { stroke-width:1.33; stroke-dasharray:52;   animation:${g}-dl5 3.5s linear infinite; }
          .${g}-l6 { stroke-width:1.33; stroke-dasharray:76;   animation:${g}-dl6 3.5s linear infinite; }

          /* dots */
          .${g}-dot { fill:url(#${g}); transform-box:fill-box; transform-origin:center; }
          .${g}-d1  { animation:${g}-pd1 3.5s linear infinite; }
          .${g}-d2  { animation:${g}-pd2 3.5s linear infinite; }
          .${g}-d3  { animation:${g}-pd3 3.5s linear infinite; }
          .${g}-d4  { animation:${g}-pd4 3.5s linear infinite; }
          .${g}-d5  { animation:${g}-pd5 3.5s linear infinite; }
          .${g}-ds  { animation:${g}-pds 3.5s linear infinite; }

          /* halos */
          .${g}-halo { fill:url(#${g}-rg); transform-box:fill-box; transform-origin:center; }

          /* rings */
          .${g}-ring { fill:none; stroke:url(#${g}); transform-box:fill-box; transform-origin:center; }
          .${g}-r1   { stroke-width:0.7; animation:${g}-rg1  3.5s linear infinite; }
          .${g}-r2   { stroke-width:0.7; animation:${g}-rg2  3.5s linear infinite; }
          .${g}-r3   { stroke-width:0.9; animation:${g}-rg3  3.5s linear infinite; }
          .${g}-r3b  { stroke-width:0.7; animation:${g}-rg3b 3.5s linear infinite; }
          .${g}-r4   { stroke-width:0.7; animation:${g}-rg4  3.5s linear infinite; }
          .${g}-r5   { stroke-width:0.7; animation:${g}-rg5  3.5s linear infinite; }

          /* center background pulse */
          .${g}-bg   { fill:url(#${g}-rg); animation:${g}-bgp 3.5s linear infinite; }

          /* ══ LINE KEYFRAMES ══ */
          @keyframes ${g}-dl1 {
            0%    { stroke-dashoffset:69.1; }
            14.3% { stroke-dashoffset:0; }
            80%   { stroke-dashoffset:0; opacity:1; }
            100%  { stroke-dashoffset:0; opacity:0; }
          }
          @keyframes ${g}-dl2 {
            0%,12.9% { stroke-dashoffset:44.4; }
            24.3%    { stroke-dashoffset:0; }
            80%      { stroke-dashoffset:0; opacity:1; }
            100%     { stroke-dashoffset:0; opacity:0; }
          }
          @keyframes ${g}-dl3 {
            0%,22.9% { stroke-dashoffset:44.4; }
            34.3%    { stroke-dashoffset:0; }
            80%      { stroke-dashoffset:0; opacity:1; }
            100%     { stroke-dashoffset:0; opacity:0; }
          }
          @keyframes ${g}-dl4 {
            0%,32.9% { stroke-dashoffset:69.1; }
            47.1%    { stroke-dashoffset:0; }
            80%      { stroke-dashoffset:0; opacity:1; }
            100%     { stroke-dashoffset:0; opacity:0; }
          }
          @keyframes ${g}-dl5 {
            0%,42.9% { stroke-dashoffset:52; opacity:0.5; }
            52.9%    { stroke-dashoffset:0;  opacity:0.5; }
            80%      { stroke-dashoffset:0;  opacity:0.5; }
            100%     { stroke-dashoffset:0;  opacity:0; }
          }
          @keyframes ${g}-dl6 {
            0%,50% { stroke-dashoffset:76; opacity:0.5; }
            61.4%  { stroke-dashoffset:0;  opacity:0.5; }
            80%    { stroke-dashoffset:0;  opacity:0.5; }
            100%   { stroke-dashoffset:0;  opacity:0; }
          }

          /* ══ DOT KEYFRAMES ══ */
          @keyframes ${g}-pd1 {
            0%   { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            8.6% { opacity:1; transform:scale(1); }
            80%  { opacity:1; }
            100% { opacity:0; transform:scale(0.8); }
          }
          @keyframes ${g}-pd2 {
            0%,13.4% { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            22%      { opacity:1; transform:scale(1); }
            80%      { opacity:1; }
            100%     { opacity:0; transform:scale(0.8); }
          }
          @keyframes ${g}-pd3 {
            0%,23.7% { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            32.3%    { opacity:1; transform:scale(1.15); }
            36%      { transform:scale(1); }
            80%      { opacity:1; }
            100%     { opacity:0; transform:scale(0.8); }
          }
          @keyframes ${g}-pd4 {
            0%,33.7% { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            42.3%    { opacity:1; transform:scale(1); }
            80%      { opacity:1; }
            100%     { opacity:0; transform:scale(0.8); }
          }
          @keyframes ${g}-pd5 {
            0%,46.6% { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            55.1%    { opacity:1; transform:scale(1); }
            80%      { opacity:1; }
            100%     { opacity:0; transform:scale(0.8); }
          }
          @keyframes ${g}-pds {
            0%,60% { opacity:0; transform:scale(0); animation-timing-function:cubic-bezier(0.34,1.56,0.64,1); }
            70%    { opacity:1; transform:scale(1); }
            80%    { opacity:1; }
            100%   { opacity:0; transform:scale(0.8); }
          }

          /* ══ RING KEYFRAMES ══ */
          @keyframes ${g}-rg1 {
            0%,8.5%  { opacity:0; transform:scale(0.7); }
            8.6%     { opacity:0.9; transform:scale(1); animation-timing-function:ease-out; }
            22%      { opacity:0;   transform:scale(4); }
            100%     { opacity:0; }
          }
          @keyframes ${g}-rg2 {
            0%,21.9% { opacity:0; transform:scale(0.7); }
            22%      { opacity:0.9; transform:scale(1); animation-timing-function:ease-out; }
            35%      { opacity:0;   transform:scale(4); }
            100%     { opacity:0; }
          }
          @keyframes ${g}-rg3 {
            0%,32.2% { opacity:0; transform:scale(0.7); }
            32.3%    { opacity:1;   transform:scale(1); animation-timing-function:ease-out; }
            48%      { opacity:0;   transform:scale(4); }
            100%     { opacity:0; }
          }
          @keyframes ${g}-rg3b {
            0%,35.5% { opacity:0; transform:scale(0.7); }
            35.6%    { opacity:0.6; transform:scale(1); animation-timing-function:ease-out; }
            52%      { opacity:0;   transform:scale(5); }
            100%     { opacity:0; }
          }
          @keyframes ${g}-rg4 {
            0%,42.2% { opacity:0; transform:scale(0.7); }
            42.3%    { opacity:0.9; transform:scale(1); animation-timing-function:ease-out; }
            57%      { opacity:0;   transform:scale(4); }
            100%     { opacity:0; }
          }
          @keyframes ${g}-rg5 {
            0%,55%   { opacity:0; transform:scale(0.7); }
            55.1%    { opacity:0.9; transform:scale(1); animation-timing-function:ease-out; }
            70%      { opacity:0;   transform:scale(4); }
            100%     { opacity:0; }
          }

          /* ══ CENTER BG GLOW ══ */
          @keyframes ${g}-bgp {
            0%,32.3% { opacity:0; }
            47%      { opacity:1; }
            80%      { opacity:1; }
            100%     { opacity:0; }
          }
        `}</style>
      </defs>

      {/* ── 1. Center background glow ── */}
      <circle className={`${g}-bg`} cx="60" cy="60" r="46" opacity={0.07} filter={`url(#${g}-softblur)`} />

      {/* ── 2. Line bloom (wide blurred layer, same animation) ── */}
      <g className={`${g}-l`} filter={`url(#${g}-glow)`} opacity={0.55}>
        <line className={`${g}-l1`} x1="22" y1="94" x2="34" y2="26" style={{ strokeWidth: 7 }} />
        <line className={`${g}-l2`} x1="34" y1="26" x2="60" y2="62" style={{ strokeWidth: 7 }} />
        <line className={`${g}-l3`} x1="60" y1="62" x2="86" y2="26" style={{ strokeWidth: 7 }} />
        <line className={`${g}-l4`} x1="86" y1="26" x2="98" y2="94" style={{ strokeWidth: 7 }} />
        <line className={`${g}-l5`} x1="34" y1="26" x2="86" y2="26" style={{ strokeWidth: 5 }} />
        <line className={`${g}-l6`} x1="22" y1="94" x2="98" y2="94" style={{ strokeWidth: 5 }} />
      </g>

      {/* ── 3. Crisp lines ── */}
      <g className={`${g}-l`}>
        <line className={`${g}-l1`} x1="22" y1="94" x2="34" y2="26" />
        <line className={`${g}-l2`} x1="34" y1="26" x2="60" y2="62" />
        <line className={`${g}-l3`} x1="60" y1="62" x2="86" y2="26" />
        <line className={`${g}-l4`} x1="86" y1="26" x2="98" y2="94" />
        <line className={`${g}-l5`} x1="34" y1="26" x2="86" y2="26" />
        <line className={`${g}-l6`} x1="22" y1="94" x2="98" y2="94" />
      </g>

      {/* ── 4. Node halos (radial glow behind each main dot) ── */}
      <g opacity={0.22} filter={`url(#${g}-softblur)`}>
        <circle className={`${g}-halo ${g}-d1`} cx="22" cy="94" r="13" />
        <circle className={`${g}-halo ${g}-d2`} cx="34" cy="26" r="13" />
        <circle className={`${g}-halo ${g}-d3`} cx="60" cy="62" r="20" />
        <circle className={`${g}-halo ${g}-d4`} cx="86" cy="26" r="13" />
        <circle className={`${g}-halo ${g}-d5`} cx="98" cy="94" r="13" />
      </g>

      {/* ── 5. Expanding ring pulses ── */}
      <circle className={`${g}-ring ${g}-r1`}  cx="22" cy="94" r="5.5" />
      <circle className={`${g}-ring ${g}-r2`}  cx="34" cy="26" r="5.5" />
      <circle className={`${g}-ring ${g}-r3`}  cx="60" cy="62" r="8"   />
      <circle className={`${g}-ring ${g}-r3b`} cx="60" cy="62" r="8"   />
      <circle className={`${g}-ring ${g}-r4`}  cx="86" cy="26" r="5.5" />
      <circle className={`${g}-ring ${g}-r5`}  cx="98" cy="94" r="5.5" />

      {/* ── 6. Main dots (on top of everything) ── */}
      <g>
        <circle className={`${g}-dot ${g}-d1`} cx="22" cy="94" r="4.6" />
        <circle className={`${g}-dot ${g}-d2`} cx="34" cy="26" r="4.6" />
        <circle className={`${g}-dot ${g}-d3`} cx="60" cy="62" r="6.8" />
        <circle className={`${g}-dot ${g}-d4`} cx="86" cy="26" r="4.6" />
        <circle className={`${g}-dot ${g}-d5`} cx="98" cy="94" r="4.6" />
        <circle className={`${g}-dot ${g}-ds`} cx="28" cy="60" r="2.6" />
        <circle className={`${g}-dot ${g}-ds`} cx="47" cy="43" r="2.6" />
        <circle className={`${g}-dot ${g}-ds`} cx="73" cy="43" r="2.6" />
        <circle className={`${g}-dot ${g}-ds`} cx="92" cy="60" r="2.6" />
        <circle className={`${g}-dot ${g}-ds`} cx="60" cy="26" r="2.6" />
      </g>
    </svg>
  );
}
