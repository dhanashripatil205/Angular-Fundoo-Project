import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',

  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() AllNotesData: any;
  @Output() editNote = new EventEmitter<any>();
  @Output() DisplayGetAllNotes = new EventEmitter<string>();


  title: any;
  description: any;
  refreshTrashToDisplay: any;
  msg: any;
  searchText:any
  constructor(public dialog: MatDialog, private dataService:DataService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.filterNotesAsPerSearch();
  }

    filterNotesAsPerSearch(){
      this.dataService.receiveSearchValue.subscribe((res) =>{
        this.searchText= res;
      })
      }  

  openDialauge(note: any) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      data: note,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.editNote.emit(result);

    });
  }

  refreshNotesData() {
    this.editNote.emit();   
  }


  reciveNotesDisplay($event: any) {
    console.log('Display Notes', $event);
    this.msg = $event;
    console.log('msg', this.msg);
    this.DisplayGetAllNotes.emit(this.msg);
  }
}
