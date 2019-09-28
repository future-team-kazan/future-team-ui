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
    title: 'Test Page',
    icon: 'shopping-cart-outline',
    link: '/pages/test-page',
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
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
