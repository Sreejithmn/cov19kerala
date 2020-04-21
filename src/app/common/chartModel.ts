export class ChartModel{
    public dates:string[]
    public values:number[]
    public label:string;

    constructor(dates:string[],values:number[],label:string){
        this.dates=dates;
        this.values=values;
        this.label=label;
    }

}