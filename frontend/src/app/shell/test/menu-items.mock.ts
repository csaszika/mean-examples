import { MenuItem } from '../types/menu-item.interface';

export const mockMenuItems = (): MenuItem[] => {
  return [
    {
      url: '/home',
      name: 'Home',
    }, {
      url: '/dogs',
      name: 'Dogs',
    },
  ];
};
