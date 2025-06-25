import React from "react";

export interface ExperienceMeta {
  period: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
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
    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-0 gap-6">
      {experiences.map(({ Component, meta }, index) => (
        <div key={index} className="card">
          <small className="block text-xs uppercase text-foreground">
            {meta.period}
          </small>
          <h3 className="mt-1 font-semibold text-foreground">
            {meta.title}{" "}
            {meta.company.url ? (
              <a
                href={meta.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {meta.company.name}
              </a>
            ) : (
              meta.company.name
            )}
          </h3>
          {meta.tech && meta.tech.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {meta.tech.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 text-sm text-foreground">
            <Component />
          </div>
        </div>
      ))}
    </div>
  );
}
