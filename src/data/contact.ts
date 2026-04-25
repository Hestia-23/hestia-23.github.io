export type ContactIconName = 'mail' | 'github' | 'sponsors' | 'x';

export type ContactItem = {
  kind: string;
  value: string;
  href: string;
  icon: ContactIconName;
};

export const CONTACT: ContactItem[] = [
  {
    kind: 'Email',
    value: 'hestia.tu2cy@8alias.com',
    href: 'mailto:hestia.tu2cy@8alias.com',
    icon: 'mail',
  },
  {
    kind: 'GitHub',
    value: 'github.com/hestia-23',
    href: 'https://github.com/hestia-23',
    icon: 'github',
  },
  {
    kind: 'Sponsors',
    value: 'github.com/sponsors/hestia-23',
    href: 'https://github.com/sponsors/hestia-23',
    icon: 'sponsors',
  },
  {
    kind: 'Formerly Twitter',
    value: '@alethia__23',
    href: 'https://x.com/alethia__23',
    icon: 'x',
  },
];
