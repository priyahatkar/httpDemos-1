import { Component, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  public postArray : Array<Iposts> = []
  constructor(private _postService : PostsService) { }

  ngOnInit(): void {
    this._postService.getAllPosts()
    .subscribe((res)=>{
      this.postArray = res;
      console.log(this.postArray );
      
    })
  }

}
