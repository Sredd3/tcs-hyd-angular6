import { CourseName } from "./CourseNames";


//to transpile the ts file to js file use tsc filename.ts --target es5
export class Course {
    /*private title:string;
    private desc:string;
    private durationInDays:number;*/
    constructor(
        private _title:CourseName, 
        private _durationInDays:number, 
        private _desc?:string ){
        /*this.title = title;
        this.desc = desc;
        this.durationInDays = durationInDays;*/
    }
    get title():string{
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
    get desc():string {
        
        return this._desc || '';
    }
    set desc(desc:string){
        this._desc = desc;
    }
    get durationInDays():number{
        return this._durationInDays;
    }
    set durationInDays(duration:number){
        this._durationInDays = duration;
    }
}