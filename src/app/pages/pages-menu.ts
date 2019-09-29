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
    home: false,
  },
  {
    title: 'Аналитика',
    icon: 'activity',
    link: '/pages/predicts',
    home: false,
  },
  {
    title: 'Показатели',
    icon: 'settings-outline',
    link: '/pages/settings-page',
    home: false,
  },
];
