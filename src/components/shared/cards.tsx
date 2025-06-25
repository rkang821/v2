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
        <div
          key={index}
          className="p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition"
        >
          <small className="block text-xs uppercase">{meta.period}</small>
          <h3 className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
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
                <span
                  key={idx}
                  className="inline-block px-2 py-1 text-xs rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
            <Component />
          </div>
        </div>
      ))}
    </div>
  );
}
