import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  sharedData: string;
  constructor() {
    this.sharedData = "";
  }

  setData(data: string) {
    this.sharedData = data;
  }

  getData(): string {
    return this.sharedData;
  }
}
