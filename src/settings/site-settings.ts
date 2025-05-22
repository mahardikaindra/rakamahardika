import { USFlag } from '@/components/icons/flag/USFlag';
import { IDFlag } from '@/components/icons/flag/IDFlag';
import siteLogo from 'public/assets/images/logo.svg';

export const siteSettings = {
  name: 'Mahardika',
  description:
    'Software engineer with a passion for building web applications and a strong focus on user experience. I am dedicated to creating high-quality software that meets the needs of users and businesses alike.',
  author: {
    name: 'Raka Mahardika',
    websiteUrl: 'https://rakamahardika.com',
    address: '',
  },
  logo: {
    url: siteLogo,
    alt: 'Mahardika',
    href: '/id',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'id',
  currencyCode: 'IDR',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-modern',
          },
          {
            id: 2,
            path: '/classic',
            label: 'menu-classic',
          },
          {
            id: 3,
            path: '/vintage',
            label: 'menu-vintage',
          },
          {
            id: 4,
            path: '/standard',
            label: 'menu-standard',
          },
          {
            id: 5,
            path: '/minimal',
            label: 'menu-minimal',
          },
          {
            id: 6,
            path: '/trendy',
            label: 'menu-trendy',
          },
          {
            id: 7,
            path: '/elegant',
            label: 'menu-elegant',
          },
          {
            id: 8,
            path: '/refined',
            label: 'menu-refined',
          },
          {
            id: 9,
            path: '/antique',
            label: 'menu-antique',
          },
          {
            id: 10,
            path: '/ancient',
            label: 'menu-ancient',
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: USFlag,
      },
      {
        id: 'id',
        name: 'Indonesia - ID',
        value: 'id',
        icon: IDFlag,
      },
    ],
  },
};
