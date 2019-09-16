import { Injectable } from '@angular/core';
import { ApiReponseSingle } from 'src/app/model/common/ApiReponseSingle';
import { ApiValidationService } from './common/api-validation.service';
import { User } from 'src/app/model/myinfo/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyinfoService {

  constructor(
    private http: HttpClient,
    private apiValidationService: ApiValidationService
  ) { }

  private getUserUrl = '/api/v1/user';

  getUser(): Promise<User> {
    return this.http.get<ApiReponseSingle>(this.getUserUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        localStorage.setItem('loginUser', JSON.stringify(response.data));
        return response.data as User;
      })
      .catch(response => {
        localStorage.removeItem('x-auth-token');
        alert('[회원 정보 조회중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
}
