import React from 'react';
import useDarkMode from 'use-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <span
      style={{
        display: 'inline-block',
        width: '10%',
      }}
    >
      <button
        type="button"
        onClick={darkMode.toggle}
        className="toggle-button"
        style={{
          borderRadius: '20px',
          marginTop: '0.3em',
        }}
      >
        {darkMode.value ? <ImageRef imgName="Sun" /> : <ImageRef imgName="Moon" />}
      </button>
    </span>
  );
};

export default DarkModeToggle;



const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      Moon: file(relativePath: {eq: "Moon.png" }) {
      childImageSharp {
      fixed(width: 25) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    Sun: file(relativePath: { eq: "Sun.png" }) {
    childImageSharp {
      fixed(width: 25) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`);

  return (
    <Img
      fixed={data[imgName].childImageSharp.fixed}
      alt={`${imgName}-photo`}
    />);
};