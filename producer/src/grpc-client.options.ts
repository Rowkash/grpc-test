import { join } from 'path';
import { GrpcOptions, Transport } from '@nestjs/microservices';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, 'users/users.proto'),
    url: '0.0.0.0:5000',
  },
};
