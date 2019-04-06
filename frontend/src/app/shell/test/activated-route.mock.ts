import { mockMenuItems } from './menu-items.mock';

export const mockActivatedRouteWithMenuItems = (): any => {
  return {
    snapshot: {
      data: {
        menuItems: mockMenuItems,
      },
    }
  };
};
