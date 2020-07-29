import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable()
export class NotesService {

  constructor() {

  }

  getNotes(): Observable<Array<Note>> {

  }

  addNote(note: Note): Observable<Note> {
    
  }

}
