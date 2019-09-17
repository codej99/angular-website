import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiValidationService } from './common/api-validation.service';
import { Post } from 'src/app/model/board/Post';
import { ApiReponseList } from 'src/app/model/common/ApiReponseList';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient,
    private apiValidationService: ApiValidationService) {}

  private getBoardUrl = '/api/v1/board';

  getPosts(boardName: string): Promise<Post[]> {
    const getPostsUrl = this.getBoardUrl + '/' + boardName + '/posts';
    return this.http.get<ApiReponseList>(getPostsUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.list as Post[];
      })
      .catch(response => {
        alert('[게시판 조회 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
}
