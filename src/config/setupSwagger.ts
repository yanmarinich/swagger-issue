import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

const SWAGGER_ENDPOINT = 'swagger';

export const setupSwagger = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Template')
    .setDescription('Template api endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  document.components.schemas = {
    ...document.components.schemas,
    ...validationMetadatasToSchemas(),
  };

  SwaggerModule.setup(SWAGGER_ENDPOINT, app, document);
};
