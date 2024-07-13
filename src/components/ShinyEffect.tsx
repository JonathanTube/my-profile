type params = {
  left?: number
  right?: number
  size?: number
  top: number
}

export const ShinyEffect = ({ left, right, top, size = 500 }: params) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    left: "0px",
    right: "0px",
  }

  if (left) positionStyles.left = `${left}px`

  if (right) positionStyles.right = `${right}px`

  return <div className="shiny-effect" style={positionStyles}></div>
}
