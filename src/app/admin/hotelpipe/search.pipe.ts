import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  transform(dataArray: any[], searchString: string, searchKey: string): any {
    if (!dataArray || !searchString || !searchKey) {
      return dataArray;
    } else {
      searchString = searchString.trim().toLowerCase();
      return dataArray.filter((item: any) => {
        if (item[searchKey]) { // Check if the property exists in the item
          return item[searchKey].trim().toLowerCase().includes(searchString);
        }
        return false; // Return false if the property doesn't exist
      });
    }
  }

}
