import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post.service";
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  posts$ !: Observable<Array<Post>>;
  
  constructor(private postService:PostService){}

  ngOnInit() {
    this.loadPosts();
    this.posts$ = this.posts$.pipe(
      map(posts => posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
    );
  }

  loadPosts() {
    this.posts$ = this.postService.getPosts();
  }
}
