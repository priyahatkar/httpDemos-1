import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/service/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'httpDemos';
  constructor(private _postsService : PostsService){}
  ngOnInit(): void {
    this._postsService.getAllPosts()
      .subscribe(
        (res)=>{
          console.log(res);
        }
        // (err)=>{
        //   console.log(err);
        // }
      )
      this._postsService.getSinglePost('5')
        .subscribe(res => console.log(res)
        )
  }
}
