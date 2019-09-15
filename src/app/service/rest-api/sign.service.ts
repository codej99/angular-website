import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiReponseSingle } from 'src/app/model/common/ApiReponseSingle';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private signInUrl = '/api/v1/signin';

  constructor(private http: HttpClient) { }

  signIn(id: string, password: string): Promise<any> {
    const params = new FormData();
    params.append('id', id);
    params.append('password', password);
    return this.http.post<ApiReponseSingle>(this.signInUrl, params)
      .toPromise()
      .then(response => {
        localStorage.setItem('x-auth-token', response.data);
      });
  }
}
