export class CountModel{
    public district:string;
    public date:string;
    public dateNotFormatted:string;
    public peopleDischargedFromIsolation:number;
    public peoplesHospitalisedToday:number;
    public peopleUnderIsolation:number;
    public peopleUnderObservation:number;
    public positiveCasesAdmitted:number;
    public symptomaticCasesAdmitted:number;

    constructor(date:string,district:string, peopleDischargedFromIsolation:number, peoplesHospitalisedToday:number,
        peopleUnderIsolation:number,peopleUnderObservation:number, positiveCasesAdmitted:number, symptomaticCasesAdmitted:number){
        this.district=district;
        this.peopleDischargedFromIsolation=peopleDischargedFromIsolation;
        this.peopleUnderIsolation=peopleUnderIsolation;
        this.peopleUnderObservation=peopleUnderObservation;
        this.peoplesHospitalisedToday=peoplesHospitalisedToday;
        this.positiveCasesAdmitted=positiveCasesAdmitted;
        this.symptomaticCasesAdmitted=symptomaticCasesAdmitted;
        this.date = this.convertFormat(date);
        this.dateNotFormatted = date;
    }

    convertFormat(date:string):string{
        return new Date(date).getDate()+'-'+(new Date(date).getMonth()+1)+'-'+new Date(date).getFullYear();
    }
}