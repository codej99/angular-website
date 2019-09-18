import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-post-modify',
  templateUrl: './post-modify.component.html',
  styleUrls: ['./post-modify.component.css']
})
export class PostModifyComponent implements OnInit {

  boardName: string;
  postId: number;
  post = {} as Post;
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boardService: BoardService,
    private formBuilder: FormBuilder) {
    this.boardName = this.route.snapshot.params['boardName'];
    this.postId = this.route.snapshot.params['postId'];
    this.postForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  // 폼 필드에 쉽게 접근하기 위해 getter 설정
  get f() { return this.postForm.controls; }

  ngOnInit() {
    this.boardService.viewPost(this.postId)
    .then(post => {
      this.post = post;
    });
  }

  submit() {
    this.boardService.modifyPost(this.post)
    .then(response => {
      this.router.navigate(['/board/' + this.boardName + '/post/' + this.postId]);
    });
  }
}
