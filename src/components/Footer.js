import React from "react"
import { Link } from "gatsby"
import { Typography, Box, Avatar, Button } from "@material-ui/core"
import Heading1 from "../components/common/Heading1"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles(theme => ({
  footerContainer: {
    width: "100%",
    maxWidth: 800,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <Box justifyContent="center" display="flex">
      <Box
        justifyContent="space-between"
        display="flex"
        className={classes.footerContainer}
      >
        <div>
          <Typography>Footer Left</Typography>
        </div>
        <div>
          <Typography>Footer Right</Typography>
        </div>
      </Box>
    </Box>
  )
}
