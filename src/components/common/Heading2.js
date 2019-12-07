import React from "react"
import { Typography } from "@material-ui/core"

export default function Heading2({ children }) {
  return (
    <Typography variant="h4" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}
