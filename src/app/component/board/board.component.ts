import { DialogService } from './../../service/dialog/dialog.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { BoardService } from './../../service/rest-api/board.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/myinfo/User';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [];
  displayedColumns: string[] = ['postId', 'title', 'author', 'createdAt', 'modifiedAt'];
  boardName: string;
  loginUser: User;

  constructor(private boardService: BoardService,
    private route: ActivatedRoute,
    private signService: SignService,
    private myinfoService: MyinfoService,
    private router: Router,
    private dialogService: DialogService) {
      this.boardName = this.route.snapshot.params['boardName'];
    }

  ngOnInit() {
    // this.boardService.getPosts(this.boardName).then(response => {
    //   this.posts = response; 
    // });
    this.posts = this.route.snapshot.data['posts'];

    if (this.signService.isSignIn()) {
      this.myinfoService.getUser()
      .then(user => {
        this.loginUser = user;
      });
    }
  }

  delete(postId: number) {
    // if(confirm('정말 삭제하시겠습니까?')) {
    //   this.boardService.deletePost(postId).then(response => {
    //     window.location.reload();
    //   });
    // }

    this.dialogService.confirm('삭제 요청 확인', '정말로 삭제하시겠습니까?').afterClosed().subscribe(result => {
      if (result) {
        this.boardService.deletePost(postId).then(response => {
          window.location.reload();
        });
      }
    });
  }
}
