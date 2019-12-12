import React from "react"
import { Typography } from "@material-ui/core"

const Heading2 = React.forwardRef(function(props, ref) {
  return (
    <Typography
      ref={ref}
      variant="h4"
      gutterBottom
      style={{ ...props.style, fontWeight: 600, marginBottom: 24 }}
    >
      {props.children}
    </Typography>
  )
})

export default Heading2
