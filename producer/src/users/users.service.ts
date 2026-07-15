import { join } from 'path';
import { readFileSync } from 'fs';
import { Injectable } from '@nestjs/common';

import { type IUser } from '@/users/interfaces/user.interface';

@Injectable()
export class UsersService {
  getFilteredUsers() {
    const filePath = join(__dirname, '..', 'data', 'users.json');
    try {
      const raw = readFileSync(filePath, 'utf-8');
      const users: IUser[] = JSON.parse(raw);

      const filtered = users.filter((user) => user.age > 18);
      return { users: filtered };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(error?.message);
      return { users: [] };
    }
  }
}
