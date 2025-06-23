import React from "react";
import { ThemeSwitcherButton } from "@/components/shared/themeswitcherbutton";

export default function Header() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Rachel Kang
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Security Engineer
        </h2>
        <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
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

      <div className="theme-button-wrapper">
        <ThemeSwitcherButton />
      </div>
    </>
  );
}
