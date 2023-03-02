import React from "react";
import "./Projects.css";
import Solidity from "../../assets/solidity.png";
// import Web from "../../assets/web.png"
import project1Img from "../../assets/project1copy.png";

const Projects = () => {
  return (
    <div id="projects-section">
      <div className="projects-wrapper">
        <div className="projects-container">
          <div className="projects-header">
            <h1 data-aos="zoom-in">PROJECTS</h1>
          </div>
          <div className="projects-content">
            <div className="projects-fields1" data-aos="zoom-in">
              <div className="projects-fields1-content">
                <h3 className="description-header">Peacock Warriors Website</h3>
                <p className="description-p">
                  React.Js, Node.Js, Javascript, Ethers.js
                </p>
                <a
                  href="https://peacockwarriors.com/"
                  alt="Peacock Warriors Project"
                  target="_blank"
                >
                  Go to Project
                </a>
              </div>
            </div>
            <div className="projects-fields1" data-aos="zoom-in">
              <div className="projects-fields1-content">
                <h3 className="description-header">
                  Peacock Warriors NFT Smart Contract
                </h3>
                <p className="description-p">Solidity, Hardhat</p>
                <a
                  href="https://etherscan.io/address/0x0b836c1cb3500ce94840e437ca1453f6973f4afc#code"
                  alt="Peacock Warriors Project Smart Contract"
                  target="_blank"
                >
                  Go to Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-row-big"></hr>
      </div>
    </div>
  );
};

export default Projects;
