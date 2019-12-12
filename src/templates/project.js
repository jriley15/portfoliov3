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
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../components/common/serializers"
import Carousel from "../components/gallery/Carousel"

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

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      description
      demo
      images
      repository
      _rawBody
      slug {
        current
      }
    }
  }
`

const Project = props => {
  const classes = useStyles()

  const { data, errors } = props
  const project = data && data.project

  return (
    <Layout {...props}>
      <SEO title={project.title} description={project.description} />
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
              alignItems="center"
            >
              <Heading2>{project.title}</Heading2>
              <Typography color="textSecondary">
                {project.description}
              </Typography>
              <div className={classes.contentContainer}>
                <Carousel images={project.images} />
              </div>
              <div className={classes.contentContainer}>
                <BlockContent
                  blocks={project._rawBody}
                  serializers={serializers}
                />
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Project
