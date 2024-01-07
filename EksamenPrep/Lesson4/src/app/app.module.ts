import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveModule} from "./reactive/reactive.module";
import {TemplateModule} from "./template/template.module";
import {ReactiveFormsModule} from "@angular/forms";
import { PasswordEqualDirective } from './password-equal.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveModule,
    TemplateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
