import { Component, OnInit } from '@angular/core';
import { Iposts } from '../../models/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public getPostId !: string;
  public postInfo !: Iposts
  constructor(private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getPostId = this._route.snapshot.params['postId'];
    console.log(this.getPostId );
    
  }

}
