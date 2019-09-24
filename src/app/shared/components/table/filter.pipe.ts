import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabfilter'
})
export class FilterPipe implements PipeTransform {

  num : number = 0;
  transform(value: any, filterText: any, filterColumns:string[]): any {

    console.log("FIltertext : " + filterText);
    if(filterText == "")
      return value;
    
      
    this.num = filterColumns.length;
      console.log(filterColumns +" filter text "+ this.num);

    
    return value.filter(val => {
      const resultColArray=filterColumns.filter(key => {
        return val[key].toLowerCase().includes(filterText.toLowerCase());
      });
      if(resultColArray.length > 0)
        return true;
      else
        return false;
    });
    
  }

}
