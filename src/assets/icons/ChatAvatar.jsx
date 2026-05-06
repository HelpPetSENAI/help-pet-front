import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={15} cy={15} r={15} fill="#A4E5A8" />
      <circle cx={15} cy={15} r={14} stroke="#061407" strokeWidth={2} />
    </g>
    <defs>
      <filter
        id="a"
        width={32}
        height={32}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0509804 0 0 0 0 0.168627 0 0 0 0 0.0784314 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2021_980"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2021_980"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
