import {createAction, props} from "@ngrx/store";
import { Host} from "../hosts.service";

export const loadHosts = createAction(
  `[Host/API] Load Host`
)

export const hostsLoaded = createAction(
  `[Host/API] Hosts loaded`,
  props<{ hosts: ReadonlyArray<Host>}>()
)
