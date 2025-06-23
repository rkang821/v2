import React from "react";
import { ThemeSwitcherButton } from "@/components/shared/themeswitcherbutton";

export default function Header() {
  return (
    <header
      className="w-full
        lg:sticky lg:top-0
        lg:h-screen lg:flex lg:flex-col lg:justify-between
        lg:w-[48%] lg:py-24"
    >
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
      <div className="mt-8 lg:mt-16">
        <ThemeSwitcherButton />
      </div>
    </header>
  );
}
