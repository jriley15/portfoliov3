import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    color: "rgba(0,0,0,.7)",
    border: "2px solid #fed356",
    background: "#fff8e4",
    borderRadius: "4px",
    fontWeight: 500,
    margin: "1.5rem 0",
    padding: "1.5rem",
    lineHeight: "1.6",
    fontSize: "1rem",
  },
}))

export default function BlockQuote({ children }) {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}
