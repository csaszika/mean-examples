import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

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

      fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));

      SwaggerModule.setup('api', app, document, {
          swaggerUrl: `${hostDomain}/api/docs-json`,
          explorer: true,
          swaggerOptions: {
              docExpansion: 'list',
              filter: true,
              showRequestDuration: true,
          },
      });

      app.enableCors({
      origin: [
        'http://localhost:4200', // angular
      ],
    });
  }

  await app.listen(AppModule.port);
}
bootstrap();
