import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MenuItemsController } from './controllers/menu-items/menu-items.controller';
import { CorsMiddleware } from '../core/middlewares/cors.middleware';

@Module({
    controllers: [MenuItemsController],
})
export class MenuItemsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(CorsMiddleware).forRoutes(MenuItemsController);
    }
}
