import React from "react"
import { Typography } from "@material-ui/core"

export default function Heading1({ children }) {
  return (
    <Typography variant="h3" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}
