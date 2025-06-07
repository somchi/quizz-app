// ParticleBackground.tsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine); // loads all features
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // covers entire screen
        particles: {
          number: { value: 100 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
        },
        background: {
          color: "#0d0d0d", // optional background color
        },
      }}
    />
  );
};

export default ParticleBackground;
