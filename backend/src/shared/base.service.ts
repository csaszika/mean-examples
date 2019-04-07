import { ModelType, Typegoose, InstanceType } from 'typegoose';
import { Types } from 'mongoose';
import { from, Observable } from 'rxjs';

export abstract class BaseService<T extends Typegoose> {
  protected _model: ModelType<T>;

  findAll(filter = {}): Observable<T[]> {
    return from(this._model.find(filter).exec());
  }

  async findOne(filter = {}): Promise<T> {
    return this._model.findOne(filter).exec();
  }

  async findById(id: string): Promise<T> {
    return this._model.findById(Types.ObjectId(id)).exec();
  }

  async create(item: T): Promise<T> {
    return this._model.create(item);
  }

  async delete(id: string): Promise<T> {
    return this._model.findByIdAndRemove(Types.ObjectId(id)).exec();
  }

  async update(id: string, item: T): Promise<T> {
    return this._model.findByIdAndUpdate(Types.ObjectId(id), item, { new: true }).exec();
  }

  async clearCollection(filter = {}): Promise<{}> {
    return this._model.deleteMany(filter).exec();
  }
}
