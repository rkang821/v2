// src/components/sections/about.tsx
"use client";
import React from "react";
import About from "@/content/about.mdx";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <About />
    </section>
  );
}
