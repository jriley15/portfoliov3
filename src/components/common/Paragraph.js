import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    margin: "0 0 2rem",
  },
}))

export default function Paragraph({ children }) {
  const classes = useStyles()

  return <Typography className={classes.root}>{children}</Typography>
}
