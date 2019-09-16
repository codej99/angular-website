import { Component, OnInit } from '@angular/core';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { User } from 'src/app/model/myinfo/User';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent {

  loginUser: User;

  constructor(private myInfoService: MyinfoService) {
    this.myInfoService.getUser().then(user => {
      this.loginUser = user;
    });
  }
}
