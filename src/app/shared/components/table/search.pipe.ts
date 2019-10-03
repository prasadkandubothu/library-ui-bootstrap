import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  num : number = 0;
  transform(value: any, searchText: any, searchColumns:string[]): any {
    if(searchText == "")
      return value;
    
    this.num = searchColumns.length;
    
    return value.filter(val => {
      const resultColArray=searchColumns.filter(key => { 
       return val[key].toString().toLowerCase().includes(searchText);
      });
      if(resultColArray.length > 0)
        return true;
      else
        return false;
    });
  }

}
