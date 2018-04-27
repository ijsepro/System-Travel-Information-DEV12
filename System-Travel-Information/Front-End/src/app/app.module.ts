import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"


import { AppComponent } from './app.component';
import {MaterialModule} from './material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EditPlaceComponentComponent } from './edit-place-component/edit-place-component.component';


export const editRoute: Routes =[
  {
    path: "edit-place-component",
    component: EditPlaceComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EditPlaceComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(editRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
