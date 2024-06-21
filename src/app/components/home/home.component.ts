import { Component } from '@angular/core';
import {Socials} from "../../utils/socials";
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  socials = new Socials().getSocials();
  posts$ !: Observable<Array<Post>>;
  
  constructor(private postService:PostService){}

  ngOnInit() {
    this.loadPosts();
    this.posts$ = this.getLatestPosts(this.posts$);
  }

  loadPosts() {
    this.posts$ = this.postService.getPosts();
  }

  getLatestPosts(postsList: Observable<Array<Post>>) {
    return postsList.pipe(
      map(posts => posts.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3)
      )
    );
  }
}
