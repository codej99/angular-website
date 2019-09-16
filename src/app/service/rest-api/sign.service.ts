import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReponseSingle } from 'src/app/model/common/ApiReponseSingle';
import { ApiValidationService } from './common/api-validation.service';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private signInUrl = '/api/v1/signin';
  private signUpUrl = '/api/v1/signup';

  constructor(private http: HttpClient,
    private apiValidationService: ApiValidationService) { }

  // 로그인 api 연동
  signIn(id: string, password: string): Promise<any> {
    const params = new FormData();
    params.append('id', id);
    params.append('password', password);
    return this.http.post<ApiReponseSingle>(this.signInUrl, params)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        localStorage.setItem('x-auth-token', response.data);
      })
      .catch(response => {
        alert('[로그인 실패]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }

  // 가입 api 연동
  signUp(id: string, password: string, name: string): Promise<any> {
    const params = new FormData();
    params.append('id', id);
    params.append('password', password);
    params.append('name', name);
    return this.http.post<ApiReponseSingle>(this.signUpUrl, params)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return true;
      })
      .catch(response => {
        alert('[회원 가입중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }

  // 로그인 여부 확인
  isSignIn(): boolean {
    const token = localStorage.getItem('x-auth-token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
