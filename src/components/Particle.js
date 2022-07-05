import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function Particle() {
  
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    // <Particles
    //   id="tsparticles"
    //   params={{
    //     particles: {
    //       number: {
    //         value: 200,
    //         density: {
    //           enable: true,
    //           value_area: 1500,
    //         },
    //       },
          
    //       onHover: {
    //         enable: true,
    //         mode: "repulse",
    //       },
    //       line_linked: {
    //         enable: false,
    //         opacity: 0.03,
    //       },
    //       move: {
    //         direction: "right",
    //         speed: 0.5,
    //       },
    //       size: {
    //         value: 1,
    //       },
    //       opacity: {
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.05,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onclick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //       },
    //       modes: {
    //         push: {
    //           particles_nb: 1,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }}
    // />


    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          "fullScreen": {
              "enable": true,
              "zIndex": 1
          },
          "fpsLimit": 120,
          "particles": {
              "number": {
                  "value": 60,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#ff0000",
                  "animation": {
                      "enable": true,
                      "speed": 10,
                      "sync": true
                  }
              },
              "opacity": {
                  "value": 0.05
              },
              "size": {
                  "value": {
                      "min": 0.1,
                      "max": 3
                  }
              },
              "links": {
                  "enable": true,
                  "distance": 100,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 3,
                  "direction": "none",
                  "outModes": {
                      "default": "out"
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onHover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                  "onClick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "quantity": 4
                  }
              }
          },
          "detectRetina": true,
        
      }
      }
        />
  );
}

export default Particle;
