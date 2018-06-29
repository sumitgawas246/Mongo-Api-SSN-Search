import { Injectable,OnInit } from '@angular/core';

import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService implements OnInit  {

  results:any;
  data: any;
  API_URL = 'http://10.102.8.203:3000/Expense/';

  constructor(private  http:  HttpClient) {}

ngOnInit()
{
  this.results='';
  this.data='';
  this.API_URL = '';
}
  getContacts(SSN){
    console.log(SSN);
    this.API_URL = 'http://10.102.8.203:3000/Expense/'.concat(SSN);
    console.log(this.API_URL);
    return this.http.get(this.API_URL)
    .map(result => this.results = result);
  }
  
}
