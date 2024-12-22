import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Order Flow API')
    .setDescription('API for managing order flow')
    .setVersion('1.0')
    .build(); 


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Logger.log(
    `Started running application on http://localhost:3000/api`,
    'OrderFlowApi',
  );
  await app.listen(3000);
}
bootstrap();
