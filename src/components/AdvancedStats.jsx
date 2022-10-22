import React from "react";
import Brand from "../images/icon-brand-recognition.svg";
import Details from "../images/icon-detailed-records.svg";
import Customizble from "../images/icon-fully-customizable.svg";

const AdvancedStats = () => {
  return (
    <div className="advanced">
      <div className="advanced-detalis">
        <div className="advanced-title">Advanced Statistics</div>
        <div className="advanced-subtext">
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card-1 card">
          <div className="card-image">
            <img src={Brand} alt="" />
          </div>
          <div className="card-title">Brand Recognition</div>
          <div className="card-subtext">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </div>
        </div>
        <div className="line1 line"></div>
        <div className="card-2 card">
          <div className="card-image">
            <img src={Details} alt="" />
          </div>
          <div className="card-title">Detailed Records</div>
          <div className="card-subtext">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="line2 line"></div>
        <div className="card-3 card">
          <div className="card-image">
            <img src={Customizble} alt="" />
          </div>
          <div className="card-title">Fully Customizable</div>
          <div className="card-subtext">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStats;
