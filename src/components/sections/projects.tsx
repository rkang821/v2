// src/components/sections/projects.tsx
"use client";
import React from "react";
import ProjectCards from "@/components/shared/projectcards";
import projects from "./project_data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ProjectCards projects={projects} />
    </section>
  );
}
