import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import PostsSection from "../components/PostsSection"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    minWidth: 300,
  },
  topContainer: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },

  contentContainer: {
    marginTop: theme.spacing(8),
    height: "calc(100vh - 64px)",
  },
  flexContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
    },
  },
  bodyContainer: {
    width: "100%",
  },
}))

const ResumePage = props => {
  const classes = useStyles()
  return (
    <Layout {...props}>
      <SEO title="Resume" description="My Resume" />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.topContainer}>
            <object
              data="https://jthreadsstorage.blob.core.windows.net/portfolio/Jordan Riley Resume 2019.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              Resume
            </object>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default ResumePage
