import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { EditAddPostComponent } from './shared/components/edit-add-post/edit-add-post.component';
import { PostComponent } from './shared/components/post/post.component';

const routes: Routes = [
  {
    path : '', component : DashBoardComponent
  },
  {
    path : 'home', component : DashBoardComponent
  },
  {
    path : 'addPost', component : EditAddPostComponent
  },
  {
    path : 'home/:postId', component : PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
