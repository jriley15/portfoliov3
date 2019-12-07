import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Avatar, Button } from "@material-ui/core"
import Heading1 from "../components/common/Heading1"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import MailIcon from "@material-ui/icons/Mail"

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
    marginTop: theme.spacing(8),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Blog" />

      <div className={classes.topContainer}>
        <div>
          <Heading2>Blog</Heading2>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
