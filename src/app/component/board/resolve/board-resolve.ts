import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardResolve implements Resolve<Post[]> {

    constructor(private boardService: BoardService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
        return this.boardService.getPosts(route.params['boardName']);
    }
}