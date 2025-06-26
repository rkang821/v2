import React from "react";

export interface ExperienceMeta {
  period: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  link?: string;
  tech?: string[];
}

export interface ExperienceEntry {
  Component: React.ComponentType;
  meta: ExperienceMeta;
}

interface ExperienceCardsProps {
  experiences: ExperienceEntry[];
}

export default function ExperienceCards({ experiences }: ExperienceCardsProps) {
  return (
    <div className="grid gap-3">
      {experiences.map(({ Component, meta }, index) => (
        <div key={index} className="experience-card">
          <div className="flex justify-between items-start">
            <div>
              {meta.company.url ? (
                <a
                  href={meta.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:underline"
                >
                  {meta.company.name}
                </a>
              ) : (
                <span className="text-lg font-semibold text-foreground">
                  {meta.company.name}
                </span>
              )}
              <div>
                <small className="text-sm text-muted-foreground">
                  {meta.title}
                </small>
              </div>
            </div>
            <small className="text-xs uppercase text-muted-foreground whitespace-nowrap">
              {meta.period}
            </small>
          </div>

          <div className="mt-4 text-sm text-foreground">
            <Component />
          </div>
          {meta.link && (
            <div className="mt-4">
              <a
                href={meta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:underline"
              >
                See Senior Thesis Poster Here
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
