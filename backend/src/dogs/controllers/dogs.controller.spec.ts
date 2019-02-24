import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';

describe('Dogs Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DogsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DogsController = module.get<DogsController>(DogsController);
    expect(controller).toBeDefined();
  });
});
