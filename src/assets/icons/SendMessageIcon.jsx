import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#061407"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.154 9.57h-5.5m-.085.29-2.335 6.975c-.183.548-.275.822-.21.99a.5.5 0 0 0 .332.3c.175.05.438-.07.965-.306l16.712-7.52c.514-.232.771-.348.85-.508a.5.5 0 0 0 0-.443c-.079-.161-.336-.277-.85-.508L2.314 1.317c-.525-.237-.788-.355-.962-.306a.5.5 0 0 0-.331.299c-.067.168.024.442.206.988L3.57 9.355c.03.094.046.14.053.189a.5.5 0 0 1 0 .128c-.007.048-.023.095-.054.189Z"
    />
  </svg>
)
export default SvgComponent
