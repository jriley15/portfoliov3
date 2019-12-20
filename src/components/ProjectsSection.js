import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  fade,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

const useStyles = makeStyles(theme => ({
  projectButton: {
    //padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    width: "100%",
    position: "relative",
  },
  hover: {
    position: "absolute",
    width: "calc(100% + 32px)",
    height: "calc(100% + 2px)",
    top: -1,
    left: -16,
    borderRadius: 5,
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
  previewImageAvatarMobile: {
    //width: 200,
    //height: 120,
    height: 220,
    maxWidth: "100vw",
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
    width: "100%",
  },
}))

const ProjectsSection = props => {
  const classes = useStyles()
  const themeHook = useTheme()
  const isMobile = useMediaQuery(themeHook.breakpoints.down("xs"))

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.md$/" } }
        limit: 1000
      ) {
        edges {
          node {
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
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges

  return (
    <>
      {projects.map(({ node: { frontmatter: project } }, index) => (
        <VisibilitySensor key={index} partialVisibility>
          {({ isVisible }) => (
            <Spring delay={0} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <div
                  className={classes.projectContainer}
                  style={{
                    borderBottomWidth:
                      index === projects.length - 1 ? "0" : "2px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={project.path}
                  >
                    <div
                      key={project.id}
                      style={{
                        opacity: opacity,
                      }}
                      className={classes.projectButton}
                    >
                      <div className={classes.hover} />
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <div style={{ width: "100%" }}>
                          <Typography gutterBottom variant="h6">
                            {project.emoji} {project.title}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="body1"
                            gutterBottom
                          >
                            {project.description}
                          </Typography>
                          {isMobile && (
                            <div
                              style={{
                                backgroundImage: `url("${project.images[0]}")`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                height: "200px",
                                width: "100%",
                              }}
                            />
                          )}
                          <ButtonGroup style={{ marginTop: 8 }}>
                            <Button
                              variant="outlined"
                              color="primary"
                              size="small"
                            >
                              View More
                            </Button>
                            <Button
                              variant="outlined"
                              color="default"
                              size="small"
                            >
                              <img
                                src="https://images.jrdn.tech/github.svg"
                                style={{ width: 16, marginRight: 4 }}
                                alt="github"
                              />
                              Source
                            </Button>
                          </ButtonGroup>
                        </div>
                        {!isMobile && (
                          <div className={classes.previewImageAvatar}>
                            <img
                              src={project.images[0]}
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

export default ProjectsSection
