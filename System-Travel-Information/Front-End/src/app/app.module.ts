import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {MdDialogModule} from '@angular/material';


import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewHotelComponent } from './new-hotel/new-hotel.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import {MaterialModule} from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PlaceService} from './new-place/place.service';
import {HotelService} from './new-hotel/hotel.service';
import {HomepageComponent} from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { TestComponent } from './test/test.component';


const approutes: Routes = [
  { path: 'dashboard-component', component: DashboardComponentComponent },
  { path: 'new-place', component: NewPlaceComponent},
  { path: 'new-hotel', component: NewHotelComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registation', component: RegistationComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent},
  // { path : '', redirectTo:'/sign-in', pathMatch : 'full'}

  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    NewHotelComponent,
    NewPlaceComponent,
    HomepageComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    RegistationComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(approutes),
    // MdDialogModule


  ],
  providers: [PlaceService, HotelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
