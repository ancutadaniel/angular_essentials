import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  private users: User[] = [
    {
      id: 'u1',
      name: 'Dany',
      avatar: 'user.jpg',
    },
  ];

  getUsers() {
    return this.users;
  }
}
