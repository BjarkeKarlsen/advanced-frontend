import { Component } from '@angular/core';
import {WarcraftService} from "../../WarcarftService";
import {Observable} from "rxjs";
import {Class} from "../../class.type";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  classes$: Observable<Class[]>
  constructor(service: WarcraftService) {
    this.classes$ = service.getClasses()
  }
}
