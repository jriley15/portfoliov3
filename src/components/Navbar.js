import React from "react"
import useScrollPosition from "../hooks/useScrollPosition"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import FaceIcon from "@material-ui/icons/Computer"
import { Link } from "gatsby"
import { Box } from "@material-ui/core"
import { useStateValue } from "../state"
import Moon from "@material-ui/icons/Brightness3"
import Sun from "@material-ui/icons/Brightness7"

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
  },
  title: {
    //marginLeft: 10,
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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(0),
    transition: "min-height 0.3s linear",
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}))

export default function Navbar({ path }) {
  const classes = useStyles()
  const y = useScrollPosition()
  const [{ theme }, dispatch] = useStateValue()

  const handleThemeChange = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    dispatch({
      type: "changeTheme",
      newTheme: theme === "light" ? "dark" : "light",
    })
  }

  return (
    <div className={classes.nav}>
      <AppBar
        position="fixed"
        className={classes.navBar}
        style={{
          backgroundColor:
            y === 0 && (path === "/" || path === "/*")
              ? "transparent"
              : theme === "light"
              ? "#212124"
              : "#555abf",
          boxShadow:
            y === 0
              ? "none"
              : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Toolbar
          className={classes.desktopToolBar}
          variant={y === 0 ? "regular" : "dense"}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6" className={classes.title}>
                🎅 Jordan Riley
              </Typography>
            </Box>
          </Link>
          <div className={classes.nav} />

          <Button
            color="inherit"
            className={classes.navButton}
            size="large"
            component={Link}
            to="/post/about-me"
          >
            About
          </Button>
          <Button
            color="inherit"
            className={classes.navButton}
            size="large"
            component={Link}
            to="/blog"
            style={{ color: path === "/blog" ? "#2dce89" : "inherit" }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            className={classes.navButton}
            size="large"
            component={Link}
            to="/projects"
          >
            Projects
          </Button>

          <Button onClick={handleThemeChange} size="large">
            {theme === "light" ? (
              <Moon style={{ color: "orange" }} />
            ) : (
              <Sun style={{ color: "yellow" }} />
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
