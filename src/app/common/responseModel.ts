import { CountModel } from './countModel';

export class ResponseModel{
    
    public date:string;
    public verdict:string;
    public countList:CountModel[];

    constructor(date:string, verdict:string,countList:CountModel[]){
        this.date=date;
        this.verdict=verdict;
        this.countList=countList;
    }
}