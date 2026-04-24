export type ContactItem = {
  kind: string;
  value: string;
  href: string;
};

export const CONTACT: ContactItem[] = [
  {
    kind: 'email',
    value: 'hestia.tu2cy@8alias.com',
    href: 'mailto:hestia.tu2cy@8alias.com',
  },
  {
    kind: 'github',
    value: 'github.com/hestia-23',
    href: 'https://github.com/hestia-23',
  },
  {
    kind: 'sponsors',
    value: 'github.com/sponsors/hestia-23',
    href: 'https://github.com/sponsors/hestia-23',
  },
];
