import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientOverviewComponent} from "./client-overview/client-overview.component";
import {ClientDetailsComponent} from "./client-details/client-details.component";

const routes: Routes = [{
  path: '',
  component: ClientOverviewComponent
}, {
   path: 'uid',
  component: ClientDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

export interface client {
  id: string,
  picture: string,
  first_name: string,
  last_name: string,
  email: string,
  wallet: string
}
