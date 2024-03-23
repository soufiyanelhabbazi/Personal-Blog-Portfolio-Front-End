import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  posts !: Observable<Array<Post>>;

  constructor(private postService:PostService){}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }
}
