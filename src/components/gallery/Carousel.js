import React, { useState, useEffect, useRef } from "react"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid, useMediaQuery, Box } from "@material-ui/core"
import LeftArrow from "@material-ui/icons/KeyboardArrowLeftOutlined"
import RightArrow from "@material-ui/icons/KeyboardArrowRightOutlined"
import IconButton from "@material-ui/core/IconButton"
import Dot from "@material-ui/icons/FiberManualRecord"
import Gallery from "./Gallery"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  sliderViewPort: {
    //maxWidth: "750px",

    overflow: "hidden",
    height: "calc(150px + " + theme.spacing(1) + "px)",
  },
  imageContainer: {
    //margin: 10,
    width: 230,
    height: 150,
    //marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",

    borderRadius: "3px",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    "&:hover": {
      transform: "scale(1.1)",
    },
    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  image: {
    width: "100%",
  },
  dot: {
    fontSize: 12,
  },
  arrow: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const Carousel = ({ images }) => {
  const classes = useStyles()

  //images always 200 width, centered in div

  //  viewport size
  // < sm 1 image
  // > sm 3 images?

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up("md"))
  const tablet = useMediaQuery(theme.breakpoints.up("sm"))

  const imagesToShow =
    images.length < 3 ? images.length : desktop ? 3 : tablet ? 2 : 1
  const viewPortWidth = imagesToShow * (210 + 8)
  const totalImageWidth = images.length * (210 + 8)
  const totalViewPorts = totalImageWidth / viewPortWidth

  const [viewIndex, setViewIndex] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    if (viewIndex > totalViewPorts) {
      setViewIndex(totalViewPorts - 1)
    }
  })

  const autoScrollerInverval = useRef(null)

  useEffect(() => {
    clearInterval(autoScrollerInverval.current)

    autoScrollerInverval.current = setInterval(() => {
      scrollRight()
    }, 5000)

    return () => {
      clearInterval(autoScrollerInverval.current)
    }
  }, [viewIndex])

  const openImage = index => () => {
    setGalleryIndex(index)
    setGalleryOpen(true)
  }

  const scrollRight = () => {
    if (viewIndex < totalViewPorts - 1) setViewIndex(viewIndex + 1)
    else setViewIndex(0)
  }

  const scrollLeft = () => {
    if (viewIndex > 0) setViewIndex(viewIndex - 1)
    else setViewIndex(totalViewPorts - 1)
  }

  let Dots = []
  for (let i = 0; i < totalViewPorts; i++) {
    Dots.push(
      <Dot
        key={i}
        className={classes.dot}
        style={{
          color: i === viewIndex ? "white" : "grey",
          marginLeft: 2,
          marginRight: 2,
        }}
      />
    )
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container justify="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <IconButton
            aria-label="Left"
            className={classes.arrow}
            onClick={scrollLeft}
          >
            <LeftArrow />
          </IconButton>
        </Grid>
        <Grid
          item
          className={classes.sliderViewPort}
          style={{ width: viewPortWidth }}
        >
          <Box
            display="flex"
            flexWrap="nowrap"
            flexDirection="row"
            style={{
              width: totalImageWidth,
              transform: `translateX(${viewIndex * -viewPortWidth}px)`,
              transition: "transform ease-in-out 0.45s",
            }}
          >
            {images.map((img, index) => (
              <div
                className={classes.imageContainer}
                onClick={openImage(index)}
                key={index}
              >
                <img src={img} className={classes.image} />
              </div>
            ))}
          </Box>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="Right"
            className={classes.arrow}
            onClick={scrollRight}
          >
            <RightArrow />
          </IconButton>
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="row" p={1}>
        {Dots}
      </Box>
      <Gallery
        open={galleryOpen}
        index={galleryIndex}
        images={images}
        close={() => setGalleryOpen(false)}
      />
    </Box>
  )

  //
}

export default Carousel
