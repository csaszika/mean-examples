import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemsController } from './menu-items.controller';

describe('MenuItems Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MenuItemsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MenuItemsController = module.get<MenuItemsController>(MenuItemsController);
    expect(controller).toBeDefined();
  });
});
