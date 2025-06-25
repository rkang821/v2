// src/components/sections/projects.tsx
"use client";
import React from "react";
import ProjectCards from "@/components/shared/cards/projectscard";
import projects from "./projectsdata";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-center">Projects</h2>
      <ProjectCards projects={projects} />
    </section>
  );
}
