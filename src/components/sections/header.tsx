// src/components/shared/header.tsx

import React from "react";
import { ThemeSwitcherButton } from "@/components/shared/themeswitcherbutton";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/shared/icons";

export default function Header() {
  return (
    <>
      <div>
        {/* h1, h2, p will pick up your global @layer base styles */}
        <h1>Rachel Kang</h1>
        <h2>Security Engineer</h2>
        <p className="hidden lg:block">
          Security Professional. YouTube enthusiast.
        </p>
      </div>

      <nav className="hidden lg:block">
        <ul className="mt-16 w-max">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Work</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      <div className="mt-4 flex justify-center space-x-6 lg:justify-start">
        <a
          href="https://github.com/rkang821"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <span className="sr-only">GitHub</span>
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/rkang821/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedInIcon className="h-6 w-6" />
        </a>
        <a
          href="mailto:kpxrachel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <span className="sr-only">Email</span>
          <MailIcon className="h-6 w-6" />
        </a>
      </div>

      <div className="theme-button-wrapper">
        <ThemeSwitcherButton />
      </div>
    </>
  );
}
