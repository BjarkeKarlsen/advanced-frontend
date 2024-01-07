import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path:'users',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule),
}, {
  path:'',
  component: HomeComponent,
}, {
  path:'**',
  component: PageNotFoundComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
