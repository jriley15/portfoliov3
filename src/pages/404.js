import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box, Avatar, Button } from "@material-ui/core"
import Heading1 from "../components/common/Heading1"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import MailIcon from "@material-ui/icons/Mail"
import PostsSection from "../components/PostsSection"
import serializers from "../components/common/serializers"
import CustomMarkDown from "../components/common/CustomMarkDown"
import { H4, H3, H2 } from "../components/common/Headers"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    minWidth: 300,
  },
  topContainer: {
    paddingTop: theme.spacing(6),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },

  contentContainer: {
    marginTop: theme.spacing(4),
    wordBreak: "break-word",
  },
  flexContainer: {
    paddingTop: theme.spacing(8),
  },
  bodyContainer: {
    width: "100%",
    maxWidth: 800,
    padding: theme.spacing(2),
  },
}))

const NotFound = props => {
  const classes = useStyles()

  return (
    <Layout {...props}>
      <SEO title={"404"} description={"Page not found"} />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.topContainer}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              style={{ width: "100%" }}
            >
              <H2 align="center">Page Not Found</H2>
              <img src="https://images.jrdn.tech/notfound.svg" />
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default NotFound
