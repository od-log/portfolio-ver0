"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

const Skills = () => {
  const skills = ["Javascript", "ReactJS", "NextJS", "Typescript", "NodeJS"];
  const buttonClass =
    "bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-zinc-800 text-xl";

  return (
    <div className="relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg">
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
          I try to improve skillset
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] pt-8 gap-4">
          {skills.map((skill) => (
            <Button key={skill} borderRadius="1.75rem" className={buttonClass}>
              {skill}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
