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
import { H4, H3 } from "../components/common/Headers"

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

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`

const Post = props => {
  const classes = useStyles()

  const { markdownRemark } = props.data
  const { frontmatter: post } = markdownRemark
  //const post = data && data.post

  return (
    <Layout {...props}>
      <SEO title={post.title} description={post.description} />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.topContainer}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <H3>{post.title}</H3>
              <Typography variant="body2">
                {new Date(post.date).toDateString()}
              </Typography>

              <div className={classes.contentContainer}>
                <CustomMarkDown markdownRemark={markdownRemark} />
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Post
