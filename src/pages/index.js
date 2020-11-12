import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid mt-4 font-weight-light">
      <div className="jumbotron shadow">
        <div className="col-sm-12 d-flex align-items-center">
          <div className="col-sm-6">
            <ImageRef imgName="MainPhoto" />
          </div>
          <div className="col-sm-6 text-justify">
            <h2 className="font-weight-normal">Bio</h2>
            Jamaal is a textile artist from Atlanta, Georgia. He attended Georgia State
            University where he obtained his BFA in Textiles. He is also apart of the Gee’s
            Bend Quilting guild from Boykin, Alabama. Jamaal uses garment construction,
            sculpture and other mediums and techniques to convey utopic visualizations as
            well as to combat and counter societal practices.
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          Jamaal Pettway is an artist; he does what he wants because he is an artist!
        </div>
      </div>
      <div className="col-sm-12 d-flex px-0">
        <div className="col-sm-7">
          <div className="card shadow p-2">
            <div className="card-body mb-3">
              <h2 className="card-text text-center font-weight-normal mb-4 mt-1">Artist Statement</h2>
              {statements.map(statement => (
                <p key={statement} className="text-justify">{statement}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card shadow p-2">
            <div className="card-body">
              <p className="card-text text-center font-weight-normal">
                Genesis Album - 2019
              </p>
            </div>
            <iframe height="600" scrolling="no" frameBorder="no" allow="autoplay" title="genesis"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/787200789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
          </div>
          <div className="col-sm-12 d-flex p-0 mt-2">
            <div className="card shadow col-sm-6 py-3 px-3 mr-2">
              <p className="card-text text-center font-weight-normal">
                Unbearable
              </p>
              <ImageRef imgName="Art1" />
            </div>
            <div className="card shadow col-sm-6 py-3 px-3">
              <p className="card-text text-center font-weight-normal">
                A Woman's Worth
              </p>
              <ImageRef imgName="Art2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout >
)

const statements = [
  `In my work, I contest the status quo of “life”. Through the use of garment construction, I make reference
       to specific eras, conventional societal standards and my own view of “Heaven on Earth”. I interact with
       thought of a utopian world and what that may intel. In turn I also describe what a dystopian world may
        intel. Both these notions fuel my work so that it may reflect on “what could be” and “what is”.
      `,
  `The process that I take when creating my work is detrimental for me. When I am
        producing works it is some what ritualistic and holy in a sense. All of the skills that I have
        attained come into play as if they are tools for a surgeon. The materials I use are also important. I
        vehemently identify as a textile artist and therefore the vast majority of my work uses textiles.
        My use of textiles and fabric starts with my family. I am a member of the Gee’s Bend Quilters
        Guild by blood relation and an innate enjoyment for sewing. My choice of material reflects my
        personal aesthetic and it also neglects it simultaneously.
      `,
  `In relation to my aesthetic I tend to incorporate fashion notions within my work. My love
        for fashion comes from experiencing a lack of. This is not necessarily my own lack of but my
        peers. I have bared witness to the ridiculing and the diminishing of a person’s self-esteem simply
        because of the clothes they were wearing. This act has lit a fire within that pushes me to confront
         the tormenting of others.
      `,
  `Periodically I sell my garments to high bidding buyers, while saving certain ones to
        sell to galleries and individuals who are not as affluent. The feeling that I got when I
        purchased my first expensive item was exhilarating. It was a pair of black and white Saint
        Laurent biker jeans from their Fall 2013 line. It was my first time feeling quality materials,
        impeccable construction and that higher fashion taste. This is something that I want everyone to
         feel at least once in their lifetime.
      `
];

export default IndexPage

const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      MainPhoto: file(relativePath: {eq: "Website-Photo-2.jpg" }) {
      childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    Art1: file(relativePath: { eq: "Close Bear-2.jpg" }) {
    childImageSharp {
      fixed(width: 200, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
    Art2: file(relativePath: { eq: "Grafitti Blue-2.jpg" }) {
    childImageSharp {
      fixed(width: 200, height: 150) {
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
      className={imgName === 'MainPhoto' ? 'shadow-lg rounded' : 'shadow'}
    />);
};