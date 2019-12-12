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
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
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
  projectContainer: {
    borderColor:
      theme.palette.type === "light" ? "#f2f2f2" : "rgba(255, 255, 255, 0.12)",
    borderStyle: "solid",
    borderWidth: "0",
  },
}))

const ProjectsSection = props => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query ProjectsPageQuery {
      projects: allSanityProject(sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            id
            title
            emoji
            description
            demo
            images
            repository
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const projects =
    data &&
    data.projects &&
    mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)

  return (
    <>
      {projects.map((project, index) => (
        <VisibilitySensor key={project.id}>
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
                    to={"/project/" + project.slug.current}
                  >
                    <div
                      key={project.id}
                      style={{
                        opacity: opacity,
                      }}
                      className={classes.projectButton}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <div>
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
                        <div className={classes.previewImageAvatar}>
                          <img
                            src={project.images[0]}
                            style={{ height: "100%" }}
                            alt="preview"
                          />
                        </div>
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
