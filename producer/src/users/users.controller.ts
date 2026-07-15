import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from '@/users/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @GrpcMethod('UsersService', 'GetFilteredUsers')
  getFilteredUsers() {
    return this.usersService.getFilteredUsers();
  }
}
