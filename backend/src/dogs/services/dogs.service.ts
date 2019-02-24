import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { Dog } from '../models/dog.model';
import { BaseService } from '../../shared/base.service';

@Injectable()
export class DogsService extends BaseService<Dog> {

    constructor(@InjectModel(Dog) private readonly dogModel: ModelType<Dog>) {
        super();
        this._model = dogModel;
    }
}
