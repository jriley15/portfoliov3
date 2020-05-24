import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box, Button, CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "../components/gallery/Carousel"
import CustomMarkDown from "../components/common/CustomMarkDown"
import { H3 } from "../components/common/Headers"
import Loadable from "react-loadable"
import { useStateValue } from "../state"
import { Thread } from "jthreads-react"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    minWidth: 300,
  },
  topContainer: {
    paddingTop: theme.spacing(3),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      paddingTop: theme.spacing(6),
    },
  },

  contentContainer: {
    marginTop: theme.spacing(4),
    wordBreak: "break-word",
    width: "100%",
  },
  flexContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
    },
    width: "100%",
  },
  bodyContainer: {
    width: "100%",
    maxWidth: 800,
    padding: theme.spacing(2),
  },
  btn: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  comments: {
    marginTop: theme.spacing(8),
  },
}))

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        emoji
        github
        demo
        images
      }
    }
  }
`

const Project = props => {
  const classes = useStyles()
  const { markdownRemark } = props.data
  const { frontmatter: project } = markdownRemark
  const [{ theme }, dispatch] = useStateValue()

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
              style={{ width: "100%" }}
            >
              <H3>{project.title}</H3>
              <Typography color="textSecondary">
                {project.description}
              </Typography>
              <div className={classes.contentContainer}>
                <Carousel images={project.images} />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  component="a"
                  href={project.demo}
                  target="__blank"
                >
                  Live Demo
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  component="a"
                  href={project.github}
                  target="__blank"
                >
                  <img
                    src="https://images.jrdn.tech/github.svg"
                    style={{ width: 16, marginRight: 4 }}
                    alt="github"
                  />
                  Repository
                </Button>
              </div>
              <div className={classes.contentContainer}>
                <CustomMarkDown markdownRemark={markdownRemark} />
                <div className={classes.comments}>
                  <Thread
                    namespaceId={5}
                    threadId={project.path}
                    backgroundColor={theme === "light" ? "fafafa" : "303030"}
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Project
