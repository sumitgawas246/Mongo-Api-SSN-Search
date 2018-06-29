import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { Headers, RequestOptions } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent  implements OnInit{
  
  searchTerm: any;
  users: any=[];
  public pieChartData:number[]=[];  
  pieChartOptions = {responsive: true};
  pieChartLabels =  ['Rent', 'Maid', 'Travelling', 'Investment', 'Grocessary','PersonalExpense'];
  pieChartColor:any = [{
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)',
        'rgba(255, 50, 0, 0.9)'
        ]
    }]


  constructor(private  _dataService:  DataService, private http:HttpClient) { }

  ngOnInit() 
  {
    // this.performSearch(123456789);
  }
 
 


performSearch(ssn):void
{
  this.users=[];
  console.log(this.users);
  this._dataService.getContacts(ssn).subscribe(
    results => {
              this.users.push(results);
              // console.log("result hai ye",JSON.stringify(results));
              // console.log("result hai ye",ssn);
              this.pieChartData = [this.users[0].Rent,this.users[0].Maid,this.users[0].Travelling,this.users[0].Investment,this.users[0].Grocessary,this.users[0].PersonalExpense];	
              console.log("yaha pe hu",this.users);
            }); 
}


 
onChartClick(event)
{
  console.log(event);
}


  }


