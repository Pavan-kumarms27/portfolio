import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/splash.css";

const greetings = [
  "Hello.",
  "Namaste.",
  "Konnichiwa.",
  "Bonjour.",
  "Hola.",
  "Welcome.",
];

function SplashScreen({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        // If we are currently on the SECOND to last word, the NEXT step is the last word ("Welcome.")
        if (prev === greetings.length - 2) {
          clearInterval(interval);

          // Trigger the final fade-out to align perfectly with the word rhythm
          setTimeout(() => {
            onFinish();
          }, 950); // Matches the exact reading interval of the other words
        }

        return prev + 1;
      });
    }, 950);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="splash"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Smoothly fades out the dark background
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={greetings[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}

export default SplashScreen;
