//src/components/shared/projectcards.tsx
import React from "react";

export interface ProjectMeta {
  organization: string;
  title: string;
  link?: string;
  secondaryLink?: string;
  tech?: string[];
}

export interface ProjectEntry {
  Component: React.ComponentType;
  meta: ProjectMeta;
}

interface ProjectCardsProps {
  projects: ProjectEntry[];
}

export default function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-0 gap-6">
      {projects.map(({ Component, meta }, index) => (
        <div key={index} className="project-card">
          <small className="block text-xs uppercase text-foreground">
            {meta.organization}
          </small>

          <h3 className="mt-1 text-lg font-semibold text-foreground">
            {meta.link ? (
              <a
                href={meta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {meta.title}
              </a>
            ) : (
              meta.title
            )}
          </h3>

          {meta.tech && meta.tech.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {meta.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded bg-slate-300 px-2 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 text-sm text-foreground">
            <Component />
          </div>

          {meta.secondaryLink && (
            <div className="mt-2">
              <a
                href={meta.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                See More Here
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
