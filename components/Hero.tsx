import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Focused on User Experience
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Hi! I'm OD, a frontend Developer based in South Korea.
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;