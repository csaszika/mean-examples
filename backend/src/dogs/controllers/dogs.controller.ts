import { Body, Controller, Delete, Get, Param, Post, UnauthorizedException } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../models/dog.model';
import { Observable } from 'rxjs';

@ApiUseTags('Dogs')
@Controller('dogs')
export class DogsController {

    constructor(private readonly dogService: DogsService) {}

    @Get()
    @ApiOkResponse({
        type: Dog,
        isArray: true,
        description: 'All dogs are fetched successful',
    })
    @ApiResponse({
        status: 401,
        type: UnauthorizedException,
        description: 'Unauthorized to fetch all dogs',
    })
    getDogs(): Observable<Dog[] | null> {
        return this.dogService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: Dog, isArray: false })
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
