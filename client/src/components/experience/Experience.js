import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience-section">
      <div className="experience-wrapper">
        <div className="experience-container">
          <div className="experience-header" data-aos="fade-down">
            <h1>EXPERIENCE</h1>
          </div>
          <div className="experience-content">
            <div className="experience-bio">
              <div className="bio-header" data-aos="zoom-in">
                <h3>React.Js & Solidity Developer</h3>
                <div className="work-date" data-aos="zoom-in">
                  <h4>01/May/2022 - Present</h4>
                  <hr className="hr-row-work-date"></hr>
                </div>
              </div>
              <p className="bio-p" data-aos="zoom-in">
                Currently I am working as a React.Js and Solidity Developer for
                TrioKos since 01/May/2022, developing and deploying
                high-security smart contracts on Ethereum Mainnet, as well as
                building front-end interfaces with React JS.
              </p>
            </div>
            <div className="experience-responsibilities">
              <div className="responsibilities-header" data-aos="zoom-in">
                <h3>Responsibilities</h3>
                <hr className="hr-row-experience"></hr>
              </div>
              <div className="responsibilities-content">
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Responsible for development of new highly-responsive,
                    web-based user interface.
                  </p>
                </div>
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Implemented various screens for the front end using React.js
                    and used various predefined components from NPM (Node
                    Package Manager) and redux library.
                  </p>
                </div>
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Developing reusable components and APIs, and compiling them
                    into front-end libraries for future use.
                  </p>
                </div>

                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Translate UI/UX design wireframes to actual code.
                  </p>
                </div>

                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Develop and Deploy high-security smart contracts on Ethereum
                    Mainnet.
                  </p>
                </div>
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Audit Smart Contracts and Debug Smart Contracts to increase
                    security.
                  </p>
                </div>
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Using Hardhat to edit, compile, debug and deploy smart
                    contracts and dApps.
                  </p>
                </div>
                <div className="responsibilities-box">
                  <hr className="responsibilities-hr"></hr>
                  <p data-aos="zoom-in">
                    Using ethers.js and web3.js to interact front-end with
                    Ethereum Blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-row-big"></hr>
      </div>
    </div>
  );
};

export default Experience;
