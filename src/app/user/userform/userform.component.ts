import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  newUserForm: FormGroup;
  @Output() addUser: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.newUserForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(60),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onSubmit() {
    this.addUser.emit({
      name:
        this.newUserForm.controls.firstname.value +
        ' ' +
        this.newUserForm.controls.lastname.value,
      email: this.newUserForm.controls.email.value,
      phone: this.newUserForm.controls.phone.value,
    });
    this.newUserForm.reset();
  }
}
