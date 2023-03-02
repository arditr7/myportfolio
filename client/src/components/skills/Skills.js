import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills-section">
      <div className="skills-content">
        <div className="skills-header">
          <h1 data-aos="zoom-in">SKILLS</h1>
        </div>
        <div id="SkillBox" data-aos="zoom-in">
          <div class="SkillBar">
            <div id="Skill-HTML">
              <span class="Skill-Area ">Solidity</span>
              <span class="PercentText ">90%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-CSS">
              <span class="Skill-Area ">React.Js</span>
              <span class="PercentText ">80%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-jQuery">
              <span class="Skill-Area ">Javascript</span>
              <span class="PercentText ">80%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-JS">
              <span class="Skill-Area ">.NET</span>
              <span class="PercentText ">75%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-XML">
              <span class="Skill-Area ">Node.Js</span>
              <span class="PercentText ">70%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-C">
              <span class="Skill-Area ">Hardhat</span>
              <span class="PercentText ">80%</span>
            </div>
          </div>

          <div class="SkillBar">
            <div id="Skill-PHP">
              <span class="Skill-Area ">PHP </span>
              <span class="PercentText ">70%</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-row-big skills-hr"></hr>
    </div>
  );
};

export default Skills;
