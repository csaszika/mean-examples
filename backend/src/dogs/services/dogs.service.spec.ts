import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Dog } from '../models/dog.model';
import { ConfigurationService } from '../../shared/configuration/configuration/configuration.service';

describe('DogsService', () => {
  let service: DogsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
      imports: [
        TypegooseModule.forRoot(ConfigurationService.connectionString, { useNewUrlParser: true }),
        TypegooseModule.forFeature({typegooseClass: Dog})],
    }).compile();
    service = module.get<DogsService>(DogsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
