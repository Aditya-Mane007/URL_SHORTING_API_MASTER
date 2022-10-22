import React, { useState } from "react";
import Logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WorkingSVG from "../images/illustration-working.svg";

const Home = () => {
  const [isClosed, setIsClosed] = useState(!false);
  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Shortly" />
        </div>
        <div className="navbar">
          <div className="nav-links">
            <div className="navlink">Features</div>
            <div className="navlink">Pricing</div>
            <div className="navlink">Resources</div>
          </div>
          <div className="loginSignup">
            <button className="btn">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>
        <div
          className="burger"
          value={isClosed}
          onClick={() => {
            setIsClosed(!isClosed);
            if (isClosed) {
              document.querySelector(".navbar").style.display = "block";
            } else {
              document.querySelector(".navbar").style.display = "none";
            }
          }}
        >
          {isClosed ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
      <div className="info">
        <div className="info-details">
          <div className="title">More than just shorter links</div>
          <div className="subtext">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className="getStartedbtn">Get Started</button>
        </div>
        <div className="info-image">
          <img src={WorkingSVG} alt="Working Women" />
        </div>
      </div>
    </div>
  );
};

export default Home;
