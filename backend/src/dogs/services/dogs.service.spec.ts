import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  let service: DogsService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();
    service = module.get<DogsService>(DogsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
