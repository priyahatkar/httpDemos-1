import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iposts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 postUrl : string =`${environment.baseUrl}/posts`
  constructor(private _http : HttpClient) { }

  getAllPosts(): Observable<Iposts[]>{
    return this._http.get<Iposts[]>(this.postUrl)
  }

  getSinglePost(id :string): Observable<Iposts>{
    let singlePost = `${this.postUrl}/${id}`;
    return this._http.get<Iposts>(singlePost)
  }
}
