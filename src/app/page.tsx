import React from "react";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
// import Blog from "@/components/sections/blog";

export default function Page() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Footer />
      {/* <Blog /> */}
    </>
  );
}
