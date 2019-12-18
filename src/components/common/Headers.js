import React from "react"
import { Typography } from "@material-ui/core"

export function H1({ children }) {
  return (
    <Typography variant="h1" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}
export function H2({ children }) {
  return (
    <Typography variant="h2" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}

export function H3({ children }) {
  return (
    <Typography variant="h3" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}

export function H4({ children }) {
  return (
    <Typography variant="h4" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}

export function H5({ children }) {
  return (
    <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
      {children}
    </Typography>
  )
}

export function H6({ children }) {
  return (
    <Typography variant="h6" gutterBottom>
      {children}
    </Typography>
  )
}
