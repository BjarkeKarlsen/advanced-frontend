import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../client.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, Observable, switchMap} from "rxjs";
import {Client} from "../../client";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client$!: Observable<Client | unknown>;

  constructor(private service: ClientService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    try {
      this.client$ = this.activatedRoute.paramMap.pipe(switchMap(c => {
          return this.service.getClient(parseInt((c.get('id') ?? "")));
        }),
        catchError((c) => c))
    } catch (e: any) {
      console.log(e)
    }
  }
}
