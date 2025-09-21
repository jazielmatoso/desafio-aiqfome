import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { SwaggerOptions } from './swagger-options.tyoe';

export class ConfigSwagger {
  constructor(
    private readonly app: INestApplication,
    private readonly options: SwaggerOptions,
  ) {}

  public createDocument() {
    const document = SwaggerModule.createDocument(
      this.app,
      this.getBuildDocument(),
    );
    SwaggerModule.setup(this.options.documentationEndpoint, this.app, document);
  }

  private getServer(): string {
    return ``;
  }

  private getBuildDocument(): Omit<OpenAPIObject, 'paths'> {
    return new DocumentBuilder()
      .setTitle(this.options.projectName)
      .setDescription(this.options.projectDescription)
      .setVersion(this.options.documentationVersion)
      .addServer(this.getServer())
      .build();
  }
}
