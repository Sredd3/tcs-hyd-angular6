import {  ValidationErrors, FormControl } from '@angular/forms';

export class CustomValidators {

   static coursenamevalidator(coursename: FormControl): ValidationErrors  {
        if((coursename.value as string).indexOf('') > 0){
            return {invalidcoursename: "Invalid course name"}
        }
        return null;
    }
   
}