import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  private users: User[] = [
    {
      id: 'u1',
      name: 'Dany',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u2',
      name: 'Ami',
      avatar: 'user-2.jpg',
    },
  ];

  getUsers() {
    return this.users;
  }
}
