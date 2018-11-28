import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService }  from '../models/post.service';
import {Post} from '../models/post';

import { CommentaireService }  from '../models/commentaire.service';
import {Commentaire} from '../models/Commentaire';
import { from } from 'rxjs';


@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.css']
})
export class DetailpostComponent implements OnInit {
  post:  Post = {
    id: null,
    title: null,
    body: null,
    author: null,
  };
  commentaire: Commentaire[];

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private CommentaireService: CommentaireService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.getCommentaire();
  }
 
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PostService.getPost(id)
      .subscribe(post => this.post = post);
  }

  getCommentaire(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CommentaireService.getCommentaire(id)
      .subscribe(commentaire => this.commentaire = commentaire);
  }

  addCommentaire( body: String, author: String):void{
  const post_id = +this.route.snapshot.paramMap.get('id');

    body = body.trim();
    author = author.trim();
    if (!body) { return; }
    this.CommentaireService.addCommentaire({ body, author, post_id } as Commentaire)
      .subscribe(Commentaire => { this.commentaire.unshift(Commentaire);});
  }
  
  addLike(id: number):void
  {
    this.CommentaireService.addLike(id)
    .subscribe(c => { this.commentaire = c;});
  }

  goBack(): void {
    this.location.back();
  } 
}
