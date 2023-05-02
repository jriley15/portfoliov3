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
    paddingTop: theme.spacing(3),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      display: "flex",
    },
  },

  contentContainer: {
    marginTop: theme.spacing(8),
  },
  flexContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
    },
  },
  bodyContainer: {
    width: "100%",
    maxWidth: 800,
    padding: theme.spacing(2),
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
