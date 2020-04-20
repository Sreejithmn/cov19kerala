import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';
import { CountModel } from 'src/app/common/countModel';
import { HistoryserviceService } from 'src/app/common/historyservice.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private historyService:HistoryserviceService) {
    this.historyService.historydata$.subscribe(item=>{
      this.data=item.countList;
     
      this.getLabelSets();
    })
   }
  @Input() data:CountModel[];
  datesneeded1:string[]=[];
  valuesneeded1:number[]=[];
  valuesneeded2:number[]=[];
  valuesneeded3:number[]=[];
  valuesneeded4:number[]=[];
  valuesneeded5:number[]=[];
  valuesneeded6:number[]=[];
  ngOnInit(): void {
    this.getLabelSets();
    console.log(this.data)
  }

  getLabelSets(){
    this.datesneeded1=[];
    this.valuesneeded1=[];
  this.valuesneeded2=[];
  this.valuesneeded3=[];
  this.valuesneeded4=[];
  this.valuesneeded5=[];
  this.valuesneeded6=[];
    let arrayOfDates = this.data.map(a => a.dateNotFormatted).reverse();
    let ActualMonths=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    for(let i=0;i<arrayOfDates.length;i=i+5){
      
      this.datesneeded1.push(ActualMonths[new Date(arrayOfDates[i]).getMonth()]+' '+new Date(arrayOfDates[i]).getDate() );
      this.valuesneeded1.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleDischargedFromIsolation);
      this.valuesneeded2.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peoplesHospitalisedToday);
      this.valuesneeded3.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleUnderIsolation);
      this.valuesneeded4.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).peopleUnderObservation);
      this.valuesneeded5.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).positiveCasesAdmitted);
      this.valuesneeded6.push(this.data.find(b=> b.dateNotFormatted==arrayOfDates[i]).symptomaticCasesAdmitted);
    }
    
  }
  public lineChartData: ChartDataSets[] = [
    { data: this.valuesneeded1, label: 'Home Isolation Discharge' },
   // { data: this.valuesneeded2, label: 'Series A' },
    //{ data: this.valuesneeded3, label: 'Series A' },
    //{ data: this.valuesneeded4, label: 'Series A' },
    { data: this.valuesneeded5, label: 'Positive cases admitted' },
    { data: this.valuesneeded6, label: 'Admissions with symptoms' }
  ];
  public lineChartLabels: Label[] = this.datesneeded1;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
     
   
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
