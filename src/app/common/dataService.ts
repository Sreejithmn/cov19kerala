import{Injectable} from '@angular/core';

import { ResponseModel } from './responseModel';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class DataService{

    private dataSource = new Subject<ResponseModel>();
    private showhistorysource = new Subject<boolean>();
    datasourceModel$ = this.dataSource.asObservable();
    showhistory$ = this.showhistorysource.asObservable();

    sendDataToService(data:ResponseModel){
        this.dataSource.next(data);
        
    }
}