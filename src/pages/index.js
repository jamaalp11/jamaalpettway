import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid mt-4 font-weight-light">
      <div className="jumbotron shadow mb-0">
        <div className="row align-items-center">
          <div className="col-md">
            <ImageRef imgName="MainPhoto" />
          </div>
          <div className="col-md text-justify">
            <h2 className="font-weight-normal mt-3">Bio</h2>
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
      <div className="row">
        <div className="col-lg-6 mt-5">
          <div className="card shadow p-1">
            <div className="card-body">
              <h3 className="card-text text-center font-weight-normal mb-3">Artist Statement</h3>
              {statements.map(statement => (
                <p key={statement} className="text-justify" style={{ lineHeight: '28px' }}>{statement}</p>
              ))}
            </div>
            <span style={{ marginTop: '-8px' }} />
          </div>
        </div>
        <div className="col-lg-6 mt-5">
          <VideoHighlightRow
            title="Presented by Big Floyd an Art Experience"
            alt="big-floyd"
            src="https://www.youtube.com/embed/Ezh55454W2A"
          />
          {/* {space here} */}
          <ArtHighlightRow
            firstTitle="Grafitti"
            secondTitle="Pyramid"
            firstImg="Art2"
            secondImg="Art1"
          />
          <div className="mt-4">
            <VideoHighlightRow
              title="Dear Black Quilt a Torturous Art"
              alt="dear-black-quilts"
              src="https://www.youtube.com/embed/AgAINpjetk4"
            />
          </div>
          {/* {space here} */}
          <ArtHighlightRow
            firstTitle="Hair Cube"
            secondTitle="Inslaved"
            firstImg="Art3"
            secondImg="Art4"
          />
        </div>
      </div>
    </div>
  </Layout >
)

export default IndexPage;

const ArtHighlightRow = ({ firstTitle, firstImg, secondTitle, secondImg }) => (
  <div className="row p-0">
    <div className="card shadow col-sm p-3 mt-0 mr-2 ml-3">
      <p className="card-text text-center font-weight-normal">
        {firstTitle}
      </p>
      <ImageRef imgName={firstImg} />
    </div>
    <div className="card shadow col-sm p-3 mt-0 ml-2 mr-3">
      <p className="card-text text-center font-weight-normal">
        {secondTitle}
      </p>
      <ImageRef imgName={secondImg} />
    </div>
  </div>
);

const VideoHighlightRow = ({ title, height = 315, src, alt }) => (
  <div className="card shadow px-2 mb-4">
    <div className="card-body">
      <p className="card-text text-center font-weight-normal">
        {title}
      </p>
    </div>
    <iframe height={height} src={src} frameBorder="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={alt} />
  </div>
);

const ImageRef = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      MainPhoto: file(relativePath: {eq: "Website-Home.jpg" }) {
      childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art1: file(relativePath: { eq: "Pyramid-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art2: file(relativePath: { eq: "GrafittiGreen-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art3: file(relativePath: { eq: "HairCube-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art4: file(relativePath: { eq: "Inslaved4.png" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art5: file(relativePath: { eq: "GrafittiBlue-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
    Art6: file(relativePath: { eq: "GrafittiRed-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 175, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`);

  return (
    <Img
      fluid={data[imgName].childImageSharp.fluid}
      alt={`${imgName}-photo`}
      className={imgName === 'MainPhoto' ? 'shadow-lg rounded' : 'shadow'}
    />);
};

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
  `Often times in the fashion industry expensive items are seen as more desirable. This notion leaves those who can not afford them in a rut and state of disdain. I want to convert the desires of expensive into rarity. While most expensive items are already ubiquitous there should be some items sold at more economical prices and its value simply come from it’s uniqueness alone. This would allow those who can not afford the pricier items a shot at obtaining a piece.`,
  `Periodically I sell my garments to high bidding buyers, while saving certain ones to
        sell to galleries and individuals who are not as affluent. The feeling that I got when I
        purchased my first expensive item was exhilarating. It was a pair of black and white Saint
        Laurent biker jeans from their Fall 2013 line. It was my first time feeling quality materials,
        impeccable construction and that higher fashion taste. This is something that I want everyone to
         feel at least once in their lifetime.
      `,
  `The human experience is truly like no other. It’s what fuels my rabid curiosity. The life we live comes with no instructions or directions on how to enjoy life; or if you’re even supposed to. Subsequent to my own existentialism, I do believe that it’s important to do what makes you happy. Helping people, being a voice for the marginalized and a resource for those in need is what enthralls me most!`,
  `Art is the age-old conversation starter. Conversations are what propels society forward.`,
];