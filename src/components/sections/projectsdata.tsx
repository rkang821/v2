//src/components/sections/project_data.tsx

import { ProjectEntry } from "@/components/shared/cards/projectscard";

function Phishing() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      My blog post that researched the shift from classic brand impersonation
      and consent phishing to &quot;Phishing as a Service&quot; (PhaaS) and
      GenAI-powered toolkits. I combined field observations with real-world
      detection gaps to give responders a framework for understanding attacker
      tradecraft in the phishing domain. Below are my slides from my BSidesPGH
      2024 talk where I expanded upon my original blog to cover other attack
      paths for phishing, including quishing, SIM-swapping, and mobile-first
      attack paths.
    </p>
  );
}

function M365() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      A deep-dive forensic blog post I authored to help BEC responders determine
      the scope of data exposure across Microsoft 365 compromises. I outlined
      methods for analyzing mailbox syncs, message-level access, delegated
      permissions, and log correlation across UAL, MAL, and Azure AD sources.
    </p>
  );
}

function WiCyS() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      My WiCyS 2024 deep-dive talk on how AI tools are reshaping phishing
      campaigns, researched and presented by yours truly. I covered the rise of
      AI-generated phish kits, jailbroken chatbots, and attacker tactics that
      mimic personalization and urgency at scale.
    </p>
  );
}

function Website() {
  return (
    <p className="text-sm leading-relaxed text-foreground">
      My first, very cute attempt at a personal portfolio, built with Next.js
      and Tailwind. My v1 portfolio includes experiences from my days in the
      DFIR cybersecurity consulting world. I included my core tooling, personal
      thoughts, and reflections on how my experience during investigations
      shaped my approach moving forward. See below for my &quot;DFIR
      Fundamentals!&quot;
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
