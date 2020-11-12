/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/resume.css';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="resume-container mt-4">
      <div id="resume-title" className="text-center">
        <br />
        D. JAMAAL PETTWAY
      <br />
      </div>
      <div className="resume-summary">
        Atlanta, GA
      <p>Email: jamaalp11@gmail.com/ jamaalp@comcast.net</p>
      </div>
      <hr id="horizontal-rule-main" />
      <div className="resume-heading">PROFESSIONAL SUMMARY</div>
      <hr id="horizontal-rule-minor" />
      <div className="resume-summary">I have outstanding communication skills, leadership abilities and a solid personality.
        I graduated from Georgia State University with a major in Design/Studio Art and a concentration in Textiles.
      </div>
      <hr id="horizontal-rule-main" />
      <div className="resume-heading">EXPERIENCE</div>
      <hr id="horizontal-rule-minor" />
      <div className="resume-bullet-title"><span className="underline">Jo-Ann Fabric and Craft Store:</span> 2017 to 2018</div>
      <div className="resume-text">
        <ul>
          <li>Team Member: Assisting customer with transaction, products and services</li>
          <li>250 Pavilion Pkwy, Fayetteville, GA 30214</li>
          <li>770-719-5257</li>
        </ul>
      </div>
      <div className="resume-bullet-title underline">Assistantships</div>
      <div className="resume-text">
        <ul>
          <li>Vetements 2016 SS</li>
          <li>Yves Saint Laurent 2016 FW, 2017 SS</li>
          <li>Duties: On set alterations to garments</li>
        </ul>
      </div>
      <div className="resume-bullet-title underline">Internships</div>
      <div className="resume-text">
        <ul>
          <li>ASAP- Atlanta Sewing & Pattern Making Services</li>
          <li>Myriam Belasse- Mentor</li>
          <li>Duties- Assisting with garment pattern construction</li>
        </ul>
      </div>
      <div className="resume-bullet-title underline">Skills</div>
      <div className="resume-text">
        <ul>
          <li>Garment and Clothing Pattern Making</li>
          <li>Garment and Clothing construction</li>
          <li>Sewing and garment alterations</li>
          <li>Textile manipulations</li>
          <li>Photoshop editing</li>
          <li>Microsoft Office 365</li>
          <li>Logic Pro X musical software</li>
          <li>English speaking</li>
        </ul>
      </div>
      <hr id="horizontal-rule-main" />
      <div className="resume-heading">EDUCATION</div>
      <hr id="horizontal-rule-minor" />
      <div className="resume-bullet-title">
        <span className="underline">
          Jonesboro High School- 7728 Mt Zion Blvd, Jonesboro, GA</span> 30236, (770) 473-2855</div>
      <div className="resume-text">
        <ul>
          <li>Graduated with a 3.4 Grade Point Average</li>
          <li>Earned the Hope Scholarship</li>
          <li>“Mr.Science” Award</li>
        </ul>
      </div>
      <div className="resume-bullet-title underline">Georgia State University- Atlanta, Ga 30302</div>
      <div className="resume-text">
        <ul>
          <li>Completion: Spring 2019</li>
          <li>A member of the Honors College</li>
          <li>Majoring in Studio Art/ Design with a concentration in Textiles</li>
          <li>Focusing on design and fashion</li>
        </ul>
      </div>
      <hr id="horizontal-rule-main" />
      <div className="resume-heading">COMMUNITY INVOLVEMENT</div>
      <hr id="horizontal-rule-minor" />
      <div className="resume-text">
        <ul>
          <li>Adopt-a-Highway</li>
          <li>Turkey Drives</li>
          <li>Toys for Tots</li>
          <li>Soup Kitchens</li>
          <li>Homeless Shelters</li>
          <li>Camp Counseling</li>
          <li>Volunteer Babysitting/ Pet sitting</li>
          <li>Senior Citizen Centers and Nursing Homes</li>
          <li>Meals on Wheels</li>
        </ul>
      </div>
    </div>
    <br />
    <div className="text-center">
      <a className="link" href="./documents/Resume.docx" download="Resume">Download Copy</a>
    </div>
  </Layout>
);

export default ResumePage;
