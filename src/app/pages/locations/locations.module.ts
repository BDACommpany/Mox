import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LocationsComponent } from './locations.component';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const routes = [
  { path: '', component: LocationsComponent, pathMatch: 'full'  }
]; 
@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    PipesModule,
    Ng2SearchPipeModule     
  ]
})
export class LocationsModule { }
