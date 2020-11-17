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

const artNames = ['Inslaved1', 'Inslaved2', 'Inslaved3', 'Inslaved4', 'Unbearable1', 'Unbearable2', 'Unbearable3', 'BlueFace', 'Mask', 'Mask2', 'GrafittiBlue', 'GrafittiRed', 'Painting', 'Painting2'];

const artNodes = {
  Inslaved: (
    <Fragment>
      <h2>Inslaved</h2>
      Muslin Fabric<br />
      &<br />
      Cotton Pedals<br />
    </Fragment>
  ),
  Unbearable: (
    <Fragment>
      <h2>UnBearable</h2>
      Stuffed Bears<br />
    </Fragment>
  ),
  BlueFace: (
    <Fragment>
      <h2>Blue Face</h2>
      Acrylic<br />
    </Fragment>
  ),
  Mask: (
    <Fragment>
      <h2>Felt Face</h2>
      Roving<br />
    </Fragment>
  ),
  Grafitti: (
    <Fragment>
      <h2>A Woman's Worth</h2>
      Muslin and Dye<br />
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
        {/* {layout === 'slide' && }
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
          fluid(maxWidth: 458, maxHeight: 616) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved2: file(relativePath: { eq: "Picture2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 615) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved3: file(relativePath: { eq: "Picture3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 614) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Inslaved4: file(relativePath: { eq: "Picture4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 603) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Unbearable1: file(relativePath: { eq: "Front Bear.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 642) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Unbearable2: file(relativePath: { eq: "Side bear.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 641) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Unbearable3: file(relativePath: { eq: "Close Bear.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 327) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BlueFace: file(relativePath: { eq: "Blue Face.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mask: file(relativePath: { eq: "Mask.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mask2: file(relativePath: { eq: "IMG_0456.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 612) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiBlue: file(relativePath: { eq: "Grafitti Blue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrafittiRed: file(relativePath: { eq: "Grafitti Red.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 458) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting: file(relativePath: { eq: "Painting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 573) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Painting2: file(relativePath: { eq: "Painting 2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 458, maxHeight: 327) {
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