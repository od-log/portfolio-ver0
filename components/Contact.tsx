import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function Contact() {
  return (
    <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />
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
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact Me
          </h1>

          <p className="mt-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-transparent bg-transparent text-black dark:text-white flex items-center space-x-2"
            >
              <a
                href="mailto:delicatedevod@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
                data-speed="3"
                role="button"
              >
                <span>Mail</span>
              </a>
            </HoverBorderGradient>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
