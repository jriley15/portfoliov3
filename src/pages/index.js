import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Box, Avatar, Button } from "@material-ui/core"
import Heading1 from "../components/common/Heading1"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Heading2 from "../components/common/Heading2"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    minWidth: 300,
  },
  topContainer: {
    paddingTop: theme.spacing(11),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
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
    marginTop: theme.spacing(8),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.topContainer}>
        <div>
          <Heading1>Hello, I'm Jordan</Heading1>
          <Typography
            style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
            gutterBottom
          >
            A full stack software engineer based out of Phoenix, Arizona. I
            enjoy writing open source software and learning new technologies.
          </Typography>
          <Button size="large" variant="contained">
            <img
              src="https://images.jrdn.tech/github.svg"
              className={classes.icon}
              alt="github"
            />
          </Button>
        </div>
        <div className={classes.margin}>
          <Paper className={classes.paper}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt="Me"
                src="https://images.jrdn.tech/me.jpg"
                className={classes.bigAvatar}
              />
              <Typography
                variant="h5"
                component="h3"
                style={{ fontWeight: 500 }}
              >
                Connect with me
              </Typography>
              <Box display="flex" style={{ marginTop: 16 }}>
                <MailIcon style={{ marginRight: 5 }} />
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ color: "#b3b9c5" }}
                >
                  Jordanr3@live.com
                </Typography>
              </Box>
              <div style={{ marginTop: 16 }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  YouTube
                </Button>
              </div>
            </Box>
          </Paper>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <Heading2>Latest Projects</Heading2>
      </div>
      <div className={classes.contentContainer}>
        <Heading2>Latest Blog Posts</Heading2>
      </div>
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>{" "}
      <Typography
        style={{ color: "#b3b9c5", fontSize: 20, marginBottom: 24 }}
        gutterBottom
      >
        A full stack software engineer based out of Phoenix, Arizona. I enjoy
        writing open source software and learning new technologies.
      </Typography>
    </Layout>
  )
}

export default IndexPage
