export type Certification = {
  title: string;
  image: string;
  alt: string;
  url?: string;
  year?: string;
};

export const certifications: Certification[] = [
  {
    title: "GIAC Certified Intrusion Analyst (GCIA)",
    image: "/images/certs/giaccert.png",
    alt: "GIAC Certified Intrusion Analyst (GCIA)",
    url: "https://www.credly.com/badges/1a86e64b-25dc-44b2-819c-41b7e6533496",
    year: "Jun 2024 - 2028",
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    image: "/images/certs/microsoftcert.png",
    alt: "Azure Fundamentals (AZ-900)",
    url: "https://learn.microsoft.com/en-us/users/rachelkang-9289/credentials/751b773597a327b9?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    year: "Feb 2024",
  },
  {
    title: "GIAC Cloud Forensics Responder (GCFR)",
    image: "/images/certs/giaccert.png",
    alt: "GIAC Cloud Forensics Responder (GCFR)",
    url: "https://www.credly.com/badges/4c96c6a6-f46e-4ce0-a32b-af8109e47674",
    year: "Apr 2023 - 2027",
  },
  {
    title: "Azure Management Tools, Security Solutions",
    image: "/images/certs/microsoftcert.png",
    alt: "Azure Management Tools + Security Solutions",
    url: "https://www.coursera.org/account/accomplishments/certificate/3YFAW8XGFK2N",
    year: "Jan 2023 - 2027",
  },
  {
    title: "GIAC Certified Forensic Analyst (GCFA)",
    image: "/images/certs/giaccert.png",
    alt: "GIAC Certified Forensic Analyst (GCFA)",
    url: "https://www.credly.com/badges/31159c6e-23aa-4852-be9c-181553c97afb",
    year: "Mar 2021 - 2029",
  },
  {
    title: "GIAC Certified Forensic Examiner (GCFE)",
    image: "/images/certs/giaccert.png",
    alt: "GIAC Certified Forensic Examiner (GCFE)",
    url: "https://www.credly.com/badges/74dc9436-a146-42c3-bfbe-707ac0748ff4",
    year: "Jun 2020 - 2028",
  },
  {
    title: "GIAC Advisory Board",
    image: "/images/certs/giaccert.png",
    alt: "GIAC Advisory Board",
    url: "https://www.credly.com/badges/35746398-de13-4317-b59e-82fbc17a356b",
    year: "Jun 2020 - 2029",
  },
  {
    title: "Splunk Certified User",
    image: "/images/certs/splunkcert.png",
    alt: "Splunk Certified User",
    year: "Aug 2018 - 2023",
  },
];
