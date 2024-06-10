import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <div className="relative flex flex-col min-h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
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
        <h3 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          My Experience
        </h3>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </motion.div>
    </div>
  );
}
export const projects = [
  {
    title: "3D Content Web Page Development",
    description: "Developed a 3D content web page using React and Three.js",
    link: "",
  },
  {
    title: "Personal News Content Service Development",
    description:
      "Contributed to the development of a personalized news content service as a frontend developer, utilizing React and Redux from initial planning to full-cycle operation.",
    link: "",
  },
  {
    title: "SI Development",
    description:
      "Worked on a call center project using Java, JavaScript, SQL, and jQuery.",
    link: "",
  },
  {
    title: "Data Analysis",
    description:
      "Analyzed big data for a call center using a company data analysis tool.",
    link: "",
  },
  {
    title: "",
    description: "",
    link: "",
  },
  {
    title: "Certificate",
    description:
      "Korea Information Processing Engineer(2020-11), SQLD(2019~2021)",
    link: "",
  },
];
