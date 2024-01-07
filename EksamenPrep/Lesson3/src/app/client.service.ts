import { Injectable } from '@angular/core';
import {Client} from "./client";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  host = 'http://localhost:3000/exercise/client/'
  constructor(private client: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.client.get<Client[]>(this.host).pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        return throwError(() => e);
      }),
      retry(5)
    )
  }
}
