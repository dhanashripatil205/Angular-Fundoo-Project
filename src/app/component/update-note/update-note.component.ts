import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent {
  title: any;
  description: any;
  msg: any;
  id: any;
  @Output() DisplayGetAllNotes = new EventEmitter<string>();
  constructor(
    private notesService: NoteService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.description = data.description;
    this.id = data.id;
  }

  closeDialog() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    };
    this.notesService
      .updatenotes(reqData, this.id)
      .subscribe((response: any) => {
        console.log('update response', response);
      });
    this.dialogRef.close();
    window.location.reload();

  }

  reciveNotesDisplay($event: any) {
    console.log('Display Notes', $event);
    this.msg = $event;
    console.log('msg', this.msg);
    this.DisplayGetAllNotes.emit(this.msg);
  }
}
