import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';  
import { MenuItem } from 'src/app/app.models';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public locationList: any;
  public storeZip: any;
  constructor(
    public router: Router,
    private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocationList();
  }

  /**getTransactionHistory() use for get the transaction history data */
  getLocationList() {
    this.locationService.getLocationList()
      .subscribe((res: any) => {
        console.log(res);
          this.locationList = res;
      })
  }

  back() {
    this.router.navigate(['/orderList']);
  }

  getDepts(storeId: any) {
    this.router.navigate(['/menu'], { queryParams: { storeId: storeId } });
  }
  
  // public slides = []; 
  // public specialMenuItems:Array<MenuItem> = [];
  // public bestMenuItems:Array<MenuItem> = [];
  // public todayMenu!:MenuItem;

  // public settings: Settings;
  // constructor(public appSettings:AppSettings, public appService:AppService ) {
  //   this.settings = this.appSettings.settings;  
  // }

  // ngOnInit(): void {
  //   this.getSlides();
  //   this.getSpecialMenuItems();
  //   this.getBestMenuItems();
  //   this.getTodayMenu();
  // }

  // public getSlides(){
  //   this.appService.getHomeCarouselSlides().subscribe((res:any)=>{
  //     this.slides = res;
  //   });
  // }
 
  // public getSpecialMenuItems(){
  //   this.appService.getSpecialMenuItems().subscribe(menuItems=>{
  //     this.specialMenuItems = menuItems;
  //   });
  // } 

  // public getBestMenuItems(){
  //   this.appService.getBestMenuItems().subscribe(menuItems=>{
  //     this.bestMenuItems = menuItems;
  //   });
  // }

  // public getTodayMenu(){
  //   this.appService.getMenuItemById(23).subscribe(data=>{ 
  //     this.todayMenu = data;  
  //   });
  // }  
}
