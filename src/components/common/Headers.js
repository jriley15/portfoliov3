import React from "react"
import { Typography } from "@material-ui/core"

export function H1({ children, align }) {
  return (
    <Typography
      variant="h1"
      align={align}
      gutterBottom
      style={{ fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}
export function H2({ children, align }) {
  return (
    <Typography
      variant="h2"
      align={align}
      gutterBottom
      style={{ fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}

export function H3({ children, align }) {
  return (
    <Typography
      variant="h3"
      align={align}
      gutterBottom
      style={{ fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}

export function H4({ children, align }) {
  return (
    <Typography
      variant="h4"
      align={align}
      gutterBottom
      style={{ fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}

export function H5({ children, align }) {
  return (
    <Typography
      variant="h5"
      align={align}
      gutterBottom
      style={{ fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}

export function H6({ children, align }) {
  return (
    <Typography variant="h6" align={align} gutterBottom>
      {children}
    </Typography>
  )
}
