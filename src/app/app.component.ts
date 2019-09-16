import { Component } from '@angular/core';
import { SignService } from './service/rest-api/sign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private signService: SignService
  ) {}
}
