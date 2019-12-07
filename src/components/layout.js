import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  flexContainer: {
    marginTop: theme.spacing(8),
  },
  bodyContainer: {
    maxWidth: 800,
    padding: theme.spacing(2),

  },
  navButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  navBar: {
    transition: "background-color 0.5s ease, box-shadow 0.5s ease",
    alignItems: "center",
  },
  desktopToolBar: {
    display: "flex",
    width: "100%",
    maxWidth: 800,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>{children}</div>
      </Box>
    </>
  )
}

export default Layout
