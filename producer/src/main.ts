import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from '@/app.module';
import { grpcClientOptions } from '@/grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions,
  );

  app.enableShutdownHooks();
  await app.listen();
  console.log(`App listening on ${grpcClientOptions.options.url}`);
}

void bootstrap();
