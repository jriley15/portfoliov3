import React, { useEffect } from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { useStateValue } from "./state"
import { ThemeProvider } from "@material-ui/styles"

// A custom theme for this app
const lightTheme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    //type: "dark"
    primary: {
      light: "#7795f8",
      main: "#6772e5",
      dark: "#555abf",
    },
  },
})
const darkTheme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: "#7795f8",
      main: "#6772e5",
      dark: "#555abf",
    },
  },
})

const CustomThemeProvider = ({ children }) => {
  const [{ theme }, dispatch] = useStateValue()

  useEffect(() => {
    let theme = localStorage.getItem("theme")
    if (theme)
      dispatch({
        type: "changeTheme",
        newTheme: theme,
      })
  }, [])

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
