import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeptService {

  url = `${environment.api.url}`;
  constructor(private http: HttpClient) { }

  /**getDeptStores() use for get the dept data*/
  getDeptStores(storeId: any) {
    let header = new HttpHeaders().set(
      "Authorization", environment.api.accessToken
    );
    return this.http.get(this.url+'api/depts/store-id?storeID='+storeId, {headers:header});
  }
}
