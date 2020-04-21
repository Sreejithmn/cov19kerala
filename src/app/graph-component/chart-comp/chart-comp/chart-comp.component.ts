import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CountModel } from 'src/app/common/countModel';
import { HistoryserviceService } from 'src/app/common/historyservice.service';
import { ChartModel } from 'src/app/common/chartModel';

@Component({
  selector: 'app-chart-comp',
  templateUrl: './chart-comp.component.html',
  styleUrls: ['./chart-comp.component.css']
})
export class ChartCompComponent implements OnInit {
  datesneeded1:string[]=[];
  valuesneeded1:number[]=[];
  valuesneeded2:number[]=[];
  valuesneeded3:number[]=[];
  valuesneeded4:number[]=[];
  valuesneeded5:number[]=[];
  valuesneeded6:number[]=[];
  lineChartData: ChartDataSets[] =[]
  lineChartLabels: Label[]
  constructor(private historyservice:HistoryserviceService ) { }
  
  @Input() dataset:ChartModel;
  ngAfterViewInit(){
    
  }
  ngOnInit(): void {
    this.lineChartData=[];
    this.lineChartLabels=[]
    this.lineChartData = [
      { data: this.dataset.values, label: this.dataset.label },
       ];
       this.lineChartLabels = this.dataset.dates;
  }
 

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
          borderWidth: 1,
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
