import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationSearch'
})
export class LocationSearchPipe implements PipeTransform {

  transform(value:any, args?:any) {
    let storeZip = new RegExp(args, 'ig');
    if (value) {
      return value.filter((user:any) => {
        console.log(user);
        // if (user.profile.name) {
        //   return user.profile.name.search(searchText) !== -1;
        // }
        // else{
        //   return user.username.search(searchText) !== -1;
        // }
      });
    }
  }

}
