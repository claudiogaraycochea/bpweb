import * as React from "react"

function IconMenu(props: any) {

  return (
    <svg
      fill={props.color}
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={7} width={18.24} height={3} rx={1.5} fill="#303133" />
      <rect y={23} width={18.24} height={3} rx={1.5} fill="#303133" />
      <rect y={15} width={24} height={3} rx={1.5} fill="#303133" />
    </svg>
  )
}

export default IconMenu
