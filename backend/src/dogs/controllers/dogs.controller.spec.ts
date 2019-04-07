import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';
import { DogsService } from '../services/dogs.service';
import { of } from 'rxjs';
import { Dog } from '../models/dog.model';

describe('Dogs Controller', () => {
  let module: TestingModule;
  const mockDog = { name: 'mockDog' };
  // @ts-ignore
  const dogsServiceMock: DogsService = { findAll: () => of([mockDog as Dog]) };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [{
        provide: DogsService,
        useValue: dogsServiceMock,
      }],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DogsController = module.get<DogsController>(DogsController);
    expect(controller).toBeDefined();
  });
});
