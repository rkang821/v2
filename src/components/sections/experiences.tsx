import { ExperienceEntry } from "@/components/shared/cards";

function OpenAI() {
  return (
    <ul className="list-disc list-inside space-y-1">
      <li>
        Joined <strong>Example Corp</strong> as a Security Engineer.
      </li>
      <li>Built internal tools with Next.js and TypeScript.</li>
    </ul>
  );
}

function StrozFriedberg() {
  return (
    <ul className="list-disc list-inside space-y-1">
      <li>
        Joined <strong>Example Corp</strong> as a Security Engineer.
      </li>
      <li>Built internal tools with Next.js and TypeScript.</li>
    </ul>
  );
}

function MiddleburyCollege() {
  return (
    <ul className="list-disc list-inside space-y-1">
      <li>
        Joined <strong>Example Corp</strong> as a Security Engineer.
      </li>
      <li>Built internal tools with Next.js and TypeScript.</li>
    </ul>
  );
}

function CarnegieMellon() {
  return (
    <ul className="list-disc list-inside space-y-1">
      <li>
        Joined <strong>Example Corp</strong> as a Security Engineer.
      </li>
      <li>Built internal tools with Next.js and TypeScript.</li>
    </ul>
  );
}

const experiences: ExperienceEntry[] = [
  {
    Component: OpenAI,
    meta: {
      period: "2024–Present",
      title: "Security Engineer",
      company: { name: "OpenAI", url: "https://openai.com" },
      tech: ["Next.js", "TypeScript"],
    },
  },
  {
    Component: StrozFriedberg,
    meta: {
      period: "2019–2024",
      title: "Security Engineer",
      company: { name: "Stroz Friedberg" },
      tech: ["Next.js", "TypeScript"],
    },
  },
  {
    Component: MiddleburyCollege,
    meta: {
      period: "2018 – 2022",
      title: "Security Engineer",
      company: { name: "Middlebury College" },
      tech: ["Next.js", "TypeScript"],
    },
  },
  {
    Component: CarnegieMellon,
    meta: {
      period: "2014–2018",
      title: "Security Engineer",
      company: { name: "Carnegie Mellon" },
      tech: ["Next.js", "TypeScript"],
    },
  },
];

export default experiences;
