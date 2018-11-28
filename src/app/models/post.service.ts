import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private apiUrl = 'http://localhost/social/web/index.php';
  constructor(private http: HttpClient,) {}

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+"/api/blog",
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  getPost(id: Number): Observable<Post> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Post>(this.apiUrl+"/api/blog/"+id,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  addPost(post: Post): Observable<Post> {
    let body = `title=${post.title}&body=${post.body}&author=${post.author}`;
    return this.http.post<Post>(this.apiUrl+"/api/post",body,{headers:{'content-Type':'application/x-www-form-urlencoded'}});
  }
}