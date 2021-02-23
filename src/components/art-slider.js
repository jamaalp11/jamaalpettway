// import React from "react";


// const ArtSlider = () => {

//   return (<React.Fragment />);
// }

// export default ArtSlider;

import React from 'react';
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import ArtImageRef from './art-image';

export default () => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={5}
    naturalSlideHeight={1000}
    style={{ backgroundColor: 'red', width: '100%', height: '100%', position: 'relative' }}
    isIntrinsicHeight
  >
    <Slider style={{ paddingTop: '2em' }}>
      <Slide tag="a" index={0}>
        <ArtImageRef imgName="Inslaved1" />
      </Slide>
      <Slide tag="a" index={1}>
        <ArtImageRef imgName="Inslaved2" />
      </Slide>
      <Slide tag="a" index={2}>
        <ArtImageRef imgName="Inslaved3" />
      </Slide>
      <Slide tag="a" index={3}>
        <ArtImageRef imgName="Inslaved4" />
      </Slide>
      <Slide tag="a" index={4}>
        <ArtImageRef imgName="GrafittiGreen" />
      </Slide>
    </Slider>
    <ButtonBack style={{ position: 'absolute', top: '30%', left: '5%' }}>
      {'<'}
    </ButtonBack>
    <ButtonNext style={{ position: 'absolute', top: '30%', right: '5%' }}>
      {'>'}
    </ButtonNext>
    <div className="row mx-0">
      <Dot slide={0} className="col-sm">
        <ArtImageRef imgName="GrafittiGreen" />
      </Dot>
      <Dot slide={1} className="col-sm">
        <ArtImageRef imgName="GrafittiGreen" />
      </Dot>
      <Dot slide={2} className="col-sm">
        <ArtImageRef imgName="GrafittiGreen" />
      </Dot>
      <Dot slide={3} className="col-sm">
        <ArtImageRef imgName="GrafittiGreen" />
      </Dot>
      <Dot slide={4} className="col-sm">
        <ArtImageRef imgName="GrafittiGreen" />
      </Dot>
    </div>
    {/* <DotGroup
      showAsSelectedForCurrentSlideOnly
      renderDots={(props) => {
        console.log(props);
        return (
          <ArtImageRef imgName="GrafittiGreen" {...props} />
        );
      }}
    > */}
  </CarouselProvider>
);