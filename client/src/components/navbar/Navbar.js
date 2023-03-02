import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/arditLogo.png";
// import pdf from '../../assets/Whitepaper.pdf';
import { BsLinkedin } from "react-icons/bs";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  function changer() {
    let check = document.getElementById("checkbox");
    let value = check.checked;
    if (value) {
      check.checked = false;
    } else {
      check.checked = true;
    }
  }
  return (
    <nav className="stroke">
      <div class="logo">
        <a href="#">
          <img src={Logo} alt="/" className="navLogo" />
        </a>
      </div>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" id="icon">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <ul id="ul-nav">
        <li>
          <a href="#" onClick={changer}>
            Home
          </a>
        </li>
        <li>
          <a href="#services-section" onClick={changer}>
            Services
          </a>
        </li>
        <li>
          <a href="#experience-section" onClick={changer}>
            Experience
          </a>
        </li>
        <li>
          <a href="#skills-section" onClick={changer}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact-section" onClick={changer}>
            Contact
          </a>
        </li>
        <span className="row-responsive">
          {/* <li>
            <a
              href="https://discord.gg/49qwJxhFzm"
              className="iconsnav"
              target="_blank"
            >
              <Discord className="discordIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/peacockwarriors_nft/"
              className="iconsnav"
              target="_blank"
            >
              <Insta className="instaIcon" />
            </a>
          </li> */}
          <li>
            <a
              href="https://www.linkedin.com/in/ardit-ramadani-68989a235/"
              className="iconsnav"
              target="_blank"
              onClick={changer}
            >
              <BsLinkedin className="linkedinIcon" />
            </a>
          </li>{" "}
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
