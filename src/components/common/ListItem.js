import React from "react"
import { Typography } from "@material-ui/core"

export default function ListItem({ children }) {
  return (
    <li>
      <Typography>{children}</Typography>
    </li>
  )
}
