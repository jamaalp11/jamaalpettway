import React from 'react';

// relative imports
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container-fluid mt-4">
        <div className="jumbotron shadow" id="highlight-box">
          <form action="https://app.99inbound.com/api/e/S5__um9q" method="POST" target="_blank">
            <label htmlFor="email" style={{ marginTop: '-1em' }}>
              <h4>Email</h4>
            </label>
            <input type="text" id="fname" name="email" placeholder="Enter email.." />
            <label htmlFor="lname">
              <h4 className="mt-3">Title</h4>
            </label>
            <input type="text" id="lname" name="title" placeholder="Subject title.." />
            <label htmlFor="subject">
              <h4 className="mt-3">Message</h4>
            </label>
            <textarea rows="5" cols="20" name="message" id="subject" placeholder="Enter message.." />
            <br />
            <br />
            <div className="col text-center">
              <input type="submit" value="Submit" name="submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
