import { Component } from '@angular/core';
import {Billionaire, BillionaireServiceService} from "../../billionaire-service.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  $billionaires: Observable<Billionaire[]>
  constructor(private service: BillionaireServiceService) {
    this.$billionaires = service.getBillionaires()
  }

  ngOnInit(){
    this.$billionaires.subscribe(x => {
      console.debug(x)
    })
  }
}
