import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = `${environment.api.url}`;
  constructor(private http: HttpClient) { }

  /**getAllInventories() use for get all dept inventories*/
  getAllInventories(deptId: any) {
    let header = new HttpHeaders().set(
      "Authorization", environment.api.accessToken
    );
    return this.http.get(this.url+'api/inventories/dept-id?deptID='+deptId, {headers:header});
  }
}
