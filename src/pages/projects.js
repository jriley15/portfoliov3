import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import ProjectsSection from "../components/ProjectsSection"

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
  flexContainer: {
    paddingTop: theme.spacing(8),
  },
  bodyContainer: {
    maxWidth: 800,
    padding: theme.spacing(2),
    width: "100%",
  },
}))

const Projects = props => {
  const classes = useStyles()

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.topContainer}>
            <div style={{ width: "100%" }}>
              <Heading2>Projects</Heading2>
              <ProjectsSection />
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Projects
