import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HostsService, Host } from '../hosts.service';
import {loadHosts} from "../state/hosts.actions";
import { Store } from '@ngrx/store';
import {AppState} from "../state/app-state";

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {

  hosts$: Observable<ReadonlyArray<Host>> = this.store.select('hosts');

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() : void {
    this.store.dispatch(loadHosts())
  }
}
