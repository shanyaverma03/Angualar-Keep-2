import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  errMessage: string;
  public note: Note;
  public notes: Note[];

  constructor(private notesService: NotesService) {
    this.note = new Note();
    this.notes = [];
    this.errMessage = '';
  }

  ngOnInit() {

    this.notesService.getNotes().subscribe(
      data => {
        this.notes = data;
      },
      error => {

        this.errMessage = error.message;


      }
    );
  }

  addNote() {

    if (this.note.title == null || this.note.text == null) {
      this.errMessage = 'Title and Text both are required fields';
    }
    else {

      this.notesService.addNote(this.note).subscribe(
        data => {

          // this.list.push(data);
        },
        error => {
          this.errMessage = error.message;



        }
        

      )

      this.note = new Note();

    }
  }
}



