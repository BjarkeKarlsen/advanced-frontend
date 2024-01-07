import { Component } from '@angular/core';
import { Course } from "models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson1';
  course1 : Course = { name : "Frontend", code :"AFE", ects : 5 };
  course2 : Course = { name : "Back", code :"BED", ects : 5 };

  courses: Course[] = [ this.course1, this.course2 ];
}
