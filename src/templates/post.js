/*import React from "react"
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
  query PostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      _rawBody
      title
      description
      previewImage
      publishedAt
      _createdAt
    }
  }
`

const Post = props => {
  const classes = useStyles()

  const { data, errors } = props
  const post = data && data.post

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
              <Heading2>{post.title}</Heading2>
              <Typography variant="body2">
                {new Date(post._createdAt).toDateString()}
              </Typography>

              <div className={classes.contentContainer}>
                <BlockContent
                  blocks={post._rawBody}
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

export default Post
*/

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
import CustomMarkDown from "../components/common/CustomMarkDown"
import { H4, H3 } from "../components/common/Headers"

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
  const { frontmatter } = markdownRemark
  //const post = data && data.post

  return (
    <Layout {...props}>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.topContainer}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <H3>{frontmatter.title}</H3>
              <Typography variant="body2">
                {new Date(frontmatter.date).toDateString()}
              </Typography>

              <div className={classes.contentContainer}>
                {/*<BlockContent
                  blocks={post._rawBody}
                  serializers={serializers}
                />*/}
                {/*<div dangerouslySetInnerHTML={{ __html: html }} />*/}
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
