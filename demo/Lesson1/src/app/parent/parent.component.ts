import { Component } from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // P-2-C
  dataToSend = "Hello from parent!";

  // C-2-P
  handleChildData(data: string) {
    console.log(data);
  }

  service$: DataServiceService;

  // Service
  constructor(private service: DataServiceService) {
    this.service$ = service;
  }
  sendDataToChild(){
    this.service$.setData('Hello from parent!');
  }
}
