import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Toolbar = ({ changeLayout }) => {
  return (
    <div className="mt-5 mb-5" style={toolbarStyles}>
      <button
        type="button"
        onClick={() => changeLayout('collection')}
        className="button"
        style={layoutButtonStyles}
      >
        <ImageRef imgName="Collection" />
      </button>
      <button
        type="button"
        onClick={() => changeLayout('slide')}
        className="button"
        style={layoutButtonStyles}
      >
        <ImageRef imgName="Slide" />
      </button>
      <button
        type="button"
        onClick={() => changeLayout()}
        className="button"
        style={layoutButtonStyles}
      >
        <ImageRef imgName="Grid" />
      </button>
    </div>
  );
};

export default Toolbar;

Toolbar.propTypes = {
  changeLayout: PropTypes.func.isRequired,
};

const toolbarStyles = {
  display: 'inline-block',
  width: '100%',
}

const layoutButtonStyles = {

  borderRadius: '20px',
  marginTop: '0.25em',
  float: 'right',
}


const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      Grid: file(relativePath: {eq: "GridLayout.png" }) {
      childImageSharp {
      fixed(width: 30 height: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    Slide: file(relativePath: { eq: "SlideLayout.png" }) {
    childImageSharp {
      fixed(width: 30 height: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    Collection: file(relativePath: { eq: "CollectionLayout.png" }) {
    childImageSharp {
      fixed(width: 30 height: 30) {
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
    // className={imgName === 'MainPhoto' ? 'shadow-lg rounded' : 'shadow'}
    />);
};
