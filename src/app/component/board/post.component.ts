import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  boardName: string;
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private signService: SignService,
    private myinfoService: MyinfoService,
    private boardService: BoardService
  ) {
    this.postForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
    this.boardName = this.route.snapshot.params['boardName'];
  }

  // 폼 필드에 쉽게 접근하기 위해 getter 설정
  get f() { return this.postForm.controls; }

  submit() {
    if(this.signService.isSignIn && this.postForm.valid) {
      this.myinfoService.getUser().then( user => {
        this.boardService.addPost(this.boardName, user.name, this.postForm.value.title, this.postForm.value.content)
        .then(response => {
          this.router.navigate(['/board/' + this.boardName]);
        });
      });      
    }
  }
}