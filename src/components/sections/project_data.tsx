import { ProjectEntry } from "@/components/shared/projectcards";

function Phishing() {
  return (
    <p>
      Explores emering trends observed in 2023 phishing campaigns, including
      advanced social engineering tactics across email platforms, a rise in
      &apos;phishing-as-a-service&apos; (PhaaS), and shifts from attacks on
      email platforms to mobile phones.
    </p>
  );
}

function Phishing2() {
  return <p>Slides for the same</p>;
}

function M365() {
  return (
    <p>
      Discusses various metholodies to accurately quantify mailbox data accessed
      by malicious actors in the event of a business email compromise.
    </p>
  );
}

function WiCyS() {
  return (
    <p>
      Discusses the evolution of phishing attacks as threat actors weaponize
      artificial intelligence capabilities to broaden the reaches of their
      phishing campaigns.
    </p>
  );
}

function Website() {
  return (
    <p>
      Created a suite of scripts that streamlined incident response analysis.
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
    },
  },
  {
    Component: Phishing2,
    meta: {
      organization: "Aon Cyber Solutions",
      title: "The Evolution of Phishing Campaigns",
      link: "https://www.aon.com/en/insights/cyber-labs/the-evolution-of-phishing-campaigns",
    },
  },
  {
    Component: M365,
    meta: {
      organization: "Aon Cyber Solutions",
      title: "Microsoft 365: Identifying Mailbox Access",
      link: "https://www.aon.com/en/insights/cyber-labs/microsoft-365-identifying-mailbox-access",
    },
  },
  {
    Component: WiCyS,
    meta: {
      organization: "Women in CyberSecurity",
      title: "Phishing 2.0: The Rise of Artificial Intelligence",
      link: "/documents/20240413_WiCyS_Phishing.pdf",
    },
  },
  {
    Component: Website,
    meta: {
      organization: "",
      title: "Personal Portfolio",
      link: "https://www.rachelkang.xyz/#fundamentals",
    },
  },
];

export default projects;
