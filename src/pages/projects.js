import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Typography,
  Box,
  Avatar,
  Button,
  ButtonGroup,
  fade,
} from "@material-ui/core"
import Heading1 from "../components/common/Heading1"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import MailIcon from "@material-ui/icons/Mail"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
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
    width: "100%",
    maxWidth: 800,
    padding: theme.spacing(2),
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
            <div>
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
