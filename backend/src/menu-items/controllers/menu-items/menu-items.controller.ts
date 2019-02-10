import {Controller, Get} from '@nestjs/common';
import {MenuItem} from "../../../../../frontend/src/app/core/types/menu-item.interface";

@Controller('menu-items')
export class MenuItemsController {

    @Get()
    findAll(): MenuItem[] {
        return [
            {
                url: '/home',
                name: 'Home'
            },{
                url: '/dogs',
                name: 'Dogs'
            },
        ];
    }
}
