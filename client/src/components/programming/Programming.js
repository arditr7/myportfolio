import React from "react";
import "./Programming.css";
// import Solidity from "../../assets/solidity.png";
import Solidity from "../../assets/solidity.svg";
// import Web from "../../assets/web.png";
import Web from "../../assets/reactjs.svg";
// import Reactimg from "../../assets/react.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Programming = () => {
  return (
    <div id="programming-section">
      <div className="programming-wrapper">
        <div className="programming-container">
          <div className="programming-header">
            <h1 data-aos="zoom-in-down">WHAT I DO</h1>
          </div>
          <div className="programming-content">
            <div className="language-fields">
              <img
                src={Solidity}
                alt="/"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <p
                className="language-h"
                data-aos="flip-down"
                data-aos-duration="1700"
              >
                SOLIDITY DEVELOPER
              </p>
              <p
                className="language-p"
                data-aos="flip-up"
                data-aos-duration="1700"
              >
                Smart Contracts, DAPPs, Hardhat, Ether.js, NFT, Blockchain.
              </p>
            </div>
            <div className="language-fields">
              <img
                src={Web}
                alt="/"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <p
                className="language-h"
                data-aos="flip-down"
                data-aos-duration="1700"
              >
                REACT DEVELOPER
              </p>
              <p
                className="language-p"
                data-aos="flip-up"
                data-aos-duration="1700"
              >
                ReactJs, .NET, NodeJs, Javascript, NextJs
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-row-big"></hr>
      </div>
    </div>
  );
};

export default Programming;
