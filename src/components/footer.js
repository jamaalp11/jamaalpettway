import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  return (
    <footer style={{
      marginTop: '4em',
    }}>
      <div className="navbar-nav mr-auto mb-0 col-sm-12">
        <div className="col-sm-12">
          <ul>
            <li className="nav-item">
              <a
                href="https://www.youtube.com/watch?v=oa-ANf6_p_c&list=OLAK5uy_kSdzESLcyujuOoXwU62cTRt-prAFjTr-c"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageRef imgName="Youtube" />
                <span style={{ paddingTop: '1em' }}>Youtube</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/Jamaalxxxx"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <ImageRef imgName="Twitter" />
                  Twitter
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com/maalypython/?hl=en"
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageRef imgName="Instagram" />
                Instagram
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;


const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
    Youtube: file(relativePath: { eq: "youtube.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data[imgName].childImageSharp.fixed}
      alt={`${imgName}-art`}
      style={{ marginRight: '0.5em' }}
    />
  );
};

ImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
};


