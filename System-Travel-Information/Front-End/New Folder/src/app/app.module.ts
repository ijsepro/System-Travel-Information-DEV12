import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NewHotelComponent } from "./new-hotel/new-hotel.component";

export const AdminRoutes: Routes =[
  {
    path: 'dashboard-component',
      component: DashboardComponentComponent,
      children: [
        { path:'new-place', component: NewPlaceComponent}
      ]
  }
  ];

export const routes: Routes =[
  {
    path: 'new-place',
      component: NewPlaceComponent
  }
]

export const hotelRoute: Routes =[
  {
    path: 'new-hotel',
    component: NewHotelComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewPlaceComponent,
    NewHotelComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AdminRoutes),
    RouterModule.forRoot(routes),
    RouterModule.forRoot(hotelRoute),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
