import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <circle
      cx={9.5}
      cy={9.5}
      r={8.5}
      fill="#A4E5A8"
      stroke="#061407"
      strokeWidth={2}
    />
  </svg>
)
export default SvgComponent
