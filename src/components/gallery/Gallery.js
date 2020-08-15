import { Box, Fab } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Modal from "@material-ui/core/Modal"
import Close from "@material-ui/icons/Close"
import LeftArrow from "@material-ui/icons/KeyboardArrowLeftOutlined"
import RightArrow from "@material-ui/icons/KeyboardArrowRightOutlined"
import { makeStyles } from "@material-ui/styles"
import React, { useEffect, useState } from "react"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100vw",
    maxWidth: "100vw",
    maxHeight: "100vh",
    height: "100vh",
  },
  image: {
    maxWidth: "inherit",
    maxHeight: "inherit",
  },

  fab: {
    position: "absolute",
  },
}))

const Gallery = ({ open, images, index, close }) => {
  const classes = useStyles()

  const [imageIndex, setImageIndex] = useState(index)

  useEffect(() => {
    setImageIndex(index)
  }, [index])

  const scrollRight = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(0)
    }
  }

  const scrollLeft = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    } else {
      setImageIndex(images.length - 1)
    }
  }

  return (
    <Modal
      open={open}
      onClose={close}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Fade in={open}>
        <Box
          className={classes.container}
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Fab
            color="secondary"
            aria-label="scroll"
            className={classes.fab}
            size="small"
            color="default"
            style={{ left: 8 }}
            onClick={scrollLeft}
          >
            <LeftArrow />
          </Fab>
          <img src={images[imageIndex]} className={classes.image} />
          <Fab
            color="secondary"
            aria-label="scroll"
            className={classes.fab}
            size="small"
            color="default"
            style={{ right: 8 }}
            onClick={scrollRight}
          >
            <RightArrow />
          </Fab>
          <Fab
            color="secondary"
            aria-label="scroll"
            className={classes.fab}
            size="small"
            color="default"
            style={{ right: 16, top: 16 }}
            onClick={close}
          >
            <Close />
          </Fab>
        </Box>
      </Fade>
    </Modal>
  )
}

export default Gallery
