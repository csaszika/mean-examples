import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// tslint:disable-next-line:only-arrow-functions
async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(AppModule);
  const hostDomain = AppModule.isDev ? `${AppModule.host}:${AppModule.port}` : AppModule.host;

  if (AppModule.isDev) {
      const options = new DocumentBuilder()
          .setTitle('Swagger docs')
          .setDescription('APIs descriptions')
          .setVersion('1.0')
          .addTag('apis')
          .build();

      const document = SwaggerModule.createDocument(app, options);

      SwaggerModule.setup('api', app, document, {
          swaggerUrl: `${hostDomain}/api/docs-json`,
          explorer: true,
          swaggerOptions: {
              docExpansion: 'list',
              filter: true,
              showRequestDuration: true,
          },
      });
  }

  await app.listen(AppModule.port);
}
bootstrap();
