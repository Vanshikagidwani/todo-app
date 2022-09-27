import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  registerationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  @Input() public parentDat: any;
  @Output() childEvent = new EventEmitter();

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.registerationForm.value);
  }

  onEvent() {
    this.childEvent.emit('You are awesome');
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
}
