import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../models/dog.model';
import { Observable } from 'rxjs';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogService: DogsService) {}

    @Get()
    @ApiOkResponse({ type: Dog, isArray: true })
    getDogs(): Observable<Dog[] | null> {
        return this.dogService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: Dog, isArray: true })
    async getDog(@Param('id') id: string): Promise<Dog | null> {
        return this.dogService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Dog })
    async create(@Body() dog: Dog): Promise<Dog> {
        return this.dogService.create(dog);
    }

    @Delete(':id')
    @ApiOkResponse({ type: Dog })
    async delete(@Param('id') id: string): Promise<Dog> {
        return this.dogService.delete(id);
    }
}
