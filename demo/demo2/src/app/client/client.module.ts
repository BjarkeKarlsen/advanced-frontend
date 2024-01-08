import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientOverviewComponent } from './client-overview/client-overview.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import {Observable} from "rxjs";
import {Client} from "../client";
import {ClientService} from "../client.service";


@NgModule({
  declarations: [
    ClientOverviewComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [
    ClientOverviewComponent,
    ClientDetailsComponent
  ]
})
export class ClientModule implements OnInit {
  clients$!:  Observable<Client[]>;

  constructor(private service: ClientService) {
  }

  ngOnInit() {
    this.clients$ = this.service.getClients()
  }
}
