import { Injectable } from '@nestjs/common';
import { type } from 'os';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'john',
      email: 'email@email.com',
      password: 'tochange',
    },
    {
      id: 2,
      name: 'chris',
      email: 'email@email.com',
      password: 'tochange',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.name === username);
  }
}
