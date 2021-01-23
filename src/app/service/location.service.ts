import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url = `${environment.api.url}`;
  accessToken = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMzkxNDI4OH0.IK2SxTb7tBPqD18G0wHlWa9T1wSDZkZjOcje8CDq9YCqxG0Sc7IfJ9HtuPlM9n_DPh2Mpe9y-vADL8ZUHy6fJQ`;

  constructor(private http: HttpClient) { }

  /**getLocationList() use for get the location data*/
  getLocationList() {
    let header = new HttpHeaders().set(
      "Authorization", this.accessToken
    );
    return this.http.get(this.url+'api/store-locals', {headers:header});
  }
}
