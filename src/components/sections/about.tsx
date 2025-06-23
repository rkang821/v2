// src/components/sections/AboutSection.tsx
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h3 className="text-2xl font-bold text-slate-200">About</h3>
      <p className="mt-4 leading-normal text-slate-200">
        This is the about section.
      </p>
    </section>
  );
}
