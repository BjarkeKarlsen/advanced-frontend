import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldNgifComponent} from "./hello-world-ngif/hello-world-ngif.component";
import {HelloWorldDiComponent} from "./hello-world-di/hello-world-di-component";

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloWorldInterpolationComponent, HelloWorldBindingsComponent, HelloWorldNgifComponent, HelloWorldDiComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
