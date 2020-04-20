import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {StateList} from '../common/stateListModel';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { CountModel } from '../common/countModel';
import { ResponseModel } from '../common/responseModel';
import { DataService } from '../common/dataService';


@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})

export class FilterComponentComponent implements OnInit { 
  dropdownList= [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
   proxyurl = "https://covid19-kerala-api.herokuapp.com/";
  readonly URL="https://covid19-kerala-api.herokuapp.com/api/location";
  posts:any;
  displayData;
  @Output() goClicked = new EventEmitter<boolean>();
  constructor(private http:HttpClient,private dataService:DataService) {

   }
   

   getPosts():any{
     this.http.get('https://cors-anywhere.herokuapp.com/https://covid19-kerala-api.herokuapp.com/api/location')
     .pipe(map(responseData=>{
      const locArray=[];
       for(const key in responseData){
        locArray.push({...responseData[key]});
       }
       return locArray;
     })).subscribe(item=>{
       
      let tmp=[]
      for(let i=0; i < item[0].length; i++) {
        tmp.push({ itemid: i, itemtext: item[0][i] });
      }
      this.dropdownList=tmp;
       for(var i in item[0]){
         let state = new StateList();
         state.itemid=+i;
         state.itemtext=item[0][+i];
         this.dropdownList.push(state);
       }
       return this.dropdownList;
     });
   }
  
  ngOnInit(): void {
     this.getPosts();
     this.getAllLatestData();
     
      
    this.dropdownSettings = {  
      singleSelection: false,
      idField: 'itemid',
      textField: 'itemtext',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    
  }
  
  getAllLatestData() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://covid19-kerala-api.herokuapp.com/api/location?date=latest')
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
    response = new ResponseModel(i,'success',counts);
    this.dataService.sendDataToService(response)
    break; 
  }

  this.displayData = response;
  return this.displayData;
     });
  }


  onItemSelect(event){

  }

  onSelectAll(event){

  }

  getData(event){
    this.goClicked.emit(true);
  }
}

