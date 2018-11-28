import { Component, OnInit } from '@angular/core';
import { PostService }  from '../models/post.service';
import { Post } from '../models/post';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  
  posts: Post[];

  constructor(
    private postService: PostService,
    ) { }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts():void{
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
    //console.log(this.posts);
  }

  addPost(title: String, body: String, author: String):void{
    //console.log("passef");
    title = title.trim();
    body = body.trim();
    author = author.trim();

  if (!title) { return; }
  this.postService.addPost({ title, body, author, } as Post)
    .subscribe(post => { this.posts.push(post);});
  }

}