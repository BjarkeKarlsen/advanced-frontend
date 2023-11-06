import {Component, OnInit} from '@angular/core';
import { ClientService} from "../../client.service";
import {Observable} from "rxjs";
import {client} from "../client-routing.module";

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit{
  client$: Observable<client[]> | null = null;

  constructor(private service: ClientService) {
  }

  ngOnInit(): void {
  this.client$ = this.service.getClients()
  }
}
