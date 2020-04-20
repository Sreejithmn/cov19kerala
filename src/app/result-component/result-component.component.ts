import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../common/dataService';
import { ResponseModel } from '../common/responseModel';
import { CountModel } from '../common/countModel';
import { HttpClient } from '@angular/common/http';
import { HistoryserviceService } from '../common/historyservice.service';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {
  displayData;
  @Output() showhistory=new EventEmitter<boolean>();
  constructor(private dataservice:DataService,private http:HttpClient,private historyservice:HistoryserviceService) { }
  districtwisedata:CountModel[]=[];
  data:CountModel[]=[];
  ngOnInit(): void {
    this.dataservice.datasourceModel$.subscribe(data=>{
      
      this.districtwisedata=data.countList;
      
    })
  }

  getHistory(district:string){
    this.http.get('https://cors-anywhere.herokuapp.com/https://covid19-kerala-api.herokuapp.com/api/location?loc='+district)
    .subscribe(item=>{
      let response:ResponseModel;
      let counts:CountModel[]  =[]
    for(let i in item){
      for(let j in item[i]){
      counts.push(new CountModel(i,j,item[i][j].no_of_persons_discharged_from_home_isolation,
        item[i][j].no_of_persons_hospitalized_today,item[i][j].no_of_persons_under_home_isolation_as_on_today,
        item[i][j].no_of_persons_under_observation_as_on_today,item[i][j].no_of_positive_cases_admitted,
        item[i][j].no_of_symptomatic_persons_hospitalized_as_on_today));
      }
    }
    response = new ResponseModel('','success',counts);
   this.historyservice.sendhistorytoservice(response)
   this.showhistory.emit(true);
  this.displayData = response;
  return this.displayData;
    });
  }

}
