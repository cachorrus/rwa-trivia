import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
        MatSliderModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
       } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule
  ],
  declarations: []
})
export class MatModule { }
