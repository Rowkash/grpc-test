import { join } from 'path';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersService } from '@/users/users.service';
import { UserPackageKey } from '@/users/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: UserPackageKey,
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, 'users.proto'),
          url: process.env.PRODUCER_GRPC_URL || 'localhost:5000',
        },
      },
    ]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
