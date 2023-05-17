import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  AllNotesDataNew = [];
  dataUpdated: any = [];
  token: any;
  httpService: any;
  notesArray: any;
  constructor(
    private notesService: NoteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.AllNotes().subscribe((result: any) => {
      this.AllNotesDataNew = result.data.data;

      this.dataUpdated = this.AllNotesDataNew.filter(function (obj: any) {
        return obj.isDeleted == false && obj.isArchived == false;
      });
      this.dataUpdated.reverse();
      console.log('this is that:', this.dataUpdated);
    });
  }

  receiveDisplayGetAllNotes($event: any) {
    console.log('Display All Notes', $event);
    this.getAllNotes();
  }
}
