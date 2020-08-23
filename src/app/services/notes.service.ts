import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url: string='http://localhost:3000/api/v1/notes';
  private token: string;
  constructor(private httpClient:HttpClient, private authService: AuthenticationService) {

    this.token= authService.getBearerToken();
  }

  getNotes(): Observable<Array<Note>> {

    return this.httpClient.get<Array<Note>>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    });
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.url, note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    });
  }
}
