import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {}

  public getPosts():Observable<Array<Post>> {
    return this.http.get<Array<Post>>(environment.backend+"/posts");
  }
  public getPost(postID:number):Observable<Post> {
    return this.http.get<Post>(environment.backend+"/posts/"+postID);
  }
  public savePost(post: Post):Observable<Post> {
    return this.http.post<Post>(environment.backend+"/posts", post);
  }
  public updatePost(post: Post):Observable<Post> {
    return this.http.put<Post>(environment.backend+"/posts", post);
  }
  public deletePost(postID:number) {
    return this.http.delete<Post>(environment.backend+"/posts"+postID);
  }
}
