import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo"

const VideoPage = () => (
  <Layout>
    <SEO title="Videos" />
    <div className="container-fluid mt-4 font-weight-light">
      <div className="row align-items-center">
        <VideoCard
          title="Presented by Big Floyd an Art Experience"
          alt="big-floyd"
          src="https://www.youtube.com/embed/Ezh55454W2A"
        />
        <VideoCard
          title="Dear Black Quilt a Torturous Art"
          alt="dear-black-quilts"
          src="https://www.youtube.com/embed/AgAINpjetk4"
        />
      </div>
    </div>
  </Layout>
);

export default VideoPage;

const VideoCard = ({ title, src, alt, width = 560, height = 315 }) => (
  <div className="col-lg-6">
    <div className="card shadow p-2 mb-4 align-items-center">
      <div className="card-body">
        <p className="card-text text-center font-weight-normal">
          {title}
        </p>
      </div>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="no"
        height={height}
        width={width}
        src={src}
        title={alt}
      />
    </div>
  </div>
);
