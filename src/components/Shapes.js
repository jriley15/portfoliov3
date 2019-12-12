import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  shapes: {
    left: "-4%",
    bottom: "auto",
    background: "hsla(0,0%,100%,.1)",
  },
  shape1: {
    height: "150px",
    width: "150px",
    left: "-4%",
    bottom: "auto",
    background: "hsla(0,0%,100%,.1)",
    borderRadius: "50%",
    position: "absolute",

    //animation: "$hover 3s ease infinite"
  },
  shape2: {
    height: "50px",
    width: "50px",
    right: "4%",
    top: "10%",
    background: "hsla(0,0%,100%,.1)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape3: {
    height: "50px",
    width: "50px",
    right: "5.66666%",
    top: "280px",
    background: "hsla(0,0%,100%,.3)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape4: {
    height: "75px",
    width: "75px",
    right: "7%",
    top: "320px",
    background: "hsla(0,0%,100%,.15)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape5: {
    height: "100px",
    width: "100px",
    left: "41%",
    right: "auto",
    top: "73%",
    background: "hsla(0,0%,100%,.15)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape6: {
    height: "200px",
    width: "200px",
    left: "10%",
    right: "auto",
    top: "44%",
    background: "hsla(0,0%,100%,.04)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape7: {
    height: "50px",
    width: "50px",
    right: "36%",
    top: "15%",
    background: "hsla(0,0%,100%,.04)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape8: {
    height: "100px",
    width: "100px",
    right: "2%",
    bottom: "70px",
    background: "hsla(0,0%,100%,.2)",
    borderRadius: "50%",
    position: "absolute",
  },
  shape9: {
    height: "100px",
    width: "100px",
    left: "1%",
    bottom: "1%",
    right: "auto",
    background: "hsla(0,0%,100%,.1)",
    borderRadius: "50%",
    position: "absolute",
  },
}))

const Shapes = props => {
  const classes = useStyles()

  return (
    <>
      <span className={classes.shape1} />
      <span className={classes.shape2} />
      <span className={classes.shape3} />
      <span className={classes.shape4} />
      <span className={classes.shape5} />
      <span className={classes.shape6} />
      <span className={classes.shape7} />
      <span className={classes.shape8} />
      <span className={classes.shape9} />
    </>
  )
}

export default Shapes
