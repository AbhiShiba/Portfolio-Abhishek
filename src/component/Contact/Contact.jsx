import React from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import {AiFillGithub} from 'react-icons/ai'

export function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="contact-main">
        <div className="left-contact">
          <div className="email info">
            <span>
              <SiGmail style={{fontSize:"20px"}} />
            </span>
            <span className="info-details">shivarajabhishek@gmail.com</span>
          </div>

          <div className="phone info">
            <span>
              <FaMobileAlt style={{fontSize:"20px"}} />
            </span>
            <span className="info-details">+91 9108910308</span>
          </div>
        </div>
        <div className="right-contact">
          <div className="linkedIn info">
            <a
              href="https://www.linkedin.com/in/abhishek-shiba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo style={{fontSize:"20px"}} />
            </a>
            <span className="info-details">abhishek-shiba</span>
          </div>
          <div className="gitHub info">
            <a
              href="https://github.com/AbhiShiba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub style={{fontSize:"20px"}} />
            </a>
            <span className="info-details">AbhiShiba</span>
          </div>
        </div>
      </div>
    </div>
  );
}
