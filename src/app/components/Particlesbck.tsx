// "use client";

// import React, { useCallback } from "react";
// import { Particles } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/engine";

// import type { Engine } from "@tsparticles/engine";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadAll(engine);
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0">
//       <Particles
//         id="tsparticles"
//         particlesInit={particlesInit}
//         options={{
//           background: {
//             color: "#0d0d0d",
//           },
//           particles: {
//             number: { value: 80 },
//             color: { value: "#ffffff" },
//             shape: { type: "circle" },
//             opacity: { value: 0.5 },
//             size: { value: { min: 1, max: 5 } },
//             move: { enable: true, speed: 1 },
//             links: {
//               enable: true,
//               color: "#ffffff",
//               distance: 150,
//               opacity: 0.4,
//               width: 1,
//             },
//           },
//           interactivity: {
//             events: {
//               onClick: { enable: false },
//               onHover: { enable: false },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default ParticleBackground;
