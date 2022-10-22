import React from "react";
import Logo from "../images/logo1.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Shortly" style={{ cursor: "pointer" }} />
      </div>
      <div className="info">
        <div className="footer-freatures features">
          <ul className="list">
            <li className="list-links list-title">Features</li>
            <li className="list-links">Link Shortening</li>
            <li className="list-links">Branded Links</li>
            <li className="list-links">Analytics</li>
          </ul>
        </div>
        <div className="footer-resources resources">
          <ul className="list">
            <li className="list-links list-title">Resources</li>
            <li className="list-links">Blog</li>
            <li className="list-links">Developers</li>
            <li className="list-links">Support</li>
          </ul>
        </div>
        <div className="footer-company company">
          <ul className="list">
            <li className="list-links list-title">Company</li>
            <li className="list-links">About</li>
            <li className="list-links">Our Team</li>
            <li className="list-links">Careers</li>
            <li className="list-links">Contact</li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul className="list">
            <li className="list-links social">
              <FacebookIcon sx={{ fontSize: 30 }} />
            </li>
            <li className="list-links social">
              <TwitterIcon sx={{ fontSize: 30 }} />
            </li>
            <li className="list-links social">
              <PinterestIcon sx={{ fontSize: 30 }} />
            </li>
            <li className="list-links social">
              <InstagramIcon sx={{ fontSize: 30 }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
