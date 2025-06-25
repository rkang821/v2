//src/components/sections/project_data.tsx

import { ProjectEntry } from "@/components/shared/cards/projectscard";

function Phishing() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      The first blog post I wrote to analyze how phishing campaigns have
      evolved, including tactics such as brand impersonation and consent
      phishing to phishing-as-a-service and AI tooling. I combined field
      observations with real-world detection gaps to give responders a modern
      framework for understanding attacker tradecraft in the phishing domain.
      Below is are my slides from the BSidesPGH 2024 talk built directly from my
      original blog post. I expanded on the concepts to explore phishing beyond
      traditional email—covering QR-based “quishing,” smishing, SIM swapping,
      and mobile-first attack paths.
    </p>
  );
}

function M365() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      A deep-dive forensic guide I authored to help responders determine the
      scope of data exposure in Microsoft 365 compromises. I outlined methods
      for analyzing mailbox syncs, message-level access, delegated permissions,
      and log correlation across UAL, MAL, and Azure AD sources.
    </p>
  );
}

function WiCyS() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      A deep dive into how AI tools are reshaping phishing campaigns,created and
      presented at WiCyS 2024 by yours truly. I covered the rise of AI-generated
      phish kits, jailbroken chatbots, and attacker tactics that mimic
      personalization and urgency at scale.
    </p>
  );
}

function Website() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      A first attempt at coding my porfolio using Next.js and Tailwind to
      showcase my experience from the front lines of the battlefield from my
      experience in the DFIR consulting world. I included my core tooling,
      personal thoughts on the industry, and reflections on how those
      investigations shape my approach moving forward.
    </p>
  );
}

const projects: ProjectEntry[] = [
  {
    Component: Phishing,
    meta: {
      organization: "Aon Cyber Solutions",
      title: "The Evolution of Phishing Campaigns",
      link: "https://www.aon.com/en/insights/cyber-labs/the-evolution-of-phishing-campaigns",
      secondaryLink:
        "/documents/20240712_BSidesPGH_TheNewGenerationOfPhishing.pdf",
      tech: ["PhaaS", "Social Engineering", "BEC"],
    },
  },

  {
    Component: M365,
    meta: {
      organization: "Aon Cyber Solutions",
      title: "Microsoft 365: Identifying Mailbox Access",
      link: "https://www.aon.com/en/insights/cyber-labs/microsoft-365-identifying-mailbox-access",
      tech: ["M365", "Unified Audit Log", "Mailbox Forensics"],
    },
  },
  {
    Component: WiCyS,
    meta: {
      organization: "Women in CyberSecurity",
      title: "Phishing 2.0: The Rise of Artificial Intelligence",
      link: "/documents/20240413_WiCyS_Phishing.pdf",
      tech: ["Phishing", "GenAI"],
    },
  },
  {
    Component: Website,
    meta: {
      organization: "",
      title: "Personal Portfolio",
      link: "https://www.rachelkang.xyz/",
      secondaryLink: "https://www.rachelkang.xyz/#fundamentals",
      tech: ["Next.js", "Tailwind", "Route 53"],
    },
  },
];

export default projects;
