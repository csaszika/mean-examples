import {Controller, Get} from '@nestjs/common';

@Controller('menu-items')
export class MenuItemsController {

    @Get()
    findAll() {
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
