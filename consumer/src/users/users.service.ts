import { Observable, firstValueFrom } from 'rxjs';
import { type ClientGrpc } from '@nestjs/microservices';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { UserPackageKey } from '@/users/constants';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserListResponse {
  users: User[];
}

interface UsersServiceGrpc {
  getFilteredUsers(data: object): Observable<UserListResponse>;
}

@Injectable()
export class UsersService implements OnModuleInit {
  private usersServiceGrpc: UsersServiceGrpc;

  constructor(
    @Inject(UserPackageKey)
    private readonly client: ClientGrpc,
  ) {}

  async onModuleInit() {
    this.usersServiceGrpc =
      this.client.getService<UsersServiceGrpc>('UsersService');

    try {
      const result = await firstValueFrom(
        this.usersServiceGrpc.getFilteredUsers({}),
      );
      console.log('Filtered Users:');

      console.log(result.users);
    } catch {
      console.error('Something went wrong in getFilteredUsers');
    }
  }
}
