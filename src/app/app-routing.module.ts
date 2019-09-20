import { BoardResolve } from './component/board/resolve/board-resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { SignupComponent } from './component/member/signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MyinfoComponent } from './component/member/myinfo/myinfo.component';
import { AuthGuard } from './guards/auth.guard';
import { BoardComponent } from './component/board/board.component';
import { PostComponent } from './component/board/post.component';
import { PostViewComponent } from './component/board/post-view.component';
import { PostModifyComponent } from './component/board/post-modify.component';
import { Error404Component } from './component/common/error/error404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'myinfo', component: MyinfoComponent, canActivate: [AuthGuard]},
  {path: 'board/:boardName', component: BoardComponent, resolve: {posts: BoardResolve}},
  {path: 'board/:boardName/post', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'board/:boardName/post/:postId', component: PostViewComponent},
  {path: 'board/:boardName/post/:postId/modify', component: PostModifyComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
