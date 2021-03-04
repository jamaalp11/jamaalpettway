// absolute imports
import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  Dot,
} from 'pure-react-carousel';
import 'react-medium-image-zoom/dist/styles.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

// relative imports
import ArtImageRef from './art-image';
import SVG from './svg-icon';
import '../styles/zoom.css';

const ArtSlider = ({ images, visibleSlides }) => (
  <CarouselProvider
    infinite
    isIntrinsicHeight
    visibleSlides={visibleSlides}
    totalSlides={images.length}
  // naturalSlideHeight={300}
  // naturalSlideWidth={400}
  >
    <Slider className="slider-styles">
      {images.map((image, index) => (
        <Slide key={image} tag="div" index={index} className="slide-styles">
          {image === 'Intro' && (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="no"
              height={`100%`}
              width={`100%`}
              src="https://www.youtube.com/embed/AgAINpjetk4"
              title="dear-black-quilts"
            />
          )}
          {image !== 'Intro' && (
            <div className="slide-div-styles">
              <Zoom
                overlayBgColorStart="rgba(0,0,0,1)"
                overlayBgColorEnd="rgba(0,0,0,1)"
              >
                {image !== 'Intro' && <ArtImageRef imgName={image} imageStyles={slideZoomArtStyles} />}
              </Zoom>
            </div>
          )}
        </Slide>
      ))}
    </Slider>
    <ButtonBack className="image-gallery-icon image-gallery-right-nav back-button-styles">
      <SVG icon="left" viewBox="6 0 12 24" />
    </ButtonBack>
    <ButtonNext className="image-gallery-icon image-gallery-right-nav next-button-styles">
      <SVG icon="right" viewBox="6 0 12 24" />
    </ButtonNext>
    <div className="row mx-0">
      {images.map((image, index) => (
        <Dot key={image} slide={index} className="col-sm p-0 dot-styles">
          {image === 'Intro' && (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="no"
              height={`100%`}
              width={`100%`}
              src="https://www.youtube.com/embed/AgAINpjetk4"
              title="dear-black-quilts"
            />
          )}
          {image !== 'Intro' && <ArtImageRef imgName={image} imageStyles={dotArtStyles} noClassName />}
        </Dot>
      ))}
    </div>
  </CarouselProvider>
);

export default ArtSlider;

ArtSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleSlides: PropTypes.number,
};

ArtSlider.defaultProps = {
  visibleSlides: 1,
};


const slideZoomArtStyles = {
  color: 'rgb(200, 200, 200)',
  // display: 'block',
  // margin: 'auto',
  width: '100%',
  height: '100%',
};

const dotArtStyles = {
  display: 'block',
  color: 'rgb(200, 200, 200)',
  width: '100%',
  height: '100%',
  // objectFit: 'cover',
  // objectPosition: '-20% 0',

};
