import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  exports: [
    CommonModule,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
