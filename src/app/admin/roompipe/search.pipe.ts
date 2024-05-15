import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  transform(DataArray: any[],searchString:string,searchKey:string): any {
    // const result:any=[]
    
    if(!DataArray || !searchString || !searchKey){
     return DataArray
    }
    else
    {
      return DataArray.filter((item:any)=>item.hotelname.trim().toLowerCase().includes(searchString.trim().toLowerCase()))

    

    }
    
   }

}
