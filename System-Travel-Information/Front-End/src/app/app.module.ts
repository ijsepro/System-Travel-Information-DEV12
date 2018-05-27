import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewHotelComponent } from './new-hotel/new-hotel.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PlaceService} from './new-place/place.service';
import {HotelService} from './new-hotel/hotel.service';
import {HomepageComponent} from './homepage/homepage.component';

const approutes: Routes = [
  { path: 'dashboard-component', component: DashboardComponentComponent },
  { path: 'new-place', component: NewPlaceComponent},
  { path: 'new-hotel', component: NewHotelComponent },
  { path: 'homepage', component: HomepageComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    NewHotelComponent,
    NewPlaceComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(approutes),

  ],
  providers: [PlaceService, HotelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
