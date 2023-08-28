import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CourseListItemComponent} from "./course-list-item/course-list-item.component";
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseListItemComponent,
    CourseListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
