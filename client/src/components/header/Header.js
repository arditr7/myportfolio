import React, { useCallback } from "react";
import ProfileImg from "../../assets/programming.svg";
import "./Header.css";
import CV from "../../assets/cv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
  AOS.init({
    duration: 1200,
  });
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it’s the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {/* <ParticleBackground /> */}
      <div className="header-wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          height="10vh"
          position="absolute"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.2,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ABB8C3",
              },
              links: {
                color: "#ABB8C3",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <div className="header-upper" data-aos="fade-down">
          <img
            src={ProfileImg}
            alt="Profile Picture"
            className="header-img"
            data-aos="fade-in"
          />
          <hr className="hr-row"></hr>
        </div>
        <div className="header-down" data-aos="fade-up">
          <p className="header-p animate__animated animate__rubberBand animate__delay-2s">
            I'M <span className="header-down-name">ARDIT RAMADANI</span>
          </p>
          <p className="header-down-p animate__animated animate__bounceInUp animate__delay-1s">
            REACT.JS & SOLIDITY <br /> DEVELOPER
          </p>
          <button className="header-button">
            <a href={CV} download>
              DOWNLOAD CV
            </a>
          </button>
          <hr className="hr-row-big"></hr>
        </div>
      </div>
    </>
  );
};

export default Header;
