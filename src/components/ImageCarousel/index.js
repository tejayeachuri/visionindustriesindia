import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "react-multi-carousel/lib/styles.css";
import Link from '@docusaurus/Link';

const useStyles = makeStyles({
  captionStyle: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  slideNumberStyle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  carouselContainer: {
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 1,
    color: 'white',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  customButton: {
    padding: '10px 20px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
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
    image: "https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image2.jpeg",
  },
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

const ImageCarousel = ({ MoviesPath_Description_JSON }) => {
  const classes = useStyles();

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.title}>Vision Industries India</div>
        <div className={classes.subtitle}>Lets Enrich Life Together</div>
        <Link
          className={classes.customButton}
          to="/docs/intro">
          Explore More
        </Link>
      </div>
      <Carousel
        data={data}
        time={2000}
        width="100vw"
        height="60vh"
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
  );
}

export default ImageCarousel;