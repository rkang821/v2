import React from "react";
import Image from "next/image";

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
    <li className="cert-card">
      <Image src={cert.image} alt={cert.alt} width={20} height={20} />
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
          <span className="text-xs text-muted-foreground">{cert.year}</span>
        )}
      </div>
    </li>
  );
};

export default CertCard;
