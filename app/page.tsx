"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
