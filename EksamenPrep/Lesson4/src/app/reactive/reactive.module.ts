import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordEqualDirective } from '../password-equal.directive';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordEqualDirective,
  ],
  exports: [
    FormComponent
  ]
})
export class ReactiveModule { }
