import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value:{name:string, desc:string}, arg?:any):string{
    if (value === undefined){
        return '';
    }
    return ` 
        The product name is ${value.name}.
         The description is ${value.desc}`;
}

}
