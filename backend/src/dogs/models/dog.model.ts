import { ApiModelProperty } from '@nestjs/swagger';
import { prop, Typegoose } from 'typegoose';

export class Dog extends Typegoose {
    @ApiModelProperty({example: 'Tappancs', required: true})
    @prop({required: true})
    name: string;
}
