import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Box,
  Button,
  fade,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  previewImageAvatar: {
    //margin: 10,
    //maxWidth: 220,
    minWidth: 200,
    height: 120,
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "3px",
  },
  projectContainer: {
    borderColor:
      theme.palette.type === "light" ? "#f2f2f2" : "rgba(255, 255, 255, 0.12)",
    borderStyle: "solid",
    borderWidth: "0",
  },
}))

const PostsSection = props => {
  const classes = useStyles()
  const themeHook = useTheme()
  const isMobile = useMediaQuery(themeHook.breakpoints.down("xs"))
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              description
              previewImage
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <>
      {posts.map(({ node: { frontmatter: post } }, index) => (
        <VisibilitySensor key={index} partialVisibility>
          {({ isVisible }) => (
            <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <div
                  className={classes.projectContainer}
                  style={{
                    borderBottomWidth: index === posts.length - 1 ? "0" : "2px",
                  }}
                >
                  <Link
                    to={post.path}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <div
                      style={{ opacity: opacity }}
                      className={classes.projectButton}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <div>
                          <Typography variant="h6">{post.title}</Typography>
                          <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                          >
                            {post.date}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="body1"
                            gutterBottom
                          >
                            {post.description}
                          </Typography>
                          {isMobile && (
                            <div
                              style={{
                                backgroundImage: `url("${post.previewImage}")`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          )}
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            style={{ marginTop: 8 }}
                          >
                            Read More
                          </Button>
                        </div>
                        {!isMobile && (
                          <div className={classes.previewImageAvatar}>
                            <img
                              src={post.previewImage}
                              style={{ height: "100%" }}
                              alt="preview"
                            />
                          </div>
                        )}
                      </Box>
                    </div>
                  </Link>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      ))}
    </>
  )
}

export default PostsSection
