import React, { useEffect } from "react"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { useStateValue } from "./state"
import { ThemeProvider } from "@material-ui/styles"

// A custom theme for this app
let lightTheme = createMuiTheme({
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
let darkTheme = createMuiTheme({
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
    body1: {
      lineHeight: 1.6,
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

lightTheme = responsiveFontSizes(lightTheme)
darkTheme = responsiveFontSizes(darkTheme)

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
