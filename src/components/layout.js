import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Navbar from "./Navbar"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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

const Layout = ({ children, path }) => {
  const classes = useStyles()
  return (
    <>
      <Navbar path={path} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
