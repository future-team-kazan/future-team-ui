import { NbMenuItem } from '@nebular/theme';

// hint Элементы меню
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Главная',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Статистика',
    icon: 'activity',
    link: '/pages/statistics-page',
    home: true,
  },
  {
    title: 'Настройки',
    icon: 'settings',
    link: '/pages/settings-page',
    home: true,
  },
];
