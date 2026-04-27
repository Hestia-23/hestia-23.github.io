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
    subtitle: 'Privacy-focused voice chat',
    date: 'Open beta · March 2026',
    description:
      'Community manager and UI specialist. Work spans the website, agent dashboard, help center, and client UI.',
    stack: ['Go', 'Wails', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI', 'MobX', 'Tiptap', 'Motion', 'dnd kit', 'Lucide', 'Astro', 'Alpine.js', 'htmx'],
    status: 'Active',
    body: [
      'GameVox is a privacy-focused voice chat platform. My role is community manager and UI specialist.',
      'The UI work is real build work now, not just mockups. I am building the agent dashboard and help center from the ground up, and reworking the entire client UI. Mockups still exist as the design layer, but the bulk of the contribution at this point is shipped surface.',
      'A lot of this portfolio\'s design discipline comes from trying to keep that work coherent across all four surfaces.',
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
      'A neutral, filterable directory of Discord alternative platforms. No rankings, no reviews, no ads, no tracking.',
    stack: ['Astro'],
    status: 'In progress',
    body: [
      "The internet has a lot of 'best of' lists and almost none of them are neutral. One rule here: show the platforms, show what they do, let the reader decide.",
      'Data is a static JSON file under version control. Every change is a pull request; every addition has a one-line rationale.',
    ],
    repoUrl: 'https://github.com/Hestia-23/discordalternatives',
  },
  {
    slug: 'hearth-ui',
    title: 'Hearth UI',
    subtitle: 'An interactive UI playground',
    date: 'In development',
    description:
      'An interactive UI playground themed around Hestia and the hearth. Visitors come to play with components, layouts, and small interactions.',
    stack: ['Astro', 'Vanilla CSS'],
    status: 'In progress',
    body: [
      'Originally drafted as my portfolio site. When the portfolio took its own home, Hearth UI pivoted: now an interactive playground for UI work, themed around Hestia and the hearth.',
      'The intent is hands-on. Components, micro-interactions, and small toys you can poke at, not a static showcase.',
    ],
    repoUrl: 'https://github.com/hestia-23/hearth-ui',
  },
];
