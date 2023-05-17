import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList: any;

  constructor(private notes: NoteService) { }

  ngOnInit(): void {

    this.getArchiveNotes();
  }

  getArchiveNotes() {
    console.log('Get Archive List Successful');
    this.notes.getAllArchiveNotes().subscribe((response: any) => {
      console.log('Hi this is from archive',response);
      this.archiveList=response.data.data;
      // this.archiveList.reverse();
     
      console.log("Archive list", this.archiveList);
    })
  }


}
