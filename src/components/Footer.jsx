import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaSkype } from "react-icons/fa6";
const Footer = () => {
  return (
  <footer>
  <div className="container">
    <div className="row-1">
      <div className="col-1">
        <h5>
          Let’s make <br />
          something <br />amazing together.
        </h5>
      </div>

      <div className="col-2">
        <h5>QUICK LINKS</h5>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Service">Service</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>

      <div className="col-3">
        <div className="add-wrapper">
          <h5>Address</h5>
          <p>
            1301, Skye Corporate Park, Plot No. 25, Scheme No. 78-II,
            AB Road, Indore, India.
          </p>
        </div>

        <div className="phone-wrapper">
          <h5>Phone</h5>
          <p>
            <a href="tel:+919171399990">+91 91713 99990</a>
          </p>
        </div>

        <div className="phone-wrapper">
          <h5>E-mail</h5>
          <p>
            <a href="mailto:hello@ashvinsharma.com">
              hello@ashvinsharma.com
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="row-2">
      <div className="col-1">
        <p>Start by saying hi</p>
      </div>

      <div className="col-2">
        <div className="social-wrapper">
          <a href="https://www.instagram.com/ashvin0731/" className="social-icon" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/ashvin.sharma.31" className="social-icon" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>

    <div className="row-3">
      <div className="col-1">
        <p>Copyright © 2026 Ashvin Sharma. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer