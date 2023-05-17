import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  TrashList: any;

  constructor(private notes : NoteService, private snackBar: MatSnackBar) { }



  ngOnInit(): void {
    this.trashAllNotes()

  }

  refreshTrashNotes(event:any){
    // this.trashAllNotes();
  }



  trashAllNotes(){
    console.log("Get all trash notes");
    this.notes.getAllTrashNotes().subscribe((response : any) => {
      console.log ('Hi this is trash Note', response);
      this.TrashList=response.data.data;
      this.TrashList.reverse();
      console.log(this.TrashList);
    });
    
    }


    deleteforever(noteid:any)
{
  let reqData={
   
    noteIdList:[noteid.id]
  }
  console.log(reqData)
  this.notes.getPermenentdelete(reqData).subscribe((response: any) => {
    console.log("Note deleted forever Successfully",response);
    window.location.reload();
})
}


}
