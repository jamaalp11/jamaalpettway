
import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ArtImageRef = ({ imgName, imageStyles, noClassName }) => {
  const data = useStaticQuery(graphql`
    query {
    Inslaved1: file(relativePath: { eq: "Inslaved1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1350, maxHeight: 1679, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved2: file(relativePath: { eq: "Inslaved2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1320, maxHeight: 1783, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved3: file(relativePath: { eq: "Inslaved3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1281, maxHeight: 1727, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved4: file(relativePath: { eq: "Inslaved4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1283, maxHeight: 1697, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiGreen2: file(relativePath: { eq: "GrafittiGreen-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3606, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiGreen4: file(relativePath: { eq: "GrafittiGreen-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3630, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiBlue: file(relativePath: { eq: "GrafittiBlue-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiRed: file(relativePath: { eq: "GrafittiRed-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiAll: file(relativePath: { eq: "GrafittiAll.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3024, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid1: file(relativePath: { eq: "Pyramid-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid2: file(relativePath: { eq: "Pyramid-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 2950, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid3: file(relativePath: { eq: "Pyramid-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 2969, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid4: file(relativePath: { eq: "Pyramid-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube1: file(relativePath: { eq: "HairCube-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3536, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube2: file(relativePath: { eq: "HairCube-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3024, maxHeight: 3033, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube3: file(relativePath: { eq: "HairCube-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3024, maxHeight: 3020, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube4: file(relativePath: { eq: "HairCube-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3501, maxHeight: 3024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlueFace: file(relativePath: { eq: "Blue Face.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1208, maxHeight: 1208, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting: file(relativePath: { eq: "Painting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting2: file(relativePath: { eq: "Painting 2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2100, maxHeight: 1500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlackQuiltF: file(relativePath: { eq: "db quilt pink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4032, maxHeight: 3204, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlackQuiltM: file(relativePath: { eq: "db quilt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3532, maxHeight: 2871, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img
    fluid={data[imgName].childImageSharp.fluid}
    alt={`${imgName}-art`}
    imgStyle={imageStyles}
    style={imageStyles}
  // className={!noClassName ? 'image-art' : null}
  />;
};

ArtImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
  imageStyles: PropTypes.object,
  noClassName: PropTypes.bool,
};

ArtImageRef.defaultProps = {
  imageStyles: null,
  noClassName: false,
};


export default ArtImageRef;