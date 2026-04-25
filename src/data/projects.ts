export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  stack: string[];
  body: string[];
  url?: string;
  repoUrl?: string;
  status?: 'Active' | 'In progress' | 'Archived' | 'Volunteer';
};

export const PROJECTS: Project[] = [
  {
    slug: 'hearth-ui',
    title: 'Hearth UI',
    date: 'Ongoing',
    description:
      'Frontend UI components, layouts, and design systems. Inspired by volunteer work on privacy-focused community platforms.',
    stack: ['Astro', 'Vanilla CSS'],
    status: 'In progress',
    body: [
      'A small library of components I kept rebuilding across volunteer projects. Extracted and documented so the rebuilds stop.',
      'Deliberately small. No runtime, no dependencies beyond Astro itself.',
    ],
    repoUrl: 'https://github.com/hestia-23/hearth-ui',
  },
  {
    slug: 'discord-alternatives',
    title: 'Discord Alternatives',
    subtitle: 'A neutral directory',
    date: 'Ongoing',
    description:
      'A neutral, filterable directory of Discord alternative platforms. No rankings, no reviews, no ads, no tracking.',
    stack: ['Astro'],
    status: 'Active',
    body: [
      "The internet has a lot of 'best of' lists and almost none of them are neutral. One rule here: show the platforms, show what they do, let the reader decide.",
      'Data is a static JSON file under version control. Every change is a pull request; every addition has a one-line rationale.',
    ],
    repoUrl: 'https://github.com/Hestia-23/discordalternatives',
  },
  {
    slug: 'gamevox',
    title: 'GameVox',
    subtitle: 'Privacy-focused voice chat',
    date: 'Ongoing',
    description:
      'Community manager and volunteer UI contributor. UI mockups, interactive prototypes, and design reference files for the platform.',
    stack: ['Astro', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    status: 'Active',
    body: [
      'GameVox is a privacy-focused voice chat platform. My role is community manager; my contribution as a volunteer is UI.',
      "Most of that work is UI mockups, interactive HTML/CSS prototypes, and reference files for the development team. A lot of this portfolio's design discipline comes from trying to keep that work coherent.",
    ],
    url: 'https://gamevox.com/',
  },
];
