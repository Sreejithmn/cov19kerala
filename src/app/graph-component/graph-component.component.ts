import { Component, OnInit } from '@angular/core';
import { CountModel } from '../common/countModel';
import { HistoryserviceService } from '../common/historyservice.service';
import { ChartModel } from '../common/chartModel';
import { Subject, Observable } from 'rxjs';



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
  dataset:CountModel[]=[];
  dates:string[]=[];
  labelvalues:ChartModel[];
  datesneeded1:string[]=[];
  valuesneeded1:number[]=[];
  valuesneeded2:number[]=[];
  valuesneeded3:number[]=[];
  valuesneeded4:number[]=[];
  valuesneeded5:number[]=[];
  valuesneeded6:number[]=[];
  data:Observable<CountModel[]>;
  ngOnInit(): void {
    this.data = this.getvalues();
    this.getLabelSets();
  }

  getvalues(){
    let subject = new Subject<CountModel[]>();
    this.historyservice.historydata$.subscribe(data=>{
      
      this.districtwisedata=data.countList.reverse();
      this.showhistory=true;
      for(let i in this.districtwisedata){
        let month = new Date(this.districtwisedata[i].dateNotFormatted).getMonth()+1;
        this.dates.push(this.months[month]);
      }
      subject.next(this.districtwisedata);
    });
    return subject.asObservable();
  }

  getLabelSets(){
 
  this.data.subscribe(data=>{
    this.labelvalues=[];
    this.datesneeded1=[];
    this.valuesneeded1=[];
  this.valuesneeded2=[];
  this.valuesneeded3=[];
  this.valuesneeded4=[];
  this.valuesneeded5=[];
  this.valuesneeded6=[];
    let arrayOfDates = data.map(a => a.dateNotFormatted).reverse();
    let ActualMonths=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    for(let i=0;i<arrayOfDates.length;i=i+5){
      
      this.datesneeded1.push(ActualMonths[new Date(arrayOfDates[i]).getMonth()]+' '+new Date(arrayOfDates[i]).getDate() );
      this.valuesneeded1.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleDischargedFromIsolation);
      this.valuesneeded2.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peoplesHospitalisedToday);
      this.valuesneeded3.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleUnderIsolation);
      this.valuesneeded4.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleUnderObservation);
      this.valuesneeded5.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).positiveCasesAdmitted);
      this.valuesneeded6.push(data.find(b=> b.dateNotFormatted==arrayOfDates[i]).symptomaticCasesAdmitted);
    }
    this.labelvalues=[new ChartModel(this.datesneeded1,this.valuesneeded1,"No. of People Discharged from Isolation"),
      new ChartModel(this.datesneeded1,this.valuesneeded2,"No.of People hospitlised today"),
      new ChartModel(this.datesneeded1,this.valuesneeded3,"No. of people under home isolation"),
      new ChartModel(this.datesneeded1,this.valuesneeded4,"No. of people under observation isolation"),
      new ChartModel(this.datesneeded1,this.valuesneeded5,"No. of positive cases admitted"),
      new ChartModel(this.datesneeded1,this.valuesneeded6,"No. of people admitted with symptoms")]
      console.log(this.labelvalues)
    });
  }
  


}
