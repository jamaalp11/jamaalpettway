import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
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
    </div>
  </Layout>
);

export default MusicPage;


const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
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



