import React from "react";

export interface ProjectMeta {
  organization: string;
  title: string;
  link?: string;
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
      {projects.map(({ Component, meta }, index) => {
        const content = (
          <>
            <small className="block text-xs uppercase text-foreground">
              {meta.organization}
            </small>
            <h3 className="mt-1 font-semibold text-foreground">{meta.title}</h3>
            <div className="mt-4 text-sm text-foreground">
              <Component />
            </div>
          </>
        );

        return meta.link ? (
          <a
            key={index}
            href={meta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card block group"
          >
            {content}
          </a>
        ) : (
          <div key={index} className="card">
            {content}
          </div>
        );
      })}
    </div>
  );
}
