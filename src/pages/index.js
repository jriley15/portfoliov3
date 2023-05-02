import { Avatar, Box, Button, ButtonGroup, Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import MailIcon from "@material-ui/icons/Mail"
import React from "react"
import Heading1 from "../components/common/Heading1"
import Heading2 from "../components/common/Heading2"
import Layout from "../components/layout"
import PostsSection from "../components/PostsSection"
import ProjectsSection from "../components/ProjectsSection"
import SEO from "../components/seo"
import Shapes from "../components/Shapes"
import { useStateValue } from "../state"

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
    height: "150px",
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

  /* Waves */

  parallax: {
    animation: "$moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite",
  },

  p1: {
    animationDelay: "-2s",
    animationDuration: "7s",
  },
  p2: {
    animationDelay: "-3s",
    animationDuration: "10s",
  },
  p3: {
    animationDelay: "-4s",
    animationDuration: "13s",
  },
  p4: {
    animationDelay: "-5s",
    animationDuration: "20s",
  },

  waves: {
    position: "relative",
    width: "100%",
    height: "10vh",
    marginBottom: "-7px" /*Fix for safari gap*/,
    minHeight: "80px",
    maxHeight: "120px",
  },

  "@keyframes moveForever": {
    "0%": { transform: "translate3d(-90px,0,0)" },
    "100%": { transform: "translate3d(85px,0,0)" },
  },
}))

const IndexPage = props => {
  const classes = useStyles()
  const [{ theme }, dispatch] = useStateValue()

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
                  A software engineer based out of Tempe with a passion for
                  writing open-source software and a keen interest in mastering
                  the latest technologies.
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  component="a"
                  href="https://github.com/jriley15/"
                  target="_blank"
                  style={{ marginRight: "1rem" }}
                >
                  <img
                    src="https://images.jrdn.tech/github.svg"
                    className={classes.icon}
                    alt="github"
                  />
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  component="a"
                  href="https://www.youtube.com/channel/UCm1QwbkF44UTDhAHzqBYNWA"
                  target="_blank"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                    className={classes.icon}
                    alt="youtube"
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
                      src="https://media.licdn.com/dms/image/C4D03AQGR1xvIt1H4bw/profile-displayphoto-shrink_800_800/0/1631822444481?e=1688601600&v=beta&t=Fm35_VimJpgF8c670N3pv3VizoLPeCcxR7c_REE0mY0"
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
                    </div>
                  </Box>
                </Paper>
              </div>
            </div>
          </div>
        </Box>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          className={classes.waves}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            <use
              className={`${classes.p1} ${classes.parallax}`}
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill={
                theme === "light"
                  ? "rgba(250,250,250,0.7)"
                  : "rgba(	48, 48, 48, 0.7)"
              }
            />
            <use
              className={`${classes.p2} ${classes.parallax}`}
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill={
                theme === "light"
                  ? "rgba(250,250,250,0.5)"
                  : "rgba(	48, 48, 48, 0.5)"
              }
            />
            <use
              className={`${classes.p3} ${classes.parallax}`}
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill={
                theme === "light"
                  ? "rgba(250,250,250,0.3)"
                  : "rgba(	48, 48, 48, 0.3)"
              }
            />
            <use
              className={`${classes.p4} ${classes.parallax}`}
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill={theme === "light" ? "#fafafa" : "#303030"}
            />
          </g>
        </svg>

        {/*<svg
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
          </svg>*/}
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
