import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
    this.users = this.userService.getAll();
  }

  checkAllCards() {
    if (this.users.every((val) => val.checked == true))
      this.users.forEach((val) => {
        val.checked = false;
      });
    else
      this.users.forEach((val) => {
        val.checked = true;
      });
  }

  buttonState() {
    return !this.users.some((val) => val.checked);
  }

  deleteChecked() {
    this.users = this.users.filter((val) => val.checked === false);
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }
}
