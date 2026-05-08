import * as React from "react"
const G6GreenBall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    viewBox="-2 -2 61 61"
    fill="none"
    overflow="visible"
    {...props}
  >
    <g filter="url(#g6-green-ball-shadow)">
      <circle cx={25.5} cy={25.5} r={25.5} fill="#A4E5A8" />
      <circle cx={25.5} cy={25.5} r={24.5} stroke="#061407" strokeWidth={2} />
    </g>
    <defs>
      <filter
        id="g6-green-ball-shadow"
        width={61}
        height={61}
        x={-2}
        y={-2}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0509804 0 0 0 0 0.168627 0 0 0 0 0.0784314 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1969_80" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1969_80"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default G6GreenBall
