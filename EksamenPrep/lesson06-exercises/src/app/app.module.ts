import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HostsComponent } from './hosts/hosts.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HostCardComponent } from './host-card/host-card.component';
import {MatCardModule} from "@angular/material/card";
import {StoreModule} from "@ngrx/store";
import {hostsReducer} from "./state/hosts.reducer";
import {EffectsModule} from "@ngrx/effects";
import {HostEffects} from "./state/hosts.effects";
import { AccessCardComponent } from './access-card/access-card.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    AccessLogComponent,
    NavigationComponent,
    HomeComponent,
    HostsComponent,
    HostCardComponent,
    AccessCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    StoreModule.forRoot({hosts: hostsReducer}),
    EffectsModule.forRoot([HostEffects]),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
