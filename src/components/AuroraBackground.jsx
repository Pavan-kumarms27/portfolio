import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <div className="aurora">
      <motion.div
        className="blob blob1"
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob2"
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob3"
        animate={{
          x: [0, 80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default AuroraBackground;
