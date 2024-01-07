import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { HostsService } from '../hosts.service';
import {hostsLoaded, loadHosts} from "./hosts.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class HostEffects {

  loadHosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadHosts),
    mergeMap(() => this.hostsService.getHosts().pipe(
      map(hosts => (hostsLoaded({hosts}))),
      catchError(() => {
        return EMPTY
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private hostsService: HostsService
  ) {}
}
