import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Link from '@docusaurus/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, indigo, deepOrange, deepPurple, blue, lightBlue } from '@mui/material/colors';


const useStyles = makeStyles({
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',

  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    zIndex: 1,
    color: 'green',
  },
  title: {
    fontSize: '5em',
    marginBottom: '10px',
    fontFamily: 'Yatra-One',
    fontWeight: 'bold',
    color: 'blue'
  },
  subtitle: {
    fontSize: '2.5em',
    marginBottom: '20px',
    fontFamily: 'Yatra-One',
    fontWeight: 'bold',
    color: 'black'
  },
  customButton: {
    padding: '10px 20px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    textDecoration: 'none', // Add this to remove underline
  },
});

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
};

const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const data = [
  {
    image: "https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image3.jpeg",

  },
  {
    image: "https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image4.jpeg",

  },
  {
    image: "https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image5.jpeg",

  },
  {
    image: "https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image6.jpeg",

  },
];

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: 'none',
      fontFamily: 'Yatra-One',
      fontWeight: 'bold',
    },
    h2: {
      color: 'blue'
    },
    h4: {
      color: 'brown'
    }
  },
});


const ImageCarousel = ({ MoviesPath_Description_JSON }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <div className={classes.carouselContainer}>
        <div className={classes.contentContainer}>
          <Typography gutterBottom
            variant="h2"
          >
            VARAHI
          </Typography>
          <Typography gutterBottom variant="h4">
            Lets Enrich Life Together
          </Typography>
        </div>
        <Carousel
          data={data}
          time={5000}
          width="100vw"
          height="70vh"
          captionStyle={captionStyle}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
        />
      </div>
    </ThemeProvider>
  );
}

export default ImageCarousel;