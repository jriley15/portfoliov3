import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box, CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CustomMarkDown from "../components/common/CustomMarkDown"
import { H3 } from "../components/common/Headers"
import Disqus from "disqus-react"
import { useStateValue } from "../state"
import Loadable from "react-loadable"

const Thread = Loadable({
  loader: () => import("../components/Comments"),
  loading: CircularProgress,
})

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

  disqus: {
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
      }
    }
  }
`

const Post = props => {
  const classes = useStyles()

  const { markdownRemark } = props.data
  const { frontmatter: post } = markdownRemark
  //const post = data && data.post

  const disqusShortname = "jrdn"
  const disqusConfig = {
    identifier: "jrdn" + post.path,
    title: post.title,
  }
  const [{ theme }, dispatch] = useStateValue()

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
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              style={{ width: "100%" }}
            >
              <H3>{post.title}</H3>
              <Typography variant="body2">
                {new Date(post.date).toDateString()}
              </Typography>

              <div className={classes.contentContainer}>
                <CustomMarkDown
                  markdownRemark={markdownRemark}
                  className={classes.markDown}
                />
                <div className={classes.disqus}>
                  {/*<Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                  />*/}
                  {/* <LoadableComponent
                    namespaceId={5}
                    threadId={post.path}
                    backgroundColor={theme === "light" ? "fafafa" : "303030"}
                  /> */}
                  <Thread
                    namespaceId={5}
                    threadId={post.path}
                    backgroundColor={theme === "light" ? "fafafa" : "303030"}
                  />
                  {/*<IFrame />*/}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default Post
