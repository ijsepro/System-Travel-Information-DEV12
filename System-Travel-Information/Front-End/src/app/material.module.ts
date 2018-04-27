import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatInputModule,MatProgressBarModule,MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressBarModule,MatCardModule],
  exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatProgressBarModule,MatCardModule],
})

export class MaterialModule{}
