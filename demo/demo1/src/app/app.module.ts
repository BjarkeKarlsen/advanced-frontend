import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {CourseListComponent} from "./course-list/course-list.component";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    CourseListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
