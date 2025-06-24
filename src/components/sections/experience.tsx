//src/components/sections/experience.tsx
"use client";
import React from "react";
import Experience from "@/content/experience.mdx";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ol className="group/list">
        <div className="mt-4 leading-normal">
          <Experience />
        </div>
      </ol>
    </section>
  );
}
