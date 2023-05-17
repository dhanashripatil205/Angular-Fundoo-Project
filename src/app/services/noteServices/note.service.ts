import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  token: any;

  constructor(private HttpService: HttpService) {
    this.token = localStorage.getItem('token');


  }

  createNote(reqData: any) {

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.postService(
      'notes/addNotes',
      reqData,
      true,
      httpHeadersOption
    );
  }

  AllNotes() {
    //this.token = localStorage.getItem('token');


    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.getService(
      'notes/getNotesList',
      true,
      httpHeadersOption
    );
  }

  getAllTrashNotes() {
    //this.token = localStorage.getItem('token');


    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.getService(
      'notes/getTrashNotesList',
      true,
      httpHeadersOption
    );
  }

  getAllArchiveNotes() {
    //this.token = localStorage.getItem('token');


    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.getService( 'notes/getArchiveNotesList',true,httpHeadersOption);
  }

  updatenotes(reqdata: any, noteID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.HttpService.postService(
      'notes/updateNotes',
      reqdata,
      true,
      header
    );
  }

  trashNote(reqData: any) {
    //this.token = localStorage.getItem('token');

    console.log(this.token);

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.postService('notes/trashNotes',reqData,true,httpHeadersOption);
  }

  archiveNotes(reqData: any) {
    //this.token = localStorage.getItem('token');

    console.log(this.token);

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.HttpService.postService('notes/archiveNotes',reqData,true,httpHeadersOption);
  }

  notesColor(reqdata: any){

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':  this.token
      })
    }
  
    return this.HttpService.postService('notes/changesColorNotes',reqdata,true,header)
  }

  trashMoveNotes(reqData: any) {
    //this.token = localStorage.getItem('token');


    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.postService("notes/trashNotes", reqData,true, httpHeadersOption);
  }

  getPermenentdelete(reqData: any){
    //this.token = localStorage.getItem('token');


    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.postService("notes/deleteForeverNotes", reqData,true, httpHeadersOption);
  }

}
