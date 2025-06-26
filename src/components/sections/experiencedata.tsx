import { ExperienceEntry } from "@/components/shared/cards/experiencecard";

function OpenAI() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>
        Strengthened insider risk detection and response for a rapidly scaling
        user base
      </li>
      <li className="italic">Details intentionally limited</li>
    </ul>
  );
}

function StrozFriedberg() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>
        Incident commanded 25+ ransomware, BEC, APT, and IP theft engagements
        for Fortune 500 clients.
      </li>
      <li>
        Reconstructed multi-vector attacks across petabytes of SIEM, EDR, and
        cloud telemetry.
      </li>
      <li>
        Conducted deep forensic analysis on Windows, Linux, macOS, mobile
        devices, and removable media.
      </li>
      <li>
        Delivered executive-level briefings to C-suite stakeholders during live
        incident response, translating technical evidence into actionable
        business takeaways.
      </li>
      <li>
        Co-developed an automation tool (Microsoft Graph API) to collect
        Azure/M365 logs and improve data availability for BEC investigations.
      </li>
      <li>
        Built an internal system to track Cobalt Strike C2 beacons, enriching
        threat intel feeds for relevant investigations.
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
        Graduated cum laude with a double major in Computer Science and
        Political Science.
      </li>
      <li>
        Coursework included a focus on systems programming and U.S. politics
        (bonus language study - two years of Arabic!)
      </li>
      <li>
        Public Policy Intern for the office of U.S. House of Representatives Rob
        Woodall, located in the 7th District of Georgia.
      </li>
      <li>
        Senior thesis: Accurately predicted the 2019 U.S. midterms election
        results using sentiment analysis and machine learning. See below!
      </li>
    </ul>
  );
}

function CarnegieMellon() {
  return (
    <ul className="list-disc list-inside space-y-0">
      <li>Selected for competitive IT Lab Fellowship at Heinz College.</li>
      <li>
        Fine-tuned IDS rule sets for a large academic infrastructure,
        significantly reducing false positives across the network.
      </li>
      <li>Presented final deliverables to CMU faculty and industry leaders.</li>
    </ul>
  );
}

const experiences: ExperienceEntry[] = [
  {
    Component: OpenAI,
    meta: {
      period: "2024-2025",
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
