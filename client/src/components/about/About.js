import React from "react";
import "./About.css";
// import profileimg2 from "../../assets/profile2.png";
import profileimg2 from "../../assets/programmer.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    duration: 1200,
  });

  return (
    <div id="about-section">
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-header" data-aos="fade-down">
            <h1>ABOUT ME</h1>
          </div>
          <div className="about-content">
            <div className="about-p" data-aos="fade-up">
              <hr className="about-hr"></hr>
              <p>
                I am a React.Js and Solidity Developer. Currently I am working
                as a React.Js and Solidity Developer for TrioKos since
                01/May/2022, developing and deploying high-security smart
                contracts on Ethereum Mainnet, as well as building front-end
                interfaces with React JS. I have worked closely with
                cross-functional teams, including product managers, designers,
                and other developers, to ensure the timely delivery of
                high-quality software. I developed and maintained web
                applications using React JS, as well as designed and implemented
                smart contracts using Solidity. I have also worked with Backend
                Node.Js. I attended a few Trainings like: Solidity Training,
                Full Stack Developer Training. My main skills are: Solidity and
                ReactJs. Highly motivated Developer, flexibile and team working
                describe me as a Developer. My aim is to level up my career and
                stay motivated. I can work well under pressure and I can adapt
                very well with any team.
              </p>
            </div>
            <div className="about-img" data-aos="zoom-out-down">
              <img src={profileimg2} alt="/" />
            </div>
          </div>
        </div>
        <hr className="hr-row-big" id="services-section"></hr>
      </div>
    </div>
  );
};

export default About;
