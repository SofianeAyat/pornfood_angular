import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Likes} from'./likes';

@Injectable({
  providedIn: 'root',
})
export class LikesService {

  private apiUrl = 'http://localhost/social/web/index.php';
  constructor(private http: HttpClient,) {}

  getLike() : Observable<Likes[]>{
    return this.http.get<Likes[]>(this.apiUrl+"/api/blog",
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  getLikes(id: Number): Observable<Likes[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Likes[]>(this.apiUrl+"/api/blog/"+id,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  addLikes(likes: Likes): Observable<Likes> {
    let body = `likes=${likes.nombrelike}`;
    return this.http.post<Likes>(this.apiUrl+"/api/blog/{id}/like/",body,{headers:{'content-Type':'application/x-www-form-urlencoded'}});
  }
}