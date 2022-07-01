import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      firstname: 'Danylo',
      lastname: 'Kushliyansky',
      email: '123@gmail.com',
      phone: '0931111111',
      checked: false,
    },
    {
      id: 2,
      firstname: 'Alina',
      lastname: 'Lishchynska',
      email: '25alina@gmail.com',
      phone: '0938888888',
      checked: false,
    },
    {
      id: 3,
      firstname: 'Kate',
      lastname: 'Yudina',
      email: '78kate78@gmail.com',
      phone: '0936666666',
      checked: false,
    },
    {
      id: 4,
      firstname: 'Dmytro',
      lastname: 'Zavr',
      email: 'dm_y_tro@gmail.com',
      phone: '0939999999',
      checked: false,
    },
  ];

  constructor() {}

  getAll(): User[] {
    return this.users;
  }
}
