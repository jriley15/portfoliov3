import React from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { StateProvider } from "../../src/state"
import CustomThemeProvider from "../../src/theme"

export default function TopLayout(props) {
  const initialState = {
    theme: "light",
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme,
        }

      default:
        return state
    }
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        {/*<link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />*/}
      </Helmet>
      <StateProvider initialState={initialState} reducer={reducer}>
        <CustomThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {props.children}
        </CustomThemeProvider>
      </StateProvider>
    </React.Fragment>
  )
}
