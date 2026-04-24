export type ContactIconName = 'mail' | 'github' | 'sponsors' | 'x';

export type ContactItem = {
  kind: string;
  value: string;
  href: string;
  icon: ContactIconName;
};

export const CONTACT: ContactItem[] = [
  {
    kind: 'email',
    value: 'hestia.tu2cy@8alias.com',
    href: 'mailto:hestia.tu2cy@8alias.com',
    icon: 'mail',
  },
  {
    kind: 'github',
    value: 'github.com/hestia-23',
    href: 'https://github.com/hestia-23',
    icon: 'github',
  },
  {
    kind: 'sponsors',
    value: 'github.com/sponsors/hestia-23',
    href: 'https://github.com/sponsors/hestia-23',
    icon: 'sponsors',
  },
  {
    kind: 'x',
    value: '@alethia__23',
    href: 'https://x.com/alethia__23',
    icon: 'x',
  },
];
