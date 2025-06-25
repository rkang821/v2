//src/components/sections/experience.tsx
"use client";
import React from "react";
import ExperienceEntry from "@/components/shared/cards/experiencecard";
import experiences from "./experiencedata";
import { certifications } from "./certdata";
import CertCard from "@/components/shared/cards/certcard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-center">Work Experience</h2>
      <ExperienceEntry experiences={experiences} />
      <h3 className="text-center">Certifications</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 mt-4">
        {certifications.map((cert, idx) => (
          <CertCard key={idx} cert={cert} />
        ))}
      </ul>
    </section>
  );
}
