import { ExperienceEntry } from "@/components/shared/cards/experiencecard";

function OpenAI() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>
        Joined <strong>Example Corp</strong> as a Security Engineer.
      </li>
      <li>Built internal tools with Next.js and TypeScript.</li>
    </ul>
  );
}

function StrozFriedberg() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>
        Led incident response engagements involving ransomware, insider threats,
        APTs, and IP theft.
      </li>
      <li>
        Reconstructed attacks from petabyte-scale datasets across SIEM, EDR,
        NDR, and AV sources.
      </li>
      <li>
        Conducted deep forensic analysis on Windows, Linux, macOS, mobile
        devices, and removable media.
      </li>
      <li>
        Delivered executive-level briefings to C-suite stakeholders during live
        incident response.
      </li>
      <li>
        Developed automation to collect Azure logs via Microsoft Graph API for
        BEC investigations.
      </li>
      <li>
        Built a system to track Cobalt Strike C2 infrastructure for threat
        intelligence operations.
      </li>
      <li>
        Led a 10-person team responding to a supply chain zero-day, mapping
        cloud and network access paths.
      </li>
    </ul>
  );
}

function MiddleburyCollege() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>
        B.A. in Computer Science and Political Science, graduated cum laude.
      </li>
      <li>Studied systems programming, security, and ethics in computing.</li>
      <li>
        Conducted independent research on digital surveillance and its legal
        implications.
      </li>
    </ul>
  );
}

function CarnegieMellon() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>Selected for competitive IT Lab Fellowship at Heinz College.</li>
      <li>
        Collaborated on security-focused projects using policy + technical
        frameworks.
      </li>
      <li>Presented final deliverables to CMU faculty and industry leaders.</li>
    </ul>
  );
}

const experiences: ExperienceEntry[] = [
  {
    Component: OpenAI,
    meta: {
      period: "2024–Present",
      title: "Member of Intelligence & Investigations",
      company: { name: "OpenAI", url: "https://openai.com" },
    },
  },
  {
    Component: StrozFriedberg,
    meta: {
      period: "2019–2024",
      title: "Manager, Digital Forensics, Incident Response",
      company: {
        name: "Stroz Friedberg, an Aon Company",
        url: "https://www.linkedin.com/company/stroz-friedberg-llc/",
      },
    },
  },
  {
    Component: MiddleburyCollege,
    meta: {
      period: "2015 – 2019",
      title: "BA in Computer Science + Political Science",
      company: {
        name: "Middlebury College",
        url: "https://www.middlebury.edu/college/",
      },
      link: "/documents/Middlebury_SeniorThesis.pdf",
    },
  },
  {
    Component: CarnegieMellon,
    meta: {
      period: "2018 - 2018",
      title: "IT Lab Fellowship",
      company: {
        name: "Carnegie Mellon University - Heinz College",
        url: "https://www.heinz.cmu.edu/",
      },
    },
  },
];

export default experiences;
