/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Fragment } from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArtSlider from '../components/art-slider';

const collectionRef = {
  BlackQuilt: ['Intro', 'BlackQuiltF', 'BlackQuiltM'],
  Grafitti: ['GrafittiGreen4', 'GrafittiGreen2', 'GrafittiBlue', 'GrafittiRed'],
  Pyramid: ['Pyramid1', 'Pyramid2', 'Pyramid3', 'Pyramid4'],
  HairCube: ['HairCube1', 'HairCube2', 'HairCube3', 'HairCube4'],
  Inslaved: ['Inslaved1', 'Inslaved2', 'Inslaved3', 'Inslaved4'],
  Exercises: ['Painting', 'Painting2', 'BlueFace'],
}

const collections = ['BlackQuilt', 'Grafitti', 'Pyramid', 'HairCube', 'Inslaved', 'Exercises'];

const ArtPage = () => {

  return (
    <Layout>
      <SEO title="Art" />
      <div className="container-fluid mt-4">
        <ArtHeaderSection />
        {collections.map((collection) => (
          <div key={collection} className="col-lg mt-5" id={collection}>
            <div className="card shadow p-1">
              <div className="card-body">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-7 order-lg-1 order-sm-2 p-0 art-container">
                    <ArtSlider
                      images={collectionRef[collection]}
                    />
                  </div>
                  <div className="col-lg-5 order-lg-2 order-sm-1 align-items-center">
                    <div className="mx-5 py-5 text-center">
                      {artNodes[collection]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ArtPage;


const ArtHeaderSection = () => (
  <div className="jumbotron shadow mb-0">
    {/* <div className="row align-items-center">
      <div className="col-md text-justify">
        <h2 className="font-weight-normal text-center">Jamaal Pettway the Artist</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta et tellus eu consequat. Morbi vulputate leo nisi, eu laoreet lectus vehicula quis. Pellentesque ut eros suscipit, efficitur nunc in, tincidunt ante. In a elementum ipsum. Integer vel quam ligula. Phasellus non ex lorem. Proin id lectus porta, consectetur lectus eu, dictum erat. Duis varius augue nisl, sed lacinia tellus varius id. Nulla nulla elit, sodales eget nisi non, viverra varius dui. Etiam tincidunt diam eu mi gravida viverra.
          </div>
    </div>
    <hr className="my-4" /> */}
    <h2 className="font-weight-normal text-center mb-4">Collections</h2>
    <div className="text-center row d-flex">
      <div className="text-center col-md">
        <a href="#BlackQuilt" className="link">Dear Black Quilts</a>
      </div>
      <div className="text-center col-md">
        <a href="#Grafitti" className="link">Grafitti</a>
      </div>
      <div className="text-center col-md">
        <a href="#Pyramid" className="link">Pyramid</a>
      </div>
      <div className="text-center col-md">
        <a href="#HairCube" className="link">Hair Cube</a>
      </div>
      <div className="text-center col-md">
        <a href="#Inslaved" className="link">Inslaved</a>
      </div>
      <div className="text-center col-md">
        <a href="#Paintings" className="link">Paintings</a>
      </div>
    </div>
  </div>
);

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
  BlackQuilt: (
    <Fragment>
      <h2>Dear Black Quilts</h2>
      Cotton Fabric<br />
      &<br />
      Painted Ink<br />
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
  Exercises: (
    <Fragment>
      <h2>Paintings</h2>
      Various Materials<br />
    </Fragment>
  ),
};

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// import React, { Fragment } from "react"
// import PropTypes from "prop-types"
// import Img from 'gatsby-image';
// import { useStaticQuery, graphql } from 'gatsby';
// // import Zoom from 'react-medium-image-zoom';

// import Layout from '../components/layout';
// import SEO from '../components/seo';
// // import Toolbar from '../components/toolbar';

// const artNames = ['BlackQuiltF', 'BlackQuiltM', 'GrafittiGreenFull', 'GrafittiGreen', 'GrafittiBlue', 'GrafittiRed', 'GrafittiAll', 'Pyramid1', 'Pyramid2', 'Pyramid3', 'Pyramid4', 'HairCube1', 'HairCube2', 'HairCube3', 'HairCube4', 'Inslaved1', 'Inslaved2', 'Inslaved3', 'Inslaved4', 'BlueFace', 'Painting', 'Painting2'];

// const artNodes = {
//   Inslaved: (
//     <Fragment>
//       <h2>Inslaved</h2>
//       Muslin Fabric<br />
//       &<br />
//       Cotton Pedals<br />
//     </Fragment>
//   ),
//   Pyramid: (
//     <Fragment>
//       <h2>Pyramid</h2>
//       Paper<br />
//     </Fragment>
//   ),
//   HairCube: (
//     <Fragment>
//       <h2>Hair Cube</h2>
//       Faux Fur<br />
//       &<br />
//       Wood<br />
//     </Fragment>
//   ),
//   Grafitti: (
//     <Fragment>
//       <h2>Grafitti</h2>
//       Spray Paint on Canvas<br />
//     </Fragment>
//   ),
//   BlackQuilt: (
//     <Fragment>
//       <h2>Dear Black Quilts</h2>
//       Cotton Fabric<br />
//       &<br />
//       Painted Ink<br />
//     </Fragment>
//   ),
//   BlueFace: (
//     <Fragment>
//       <h2>Blue Face</h2>
//       Acrylic<br />
//     </Fragment>
//   ),
//   Painting: (
//     <Fragment>
//       <h2>Exercises</h2>
//     </Fragment>
//   ),
// }

// const ArtPage = () => {
//   // const [layout, setLayout] = useState('grid');
//   const layout = 'grid';

//   return (
//     <Layout>
//       <SEO title="Art" />
//       <div className="container-fluid mt-4">
//         {/* <Toolbar
//           changeLayout={(val) => {
//             if (val === 'slide') return setLayout('slide');
//             else if (val === 'collection') return setLayout('collection');
//             return setLayout('grid');
//           }}
//         /> */}
//         {layout === 'grid' && artNames.map(name => (
//           <Fragment key={name}>
//             <div className="row d-flex align-items-center">
//               <div className="col-md">
//                 <ArtImageRef imgName={name} />
//               </div>
//               <div className="col-md align-items-center my-5">
//                 <div className="card shadow mx-5 py-5 text-center">
//                   {artNodes[Object.keys(artNodes).find(artNode => name.includes(artNode))]}
//                 </div>
//               </div>
//             </div>
//             <br /><br />
//           </Fragment>
//         ))}
//         {/* {layout === 'slide' &&
//           <BootstrapCarousel
//             items={}
//           />
//       }
//         {layout === 'collection' && } */}
//       </div>
//     </Layout>
//   );
// }

// export default ArtPage;

// const ArtImageRef = ({ imgName }) => {
//   const data = useStaticQuery(graphql`
//     query {
//     Inslaved1: file(relativePath: { eq: "Inslaved1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 616, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Inslaved2: file(relativePath: { eq: "Inslaved2.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 615, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Inslaved3: file(relativePath: { eq: "Inslaved3.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 614, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Inslaved4: file(relativePath: { eq: "Inslaved4.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 603, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       GrafittiGreenFull: file(relativePath: { eq: "GrafittiGreen-4.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 382, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       GrafittiGreen: file(relativePath: { eq: "GrafittiGreen-1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       GrafittiBlue: file(relativePath: { eq: "GrafittiBlue-1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       GrafittiRed: file(relativePath: { eq: "GrafittiRed-1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       GrafittiAll: file(relativePath: { eq: "GrafittiAll.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 458, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Pyramid1: file(relativePath: { eq: "Pyramid-1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Pyramid2: file(relativePath: { eq: "Pyramid-2.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 335, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Pyramid3: file(relativePath: { eq: "Pyramid-3.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 337, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Pyramid4: file(relativePath: { eq: "Pyramid-4.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       HairCube1: file(relativePath: { eq: "HairCube-1.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       HairCube2: file(relativePath: { eq: "HairCube-2.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 491, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       HairCube3: file(relativePath: { eq: "HairCube-3.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 611, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       HairCube4: file(relativePath: { eq: "HairCube-4.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       BlueFace: file(relativePath: { eq: "Blue Face.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 458, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Painting: file(relativePath: { eq: "Painting.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 573, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       Painting2: file(relativePath: { eq: "Painting 2.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 327, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       BlackQuiltF: file(relativePath: { eq: "db quilt pink.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 344, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       BlackQuiltM: file(relativePath: { eq: "db quilt.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 458, maxHeight: 372, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);

//   return <Img
//     fluid={data[imgName].childImageSharp.fluid}
//     alt={`${imgName}-art`}
//     style={imageStyles}
//     className="image-art"
//   />;
// };

// ArtImageRef.propTypes = {
//   imgName: PropTypes.string.isRequired,
// };

// const imageStyles = {
//   color: 'rgb(200, 200, 200)',
//   display: 'block',
//   margin: 'auto',
// }

// // const BootstrapCarousel = ({ items }) => (
// //   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={1000}>
// //     <ol className="carousel-indicators">
// //       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
// //       <li data-target="#carouselExampleIndicators" data-slide-to="1" />
// //       <li data-target="#carouselExampleIndicators" data-slide-to="2" />
// //     </ol>
// //     <div className="carousel-inner">
// //       {items.map((item, index) => (
// //         <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
// //           {item}
// //         </div>
// //       ))}
// //     </div>
// //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
// //       <span className="carousel-control-prev-icon" aria-hidden="true" />
// //       <span className="sr-only">Previous</span>
// //     </a>
// //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
// //       <span className="carousel-control-next-icon" aria-hidden="true" />
// //       <span className="sr-only">Next</span>
// //     </a>
// //   </div>
// // );