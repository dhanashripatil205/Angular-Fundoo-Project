import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl="http://fundoonotes.incubation.bridgelabz.com/api/";


  constructor(private httpClient : HttpClient) { }

  postService(url:string, data:any, token:boolean,httpAuthOptions:any){
    return this.httpClient.post(this.baseurl + url, data,token && httpAuthOptions )
  }

  getService(url: string, token: boolean, httpAuthOptions: any){
    return this.httpClient.get(this.baseurl + url, token && httpAuthOptions);
  }


}
