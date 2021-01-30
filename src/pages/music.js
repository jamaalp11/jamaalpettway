import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";
// import Slider from 'infinite-react-carousel';

import Layout from '../components/layout';
import SEO from "../components/seo"

const SimpleSlider = () => {
  var settings = {
    // dots: true,
    // infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1250,
    // centerMode: true,
    adaptiveHeight: true,
    // fade: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };
  return (
    <div className="my-3">
      <Slider {...settings}>
        {artworkNames.map((name, index) => (
          <div className="card shadow px-2 my-4 align-middle col-md-10" key={name}>
            <p className="card-text text-center font-weight-normal mt-2">
              {songTitles[index]}
            </p>
            <div className="pb-2">
              <ImageRef imgName={name} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// required for build to work with initial lack of window on server-rendering
// const windowGlobal = typeof window !== 'undefined' && window;

// const SimpleSlider = () => {
//   const [screenWidth, setScreenWidth] = useState(windowGlobal.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div style={wrapperStyles}>
//       <div style={leftFadeStyles}>
//         <div style={rightFadeStyles}>
//           <Slider
//             slidesToShow={screenSlides(screenWidth)}
//             autoplay
//             swipe={false}
//             pauseOnHover={false}
//             arrows={false}
//             autoplayScroll={1}
//             autoplaySpeed={3000}
//             duration={800}
//           >
//             {artworkNames.map((name, index) => (
//               <div className="card shadow px-2 my-4 align-middle col-md-10" key={name}>
//                 <p className="card-text text-center font-weight-normal mt-2">
//                   {songTitles[index]}
//                 </p>
//                 <div className="pb-2">
//                   <ImageRef imgName={name} />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// }

const MusicPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid mt-4 font-weight-light">
      <div className="jumbotron shadow">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="card shadow p-2">
              <iframe height="600" scrolling="no" frameBorder="no" allow="autoplay" title="genesis"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/787200789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>
          </div>
          <div className="col-lg-5 text-center mt-3">
            <h2>Genesis</h2>
            <p>Genesis was accomplished all in house.</p>
            <ul style={{ listStyle: 'none' }}>
              <li>1 Artist</li>
              <li>1 Producer</li>
              <li>1 Engineer</li>
              <li>1 Vocalist</li>
            </ul>
            <p>Genesis is the epitome of do it yourself.</p>
            In the beginning there was only GOD, 1 God
            <br />
            And I am Him and It is Me
            <br />
            May the Carnage Pursue
            <div
              className="col-md text-center mt-5 pt-3 font-weight-normal"
              style={{ fontSize: '0.8em' }}
            >
              Also available on:
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <ImageRef imgName="Spotify" />
              </div>
              <div className="col-md-12">
                <ImageRef imgName="AppleMusic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleSlider />
    </div>
  </Layout>
);

export default MusicPage;

const artworkNames = ['Gang', 'PowerUp', 'DigiDownload', 'Tekno', 'SoufCityAngels'];
const songTitles = ['30/50/60', 'Power Up', 'Digi Download', 'Tekno', 'Souf City Angels'];

const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      Gang: file(relativePath: {eq: "305060.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
    }
  }
      PowerUp: file(relativePath: {eq: "Power Up.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
    }
  }
      DigiDownload: file(relativePath: {eq: "Digi Download.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
    }
  }
      Tekno: file(relativePath: {eq: "Tekno.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
    }
  }
      SoufCityAngels: file(relativePath: {eq: "Souf City Angels.jpg" }) {
      childImageSharp {
    fluid(maxWidth: 200, maxHeight: 200) {
      ...GatsbyImageSharpFluid
    }
    }
  }
      Spotify: file(relativePath: {eq: "spotify.png" }) {
      childImageSharp {
    fixed(width: 132, height: 50) {
      ...GatsbyImageSharpFixed
    }
    }
  }
      AppleMusic: file(relativePath: {eq: "apple-music.png" }) {
      childImageSharp {
    fixed(width: 132, height: 50) {
      ...GatsbyImageSharpFixed
    }
    }
  }
}
`);

  return (
    <Img
      fixed={data[imgName].childImageSharp.fixed ? data[imgName].childImageSharp.fixed : null}
      fluid={data[imgName].childImageSharp.fluid ? data[imgName].childImageSharp.fluid : null}
      alt={`${imgName}-art`}
      className={!['AppleMusic', 'Spotify'].includes(imgName) ? 'shadow-lg' : ''}
    />
  );
};

ImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
};


// const wrapperStyles = {
//   margin: '80px 0 80px',
//   gridTemplateRows: '.5fr 1.5fr',
//   gridTemplateColumns: '1fr',
// }

// const leftFadeStyles = {
//   gridRow: 2,
//   height: 'auto',
//   WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
//   maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
//   width: '100%',
// }

// const rightFadeStyles = {
//   gridRow: 2,
//   height: 'auto',
//   WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
//   maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
//   width: '100%',
// }


// const screenSlides = (width) => {
//   if (width >= 1440) return 5;
//   else if (width >= 755) return 3;
//   return 1;
// };