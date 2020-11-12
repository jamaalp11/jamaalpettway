import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid mt-4 font-weight-light">
      <div className="jumbotron shadow">
        <div className="col-sm-12 d-flex align-items-center">
          <div className="col-sm-7">
            <div className="card shadow p-2">
              <iframe height="600" scrolling="no" frameBorder="no" allow="autoplay" title="genesis"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/787200789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            </div>
          </div>
          <div className="col-sm-5 text-center">
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
              className="col-sm-12 text-center mt-5 pt-3 font-weight-normal"
              style={{ fontSize: '0.8em' }}
            >
              Also available on:
            </div>
            <div className="mt-3 col-sm-12 d-flex">
              <div className="col-sm-6 text-right">
                <ImageRef imgName="Spotify" />
              </div>
              <div className="col-sm-6 text-left">
                <ImageRef imgName="AppleMusic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 d-flex mt-3">
        {artworkNames.map((name, index) => (
          <div className=" card shadow px-2 mx-2 align-middle" key={name}>
            <p className="card-text text-center font-weight-normal mt-2">
              {songTitles[index]}
            </p>
            <div className="pb-2">
              <ImageRef imgName={name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default MusicPage;

const artworkNames = ['Gang', 'PowerUp', 'DigiDownload', 'Tekno', 'SoufCityAngels'];
const songTitles = ['30/50/60', 'Power Up', 'Digi Download', 'Tekno', 'Souf City Angels'];

const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
    Gang: file(relativePath: { eq: "305060.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      PowerUp: file(relativePath: { eq: "Power Up.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      DigiDownload: file(relativePath: { eq: "Digi Download.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Tekno: file(relativePath: { eq: "Tekno.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      SoufCityAngels: file(relativePath: { eq: "Souf City Angels.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Spotify: file(relativePath: { eq: "spotify.png" }) {
        childImageSharp {
          fixed(width: 132, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      AppleMusic: file(relativePath: { eq: "apple-music.png" }) {
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
      fixed={data[imgName].childImageSharp.fixed}
      alt={`${imgName}-art`}
      className={!['AppleMusic', 'Spotify'].includes(imgName) ? 'shadow-lg' : ''}
    />
  );
};

ImageRef.propTypes = {
  imgName: PropTypes.string.isRequired,
};

