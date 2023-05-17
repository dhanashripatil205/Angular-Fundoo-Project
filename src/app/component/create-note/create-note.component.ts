import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  @Output() refresh = new EventEmitter<any>();

  notes! : FormGroup;

  show:boolean=false
  dialogRef: any;

  constructor(  private formBuilder: FormBuilder,
    private noteServices: NoteService,  private snackBar: MatSnackBar,
    ) { 
  

  }

  showicon(){
    this.show = !this.show
  }

  ngOnInit(): void {
    this.notes = this.formBuilder.group({
      title: [''],
      description: ['']
    })

  }

  
    createNote(){
      let sendData = {
        title: this.notes.value.title,
        description: this.notes.value.description
      }

      
  this.noteServices.createNote(sendData).subscribe((result:any) =>{
    console.log(result);

    this.snackBar.open(result.status.message, '', {
      duration: 4000
    });
  });
  
window.location.reload()
// 


  
}


}