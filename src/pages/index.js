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
import Shapes from "../components/Shapes"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import BuildIcon from "@material-ui/icons/Build"
import ProjectsSection from "../components/ProjectsSection"
import PostsSection from "../components/PostsSection"

const useStyles = makeStyles(theme => ({
  "@keyframes hover": {
    "0%": { top: 0 },
    "50%": { top: theme.spacing(1) },
    "100%": { top: 0 },
  },
  paperContainer: {
    position: "relative",
    minWidth: 300,
    minHeight: 400,
  },
  paper: {
    //position: "absolute",
    padding: theme.spacing(3, 2),
    minWidth: 300,
    backgroundColor: "rgba(44,47,51, .6)",
    /*animationName: "$hover",
    animationDuration: "3s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",*/
  },
  topContainer: {
    paddingTop: theme.spacing(9),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: theme.spacing(19),
    },
    //position: "relative",
    paddingBottom: theme.spacing(10),
  },
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      marginLeft: theme.spacing(4),
    },
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  icon: {
    width: "32px",
    height: "32px",
    marginLeft: 5,
    marginRight: 5,
  },
  btn: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  contentContainer: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  linkedInIcon: {
    marginRight: theme.spacing(1),
    width: "20px",
  },
  landingBackGround: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    background: "linear-gradient(150deg,#7795f8 15%,#6772e5 70%,#555abf 94%)",
  },
  seperator: {
    top: "auto",
    width: "100%",
    height: "60px",
    zIndex: 1,
    WebkitTransform: "translateZ(0)",
    transform: "translateZ(0)",
    overflow: "hidden",
  },
  svg: {
    bottom: 0,
    position: "absolute",
  },
  poly: {
    fill: theme.palette.background.default,
  },
  flexContainer: {},
  bodyContainer: {
    maxWidth: 800,
    padding: theme.spacing(2),
    width: "100%",
  },
  relative: {
    position: "relative",
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (
    <Layout {...props} index={true}>
      <SEO title="Home" description="My Portfolio" />

      <div className={classes.relative}>
        <div className={classes.landingBackGround}>
          <Shapes />
        </div>

        <Box
          justifyContent="center"
          display="flex"
          className={classes.flexContainer}
        >
          <div className={classes.bodyContainer}>
            <div className={classes.topContainer}>
              <div>
                <Heading1>Hello, I'm Jordan</Heading1>
                <Typography
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    marginBottom: 24,
                  }}
                  gutterBottom
                >
                  A software engineer based out of Phoenix, Arizona. I enjoy
                  writing open source software and learning new technologies.
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  component="a"
                  href="https://github.com/jriley15/"
                  target="_blank"
                >
                  <img
                    src="https://images.jrdn.tech/github.svg"
                    className={classes.icon}
                    alt="github"
                  />
                </Button>
              </div>

              <div className={classes.margin}>
                <Paper className={classes.paper}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Avatar
                      alt="Me"
                      src="https://images.jrdn.tech/me.jpg"
                      className={classes.bigAvatar}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      style={{ fontWeight: 500, color: "white" }}
                    >
                      Connect with me
                    </Typography>
                    <Box display="flex" style={{ marginTop: 16 }}>
                      <MailIcon style={{ marginRight: 5, color: "white" }} />
                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{ color: "white" }}
                      >
                        Jordanr3@live.com
                      </Typography>
                    </Box>
                    <div style={{ marginTop: 16 }}>
                      <ButtonGroup aria-label="large contained secondary button group">
                        <Button
                          variant="contained"
                          color="primary"
                          component="a"
                          href="https://www.linkedin.com/in/jordan-riley-090564158/"
                          target="_blank"
                        >
                          <img
                            src="https://www.pinclipart.com/picdir/big/100-1003028_svg-linkedin-icon-vector-clipart.png"
                            className={classes.linkedInIcon}
                          />
                          LinkedIn
                        </Button>
                        <Button
                          variant="contained"
                          component="a"
                          href="https://www.youtube.com/channel/UCm1QwbkF44UTDhAHzqBYNWA"
                          target="_blank"
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/768px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
                            className={classes.linkedInIcon}
                          />
                          YouTube
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Paper>
              </div>
            </div>
          </div>
        </Box>
        <div className={classes.seperator}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            className={classes.svg}
          >
            <polygon
              className={classes.poly}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <Box
        justifyContent="center"
        display="flex"
        className={classes.flexContainer}
      >
        <div className={classes.bodyContainer}>
          <div className={classes.contentContainer}>
            <Heading2>Projects</Heading2>
            <ProjectsSection />
          </div>
          <div className={classes.contentContainer}>
            <Heading2>Blog Posts</Heading2>
            <PostsSection />
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
