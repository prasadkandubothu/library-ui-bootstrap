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
      console.log(searchColumns +" search text "+ this.num);

    
    return value.filter(val => {
      return (val[searchColumns[0]].toLowerCase().includes(searchText) || val[searchColumns[1]].toLowerCase().includes(searchText))
    });
  }

}
