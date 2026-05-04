import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={53}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#39C442"
        d="M25.5 43.575c3.543 0 6.845-1.023 9.634-2.784l-8.172-6.556a8.183 8.183 0 0 1-2.688.102c-3.39-.404-6.211-2.594-6.3-4.89-.09-2.297 2.584-3.83 5.975-3.426.485.057.96.153 1.414.28a9.517 9.517 0 0 1-.58-1.32c-1.13-3.222-.212-6.167 2.049-6.577 2.261-.411 5.01 1.87 6.14 5.09.323.923.478 1.823.483 2.647l8.505 6.824a18.015 18.015 0 0 0 1.614-7.465c0-9.982-8.092-18.075-18.075-18.075-9.982 0-18.075 8.093-18.075 18.075S15.519 43.575 25.5 43.575Z"
      />
      <path
        stroke="#061407"
        d="M25.5 43.575c3.543 0 6.845-1.023 9.634-2.784l-8.172-6.556a8.183 8.183 0 0 1-2.688.102c-3.39-.404-6.211-2.594-6.3-4.89-.09-2.297 2.584-3.83 5.975-3.426.485.057.96.153 1.414.28a9.517 9.517 0 0 1-.58-1.32c-1.13-3.222-.212-6.167 2.049-6.577 2.261-.411 5.01 1.87 6.14 5.09.323.923.478 1.823.483 2.647l8.505 6.824a18.015 18.015 0 0 0 1.614-7.465c0-9.982-8.092-18.075-18.075-18.075-9.982 0-18.075 8.093-18.075 18.075S15.519 43.575 25.5 43.575Z"
      />
    </g>
    <g filter="url(#b)">
      <path
        fill="#39C442"
        d="M25.5 50.5c13.783 0 24.998-11.215 24.998-25 0-13.784-11.215-25-24.999-25C11.714.5.5 11.714.5 25.5c0 13.784 11.214 25 25 25Zm0-45.714c11.42 0 20.712 9.292 20.712 20.714 0 11.421-9.292 20.714-20.713 20.714-11.422 0-20.714-9.293-20.714-20.714C4.786 14.078 14.077 4.786 25.5 4.786Z"
      />
      <path
        stroke="#061407"
        d="M25.5 50.5c13.783 0 24.998-11.215 24.998-25 0-13.784-11.215-25-24.999-25C11.714.5.5 11.714.5 25.5c0 13.784 11.214 25 25 25Zm0-45.714c11.42 0 20.712 9.292 20.712 20.714 0 11.421-9.292 20.714-20.713 20.714-11.422 0-20.714-9.293-20.714-20.714C4.786 14.078 14.077 4.786 25.5 4.786Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={41.651}
        height={41.651}
        x={6.924}
        y={6.925}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4.5} dy={4.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0235294 0 0 0 0 0.0784314 0 0 0 0 0.027451 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_278_2150"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_278_2150"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={52.998}
        height={53}
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
        <feColorMatrix values="0 0 0 0 0.0235294 0 0 0 0 0.0784314 0 0 0 0 0.027451 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_278_2150"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_278_2150"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
