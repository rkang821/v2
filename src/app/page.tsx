import React from "react";
<<<<<<< Updated upstream
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
//import Blog from "@/components/sections/blog";

export default function Page() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Footer />
      {/* <Blog /> */}
    </>
=======
import Layout from "./layout";

export default function Page() {
  return (
    <Layout>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Rachel Kang
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Security Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Security Professional. YouTube enthusiast.
          </p>
        </div>

        <nav className="hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a href="#about" className="text-slate-200 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-slate-200 hover:underline">
                Work
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-200 hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <h3 className="text-2xl font-bold text-slate-200">About</h3>
          <p className="mt-4 leading-normal">This is the about section.</p>
        </section>

        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <h3 className="text-2xl font-bold text-slate-200">Experiences</h3>
          <p className="mt-4 leading-normal">This is the experience section.</p>
        </section>

        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <h3 className="text-2xl font-bold text-slate-200">Projects</h3>
          <p className="mt-4 leading-normal">This is the projects section.</p>
        </section>
      </main>
    </Layout>
>>>>>>> Stashed changes
  );
}
