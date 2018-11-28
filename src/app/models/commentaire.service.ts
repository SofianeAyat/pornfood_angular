import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Commentaire} from'./commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private apiUrl = 'http://localhost/social/web/index.php';
  constructor(private http: HttpClient,) {}

  getCommentaires() : Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(this.apiUrl+"/api/blog",
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  getCommentaire(id: Number): Observable<Commentaire[]> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Commentaire[]>(this.apiUrl+"/api/blog/"+id+"/comment",
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  addCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    let body = `&body=${commentaire.body}&author=${commentaire.author}`;
    return this.http.post<Commentaire>(this.apiUrl+"/api/post/"+commentaire.post_id+"/comment",body,{headers:{'content-Type':'application/x-www-form-urlencoded'}});
  }

  addLike( id: number): Observable<Commentaire[]> {
    return this.http.post<Commentaire[]>(this.apiUrl+"/api/comment/"+id+"/like",{headers:{'content-Type':'application/x-www-form-urlencoded'}});
  }
}
