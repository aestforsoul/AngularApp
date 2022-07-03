import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  sortField: string = '';
  sortDirection: string = 'asc';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  onCheckAllCards() {
    if (this.users.every((val) => val.checked == true))
      this.users.forEach((val) => {
        val.checked = false;
      });
    else
      this.users.forEach((val) => {
        val.checked = true;
      });
  }

  deleteButtonState() {
    return !this.users.some((val) => val.checked);
  }

  onDeleteChecked() {
    this.users = this.users.filter((val) => !val.checked);

    this.users.forEach((val) => {
      if (val.checked) {
        this.userService.deleteUser(val).subscribe();
      }
    });
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe((newUser) => {
      this.users = [...this.users, newUser];
    });
  }
}
