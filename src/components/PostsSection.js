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

const useStyles = makeStyles(theme => ({
  projectButton: {
    padding: theme.spacing(2),
    borderRadius: 5,
    margin: "0 -" + theme.spacing(2) + "px",

    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
      backgroundColor: fade(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
      "&$disabled": {
        backgroundColor: "transparent",
      },
    },
    borderBottom: "2px solid #f2f2f2",
  },
  previewImageAvatar: {
    //margin: 10,
    //maxWidth: 220,
    minWidth: 200,
    height: 120,
    display: "flex",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: "3px",
  },
}))

const PostsSection = props => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      posts: allSanityPost(
        limit: 5
        sort: { fields: [publishedAt], order: DESC }
      ) {
        edges {
          node {
            _rawBody
            id
            title
            description
            previewImage
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const posts =
    data &&
    data.posts &&
    mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)

  return (
    <>
      {posts.map(post => (
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <Link
                  to={"/post/" + post.slug.current}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div
                    key={post.id}
                    style={{ opacity: opacity }}
                    className={classes.projectButton}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <div>
                        <Typography gutterBottom variant="h6">
                          {post.title}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                          gutterBottom
                        >
                          {post.description}
                        </Typography>

                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          style={{ marginTop: 8 }}
                        >
                          Read More
                        </Button>
                      </div>
                      <div className={classes.previewImageAvatar}>
                        <img
                          src={post.previewImage}
                          style={{ height: "100%" }}
                          alt="preview"
                        />
                      </div>
                    </Box>
                  </div>
                </Link>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      ))}
    </>
  )
}

export default PostsSection
