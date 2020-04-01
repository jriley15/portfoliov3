import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Button, Slide, Paper, Box } from "@material-ui/core"
import ReactWebChat, {
  createDirectLine,
  createStore,
} from "botframework-webchat"
import MessageIcon from "@material-ui/icons/Message"
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    height: "calc(100vh - 56px)",
    width: "100vw",
    transition: "bottom 225ms cubic-bezier(0, 0, 0.2, 1)",
    [theme.breakpoints.up("sm")]: {
      right: "100px",
      width: "300px",
      height: "566px",
    },
  },
  chatContainer: {
    height: "calc(100vh - 92px)",
    [theme.breakpoints.up("sm")]: {
      height: "530px",
    },
  },

  hideChat: {
    bottom: "calc(-100vh + 93px)",
    [theme.breakpoints.up("sm")]: {
      bottom: "-530px",
    },
  },

  showChat: {
    bottom: 0,
  },
}))

const store = createStore({}, ({ dispatch }) => next => action => {
  if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
    dispatch({
      type: "WEB_CHAT/SEND_EVENT",
      payload: {
        name: "webchat/join",
      },
    })
  }
  return next(action)
})

export default function Webchat() {
  const classes = useStyles()

  const [directLine, setDirectline] = useState()
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const getDirectLine = async () => {
      const res = await fetch(
        /*"http://localhost:3978/api/directline/"*/ "https://jordan-sulaw4x.azurewebsites.net/api/directline",
        {
          method: "GET",
        }
      )
      const { token } = await res.json()
      setDirectline(createDirectLine({ token: token }))
    }
    getDirectLine()
  }, [])

  return (
    <Paper
      className={
        classes.root + " " + (showChat ? classes.showChat : classes.hideChat)
      }
    >
      <Button
        variant="contained"
        fullWidth
        color="default"
        onClick={() => setShowChat(!showChat)}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <MessageIcon />
            <span style={{ paddingLeft: 8 }}>Chat Bot</span>
          </Box>
          {showChat ? <ExpandMore /> : <ExpandLess />}
        </Box>
      </Button>
      <div className={classes.chatContainer}>
        {directLine && <ReactWebChat directLine={directLine} store={store} />}
      </div>
    </Paper>
  )
}
