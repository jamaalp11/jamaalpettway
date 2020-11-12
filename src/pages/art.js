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
            <div className="col-sm-12 align-vert wrap">
              <div className="col-sm-6">
                <ArtImageRef imgName={name} />
              </div>
              <div className="col-sm-6 text-center">
                <div className="card shadow mx-5 py-5">
                  {artNodes[Object.keys(artNodes).find(artNode => name.includes(artNode))]}
                </div>
              </div>
            </div>
            <br /><br />
          </Fragment>
        ))}
        {layout === 'slide' &&
          <div className="carousel slide" dataRide="carousel">
            <div className="carousel-inner">
              {artNames.map((name, index) => (
                <div className={`carousel-item ${index === 0 && 'active'}`}>
                  <div className="d-block w-100">
                    <ArtImageRef imgName={name} />
                  </div>
                  {/* <div className="col-sm-6 text-center">
                    {artNodes[Object.keys(artNodes).find(artNode => name.includes(artNode))]}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        }
        {layout === 'collection' && artNames.map(name => (
          <Fragment key={name}>
            <div className="col-sm-12 align-vert wrap">
              <div className="col-sm-6">
                <ArtImageRef imgName={name} />
              </div>
              <div className="col-sm-6 text-center" style={{ marginLeft: '3em' }}>
                {artNodes[Object.keys(artNodes).find(artNode => name.includes(artNode))]}
              </div>
            </div>
            <br /><br />
          </Fragment>
        ))}
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
          fixed(width: 458, height: 616) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Inslaved2: file(relativePath: { eq: "Picture2.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 615) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Inslaved3: file(relativePath: { eq: "Picture3.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 614) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Inslaved4: file(relativePath: { eq: "Picture4.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 603) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Unbearable1: file(relativePath: { eq: "Front Bear.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 642) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Unbearable2: file(relativePath: { eq: "Side bear.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 641) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Unbearable3: file(relativePath: { eq: "Close Bear.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 327) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      BlueFace: file(relativePath: { eq: "Blue Face.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 458) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Mask: file(relativePath: { eq: "Mask.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 458) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Mask2: file(relativePath: { eq: "IMG_0456.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 612) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      GrafittiBlue: file(relativePath: { eq: "Grafitti Blue.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 458) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      GrafittiRed: file(relativePath: { eq: "Grafitti Red.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 458) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Painting: file(relativePath: { eq: "Painting.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 573) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Painting2: file(relativePath: { eq: "Painting 2.jpg" }) {
        childImageSharp {
          fixed(width: 458, height: 327) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img
    fixed={data[imgName].childImageSharp.fixed}
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
  float: 'left',
  // minWidth: '100%',
  // maxWidth: '100 %',
  // margin: '2%',
  verticalAlign: 'middle',
  textAlign: 'center',
}