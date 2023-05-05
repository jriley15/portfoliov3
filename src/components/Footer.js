import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

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
        justifyContent="center"
        display="flex"
        className={classes.footerContainer}
      >
        {/*<div>
          <Typography>Footer Left</Typography>
        </div>*/}
        <div>
          <Typography>© 2023 Jordan Riley</Typography>
        </div>
      </Box>
    </Box>
  )
}
