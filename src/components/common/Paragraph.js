import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
}))

export default function Paragraph({ children }) {
  const classes = useStyles()

  return <Typography className={classes.root}>{children}</Typography>
}
