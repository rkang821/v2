//src/components/sections/experience.tsx
"use client";
import React from "react";
import ExperienceEntry from "@/components/shared/cards";
import experiences from "./experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ExperienceEntry experiences={experiences} />

      <a
        href="/documents/RK_Resume2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        See Resume Here
      </a>
    </section>
  );
}
