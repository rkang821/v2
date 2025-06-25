import React from "react";

export type Certification = {
  title: string;
  image: string;
  alt: string;
  url?: string;
  year?: string;
};

type Props = {
  cert: Certification;
};

const CertCard: React.FC<Props> = ({ cert }) => {
  return (
    <li className="flex items-start gap-2">
      <img src={cert.image} alt={cert.alt} className="h-5 w-5 mt-0.5" />
      <div className="flex flex-col">
        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {cert.title}
          </a>
        ) : (
          <span>{cert.title}</span>
        )}
        {cert.year && (
          <span className="text-xs text-zinc-500">{cert.year}</span>
        )}
      </div>
    </li>
  );
};

export default CertCard;
