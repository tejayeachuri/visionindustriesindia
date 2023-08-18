// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './ImageCarousel.css';

const images = [
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  ];

const ImageCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop className="custom-carousel" >
                <div>
                    <img src={useBaseUrl("/img/Image2.jpeg")} />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image3.jpeg")} alt="Image 3" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image4.jpeg")} alt="Image 4" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image5.jpeg")} alt="Image 5" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image6.jpeg")} alt="Image 6" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image7.jpeg")} alt="Image 7" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image8.jpeg")} alt="Image 8" />
                </div>
                <div>
                    <img src={useBaseUrl("/img/Image9.jpeg")} alt="Image 9" />
                </div>
        </Carousel>
    );
};

export default ImageCarousel;