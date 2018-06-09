import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms' ;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  username: String = '';
  titleAlert: String = 'This Field Is required';

  constructor(fb: FormBuilder) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      // 'username' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],

    });


  }

  ngOnInit() {
  }
  validation(valiForm) {
    this.username = valiForm.username;
}
}
