import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() note: any;

  @Output() NotesDisplay = new EventEmitter<string>();
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'default' },
    { code: '#f28b82', name: 'Pink' },
    { code: '#fbbc04', name: 'Orange' },
    { code: '#fff475', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'Teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'Dark blue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'Baby pink' },
    { code: '#e6c9a8', name: 'Brown' },
    { code: '#e8eaed', name: 'Grey' },
  ];

  show: boolean = true;
  refreshTrashAndArchiveNodeTodisplay: any;

  constructor(
    private notesService: NoteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  trash() {
    let sendDat = {
      noteIdList: [this.note.id],
      isDeleted: true,
    };
    this.notesService.trashNote(sendDat).subscribe((result: any) => {
      console.log('deleted note: ', result);
    });
  }

  archive() {
    let sendDat = {
      noteIdList: [this.note.id],
      isArchived: true,
    };
    this.notesService.archiveNotes(sendDat).subscribe((result: any) => {
      console.log('deleted note: ', result);
      window.location.reload();
    });
  }

  selectColor(colors: any) {
    let reqData = {
      color: colors,
      noteIdList: [this.note.id],
    };
    console.log(reqData);
    this.notesService.notesColor(reqData).subscribe((response: any) => {
      console.log(response);
      this.NotesDisplay.emit(response);
      // window.location.reload();
    });
  }

  restoreNotes() {
    let sendDat = {
      noteIdList: [this.note.id],
      isDeleted: false,
    };
    this.notesService.trashMoveNotes(sendDat).subscribe((result: any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note has been Restored succesfully', '', {
        duration: 4000,
      });
    });
  }
}
