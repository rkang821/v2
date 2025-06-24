//src/components/sections/footer.tsx
"use client";
import React from "react";
import Footer from "@/content/footer.mdx";

export default function FooterSection() {
  return (
    <section
      id="footer"
      className="mb-16 scroll-mt-16 md:mb-24 lg:pb-32 lg:mb-36 lg:scroll-mt-24"
    >
      <Footer />
    </section>
  );
}
