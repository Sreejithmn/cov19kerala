import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseModel } from './responseModel';

@Injectable({
  providedIn: 'root'
})
export class HistoryserviceService {

  historydataservice = new Subject<ResponseModel>()
  historydata$ = this.historydataservice.asObservable();
  constructor() { }

  sendhistorytoservice(response:ResponseModel){
    this.historydataservice.next(response);
  }
}
