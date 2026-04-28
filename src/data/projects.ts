export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  startedAt?: string;
  description: string;
  stack: string[];
  body: string[];
  url?: string;
  repoUrl?: string;
  socials?: {
    x?: string;
    reddit?: string;
    youtube?: string;
  };
  status?: 'Active' | 'In progress' | 'Archived' | 'Volunteer';
};

export const PROJECTS: Project[] = [
  {
    slug: 'gamevox',
    title: 'GameVox',
    subtitle: 'Privacy-focused chat app',
    date: 'Open beta · March 2026',
    description:
      'Privacy-focused chat platform. I handle UI/UX and QA, plus help with marketing and socials.',
    stack: ['Go', 'Wails', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Radix UI', 'MobX', 'Lucide', 'Vite', 'Astro', 'Alpine.js', 'htmx'],
    status: 'Active',
    body: [
      'GameVox is a privacy-focused chat platform for gamers. I handle UI/UX and QA, and help with community, marketing, and socials.',
      'I\'m building the agent dashboard and help center from the ground up, and reworking the entire client UI. Mockups remain part of the workflow, but most of the contribution now is shipped code.',
      'Keeping the work coherent across the client, agent dashboard, help center, and the GameVox website is what shapes most of this portfolio\'s design discipline.',
    ],
    url: 'https://gamevox.com/',
    repoUrl: 'https://github.com/gamevoxvoice',
    socials: {
      x: 'https://x.com/gamevoxapp',
      reddit: 'https://reddit.com/r/GameVoxApp',
      youtube: 'https://youtube.com/@GameVoxApp',
    },
  },
  {
    slug: 'discord-alternatives',
    title: 'Discord Alternatives',
    subtitle: 'A neutral directory',
    date: 'In development',
    description:
      'A neutral, filterable directory of Discord alternative platforms. I built and maintain it. No rankings, reviews, ads, or tracking.',
    stack: ['Astro'],
    status: 'In progress',
    body: [
      "Most 'best of' lists aren't neutral. The rule here: show the platforms, show what they do, let the reader decide.",
      'Data lives in a static JSON file under version control. Every change is a pull request. Every addition gets a one-line rationale.',
    ],
    repoUrl: 'https://github.com/Hestia-23/discordalternatives',
  },
  {
    slug: 'anna',
    title: 'Anna',
    subtitle: 'Period and fertility tracker',
    date: 'In development',
    description:
      'An open-source period and fertility tracker for Android and iOS, rooted in Catholic tradition. I built it. Offline-first, zero-knowledge sync, no ads, no telemetry.',
    stack: ['Kotlin', 'Rust'],
    status: 'In progress',
    body: [
      'Anna is a free, open-source period and fertility tracker for Android and iOS, rooted in womanhood and Catholic tradition.',
      'Offline-first, zero-knowledge sync, no ads, no telemetry, no email or phone required.',
      'Named for St. Anne, patroness of motherhood.',
    ],
    url: 'https://annahq.org',
    repoUrl: 'https://github.com/annahq/anna',
  },
  {
    slug: 'hearth-ui',
    title: 'Hearth UI',
    subtitle: 'An interactive UI playground',
    date: 'In development',
    description:
      'An interactive UI playground I built for components, layouts, and small interactions you can poke at.',
    stack: ['Astro', 'Vanilla CSS'],
    status: 'In progress',
    body: [
      'Originally drafted as my portfolio site. When the portfolio took its own home, Hearth UI pivoted into an interactive playground for UI work, themed around Hestia and the hearth.',
      'The intent is hands-on. Components, micro-interactions, and small toys you can poke at, not a static showcase.',
    ],
    repoUrl: 'https://github.com/hestia-23/hearth-ui',
  },
];
