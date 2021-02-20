/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import Toolbar from '../components/toolbar';

const artNames = ['Inslaved1', 'Inslaved2', 'Inslaved3', 'Inslaved4', 'GrafittiGreen', 'GrafittiBlue', 'GrafittiRed', 'GrafittiAll', 'Pyramid1', 'Pyramid2', 'Pyramid3', 'Pyramid4', 'HairCube1', 'HairCube2', 'HairCube3', 'HairCube4', 'BlueFace', 'Painting', 'Painting2'];

const artNodes = {
  Inslaved: (
    <Fragment>
      <h2>Inslaved</h2>
      Muslin Fabric<br />
      &<br />
      Cotton Pedals<br />
    </Fragment>
  ),
  Pyramid: (
    <Fragment>
      <h2>Pyramid</h2>
      Paper<br />
    </Fragment>
  ),
  HairCube: (
    <Fragment>
      <h2>Hair Cube</h2>
      Faux Fur<br />
      &<br />
      Wood<br />
    </Fragment>
  ),
  Grafitti: (
    <Fragment>
      <h2>Grafitti</h2>
      Spray Paint on Canvas<br />
    </Fragment>
  ),
  BlueFace: (
    <Fragment>
      <h2>Blue Face</h2>
      Acrylic<br />
    </Fragment>
  ),
  Painting: (
    <Fragment>
      <h2>Exercises</h2>
    </Fragment>
  ),
}

const ArtPage = () => {
  // const [layout, setLayout] = useState('grid');
  const layout = 'grid';

  return (
    <Layout>
      <SEO title="Art" />
      <div className="container-fluid mt-4">
        {/* <Toolbar
          changeLayout={(val) => {
            if (val === 'slide') return setLayout('slide');
            else if (val === 'collection') return setLayout('collection');
            return setLayout('grid');
          }}
        /> */}
        {layout === 'grid' && artNames.map(name => (
          <Fragment key={name}>
            <div className="row d-flex align-items-center">
              <div className="col-md">
                <ArtImageRef imgName={name} />
              </div>
              <div className="col-md align-items-center my-5">
                <div className="card shadow mx-5 py-5 text-center">
                  {artNodes[Object.keys(artNodes).find(artNode => name.includes(artNode))]}
                </div>
              </div>
            </div>
            <br /><br />
          </Fragment>
        ))}
        {/* {layout === 'slide' &&
          <BootstrapCarousel
            items={}
          />
      }
        {layout === 'collection' && } */}
      </div>
    </Layout>
  );
}

export default ArtPage;

const ArtImageRef = ({ imgName }) => {
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
    style={imageStyles}
    className="image-art"
  />;
};

ArtImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
};

const imageStyles = {
  color: 'rgb(200, 200, 200)',
  display: 'block',
  margin: 'auto',
}

// const BootstrapCarousel = ({ items }) => (
//   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={1000}>
//     <ol className="carousel-indicators">
//       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
//       <li data-target="#carouselExampleIndicators" data-slide-to="1" />
//       <li data-target="#carouselExampleIndicators" data-slide-to="2" />
//     </ol>
//     <div className="carousel-inner">
//       {items.map((item, index) => (
//         <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
//           {item}
//         </div>
//       ))}
//     </div>
//     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true" />
//       <span className="sr-only">Previous</span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true" />
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// );