import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models/post.model";
import {MarkdownComponent, MarkdownService} from "ngx-markdown";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postID !: number;
  post !: Post;
  postContent!: any;

  constructor(private postService:PostService, private markdownService:MarkdownService, private route:ActivatedRoute){}

  ngOnInit() {
    this.postID = +this.route.snapshot.params['id'];
    this.getPost(this.postID);
    this.postContent = this.markdownService.parse(this.post?.content);
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    });
  }
}
