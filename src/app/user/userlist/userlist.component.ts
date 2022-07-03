import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  @Input() searchTerm: any;
  @Input() sortDirection: any;
  @Input() users: User[];

  constructor() {}

  ngOnInit(): void {}
}
