import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Billionaire, BillionaireServiceService} from "../../billopnaire-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 $billionaires: Observable<Billionaire[]>;

  constructor(private service: BillionaireServiceService) {
    this.$billionaires = this.service.getBillionaires()
  }

  ngOnInit(){
    this.$billionaires.subscribe(x=> {
      console.log(x)
    })
  }
}
