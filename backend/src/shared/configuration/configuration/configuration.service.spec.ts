import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationService } from './configuration.service';
import { Configuration } from './configuration.enum';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationService],
    }).compile();
    service = module.get<ConfigurationService>(ConfigurationService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not be development mode, it is test', () => {
    expect(service.isDevelopment).toEqual(false);
  });

  it('should return', () => {
    expect(service.get(Configuration.MONGO_URI)).toEqual('mongodb://localhost:27017/my-mongo-db');
  });
});
