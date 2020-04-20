import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/dataService';
import { CountModel } from '../common/countModel';
import { HistoryserviceService } from '../common/historyservice.service';

@Component({
  selector: 'app-history-data',
  templateUrl: './history-data.component.html',
  styleUrls: ['./history-data.component.css']
})
export class HistoryDataComponent implements OnInit {
  showhistory:boolean=false;
  constructor(private historyservice:HistoryserviceService) { }
  districtwisedata:CountModel[]=[];
  months:string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  data:CountModel[]=[];
  dates:string[]=[];
  ngOnInit(): void {
    this.historyservice.historydata$.subscribe(data=>{
      
      this.districtwisedata=data.countList;
      this.showhistory=true;
      for(let i in this.districtwisedata){
        
      }
     
    })
    
  }

}
