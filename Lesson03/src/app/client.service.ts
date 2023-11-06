import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {client} from "./client/client-routing.module";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  rootUrl = `http://localhost:3000/exercise/client/`
  constructor(private http: HttpClient) { }

  getClients(): Observable<client[]> {
    return this.http.get<client[]>(this.rootUrl).pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        return throwError(() => e)
      }),
      retry(5)
    )
  }
}
