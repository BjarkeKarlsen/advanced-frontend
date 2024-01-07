import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../client";
import {ClientService} from "../../client.service";

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent {
  clients$!: Observable<Client[]>;

  constructor(private service: ClientService) {
    this.clients$ = service.getClients()
  }

  ngOnInit(){
    this.clients$.subscribe(x => {
      console.log(x)
    })
  }
}
