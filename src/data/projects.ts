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
  status?: 'active' | 'in progress' | 'archived' | 'volunteer';
};

export const PROJECTS: Project[] = [
  {
    slug: 'hearth-ui',
    title: 'hearth-ui',
    date: 'ongoing',
    description:
      'frontend ui components, layouts, and design systems. inspired by volunteer work on privacy-focused community platforms.',
    stack: ['astro', 'vanilla css'],
    status: 'in progress',
    body: [
      'a small library of components i kept rebuilding across volunteer projects. extracted and documented so the rebuilds stop.',
      'deliberately small. no runtime, no dependencies beyond astro itself.',
    ],
    repoUrl: 'https://github.com/hestia-23/hearth-ui',
  },
  {
    slug: 'discord-alternatives',
    title: 'discord alternatives',
    subtitle: 'a neutral directory',
    date: 'ongoing',
    description:
      'a neutral, filterable directory of discord alternative platforms. no rankings, no reviews, no ads, no tracking.',
    stack: ['astro'],
    status: 'active',
    body: [
      "the internet has a lot of 'best of' lists and almost none of them are neutral. one rule here: show the platforms, show what they do, let the reader decide.",
      'data is a static json file under version control. every change is a pull request; every addition has a one-line rationale.',
    ],
    repoUrl: 'https://github.com/Hestia-23/discordalternatives',
  },
  {
    slug: 'gamevox',
    title: 'gamevox',
    subtitle: 'privacy-focused voice chat',
    date: 'ongoing',
    description:
      'community manager and volunteer ui contributor. ui mockups, interactive prototypes, and design reference files for the platform.',
    stack: ['astro', 'html', 'css', 'javascript', 'typescript'],
    status: 'active',
    body: [
      'gamevox is a privacy-focused voice chat platform. my role is community manager; my contribution as a volunteer is ui.',
      "most of that work is ui mockups, interactive html/css prototypes, and reference files for the development team. a lot of this portfolio's design discipline comes from trying to keep that work coherent.",
    ],
    url: 'https://gamevox.com/',
  },
];
