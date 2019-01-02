import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// tslint:disable-next-line:only-arrow-functions
async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
        .setTitle('Dogs example')
        .setDescription('The dogs API description')
        .setVersion('1.0')
        .addTag('dogs')
        .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(AppModule.port);
}
bootstrap();
