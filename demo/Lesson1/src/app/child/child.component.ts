import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // P-2-C
   @Input() childInput: string = "";

   // C-2-P
   @Output() childEvent = new EventEmitter<string>();

   service$: DataServiceService;

   constructor(service: DataServiceService) {
     this.childEvent.emit('Hello from child')
     this.service$ = service;
   }

  //Service
   receiveDataFromParent( ) {
     const data = this.service$.getData();
     console.log(data);
   }
}
