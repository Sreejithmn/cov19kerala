import { Component, OnInit } from '@angular/core';
import { CountModel } from '../common/countModel';
import { HistoryserviceService } from '../common/historyservice.service';



@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
 
  months:string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  showhistory:boolean=false;
  constructor(private historyservice:HistoryserviceService) { }
  districtwisedata:CountModel[]=[];
  data:CountModel[]=[];
  dates:string[]=[];
  ngOnInit(): void {
    this.historyservice.historydata$.subscribe(data=>{
      
      this.districtwisedata=data.countList.reverse();
      this.showhistory=true;
      for(let i in this.districtwisedata){
        let month = new Date(this.districtwisedata[i].dateNotFormatted).getMonth()+1;
        this.dates.push(this.months[month]);
      }
    })
    
  }
  


}
