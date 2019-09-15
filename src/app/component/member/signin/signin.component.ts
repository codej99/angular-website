import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignService } from 'src/app/service/rest-api/sign.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm: FormGroup;

  constructor(private signService: SignService) {
    this.signInForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get id() {
    return this.signInForm.get('id');
  }

  get password() {
    return this.signInForm.get('password');
  }

  submit() {
    if (this.signInForm.valid) {
      this.signService.signIn(this.signInForm.value.id, this.signInForm.value.password)
        .then(data => {
          alert('로그인에 성공하였습니다');
        })
        .catch(response => {
          alert('로그인에 실패하였습니다 - ' + response.error.msg);
        });
    }
  }

}
