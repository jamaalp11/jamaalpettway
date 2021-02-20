import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// relative imports 
import ThemeButton from './dark-mode-toggle';
// import downloadFile from '../docs/cv.docx';

const getClasses = (path, item) => path === item ? 'nav-item active' : 'nav-item';

const Header = () => {
  const { pathname } = useLocation();

  const navItemStyles = {
    width: '110px',
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <h4 className="nav-item" style={{ marginTop: '-0.1em' }}>
        <Link to="/" className="link">
          Jamaal <span className="highlight">Pettway</span>
        </Link>
      </h4>
      {/* <div className="nav-item" id="text" style={{ marginTop: '-0.5em', float: "right" }}>
        <ThemeButton />
      </div> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon .custom-navbar-toggler"></span>
      </button>
      <div className="collapse navbar-collapse pt-1" id="navbarSupportedContent">
        <div className="navbar-nav mr-auto">
          <li className={`${getClasses(pathname, '/')}`} style={navItemStyles}>
            <Link className="nav-link text-center" to="/" id="text">Home</Link>
          </li>
          <li className={getClasses(pathname, '/music')} style={navItemStyles}>
            <Link className="nav-link text-center text" to="/music" id="text">Music</Link>
          </li>
          <li className={getClasses(pathname, '/art')} style={navItemStyles}>
            <Link className="nav-link text-center" to="/art" id="text">Art</Link>
          </li>
        </div>
        <div className="navbar-nav">
          <li className="nav-item" style={navItemStyles}>
            <ResumeDownload />
            {/* <a href={downloadFile} className="nav-link text-center" id="text" download>CV</a> */}
          </li>
          <li className={getClasses(pathname, '/contact')} id="text" style={navItemStyles}>
            <Link className="nav-link text-center" to="/contact" id="text">Contact</Link>
          </li>
        </div>
      </div>
      <div id="text" style={{ marginTop: '-0.75em' }}>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Header;


const ResumeDownload = () => {
  const data = useStaticQuery(graphql`
    query DocQuery {
      file(relativePath: { eq: "cv.docx" }) {
        publicURL
        name
    }
  }`
  );

  return <a href={data.file.publicURL} className="nav-link text-center" id="text" download>CV</a>
};
