import { Module } from '@nestjs/common';
import { DogsController } from './controllers/dogs.controller';
import { DogsService } from './services/dogs.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Dog } from './models/dog.model';

@Module({
  imports: [TypegooseModule.forFeature({typegooseClass: Dog})],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
