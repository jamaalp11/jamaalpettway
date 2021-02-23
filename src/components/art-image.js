
import React from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ArtImageRef = ({ imgName, includeStyles }) => {
  const data = useStaticQuery(graphql`
    query {
    Inslaved1: file(relativePath: { eq: "Picture1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 616, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved2: file(relativePath: { eq: "Picture2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 615, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved3: file(relativePath: { eq: "Picture3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 614, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved4: file(relativePath: { eq: "Picture4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 603, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiGreen: file(relativePath: { eq: "GrafittiGreen-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiBlue: file(relativePath: { eq: "GrafittiBlue-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiRed: file(relativePath: { eq: "GrafittiRed-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiAll: file(relativePath: { eq: "GrafittiAll.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid1: file(relativePath: { eq: "Pyramid-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid2: file(relativePath: { eq: "Pyramid-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 335, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid3: file(relativePath: { eq: "Pyramid-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 337, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Pyramid4: file(relativePath: { eq: "Pyramid-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube1: file(relativePath: { eq: "HairCube-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube2: file(relativePath: { eq: "HairCube-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 491, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube3: file(relativePath: { eq: "HairCube-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 611, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HairCube4: file(relativePath: { eq: "HairCube-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlueFace: file(relativePath: { eq: "Blue Face.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting: file(relativePath: { eq: "Painting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 573, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting2: file(relativePath: { eq: "Painting 2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 327, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img
    fluid={data[imgName].childImageSharp.fluid}
    alt={`${imgName}-art`}
    style={includeStyles ? imageStyles : null}
    className="image-art"
  />;
};

ArtImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
  includeStyles: PropTypes.bool,
};

ArtImageRef.defaultProps = {
  includeStyles: true,
};

const imageStyles = {
  color: 'rgb(200, 200, 200)',
  display: 'block',
  margin: 'auto',
  maxWidth: '100px',
  maxHeight: '150px',
};

export default ArtImageRef;