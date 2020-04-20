import { Component } from '@angular/core';
import{Input} from '@angular/core';
import { DataService } from './common/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:string='display:none';
  title="";
  showhistory:boolean;
  showpanel:boolean;
  constructor(private dataserive:DataService){

  }

  getDisplaycondition(condition:boolean){
    console.log(condition);
    this.display=condition?'display:block':'display:none'
  }

  showcondition(show:boolean){
    this.showpanel= show?true:false;
  }
}
