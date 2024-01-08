import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  routes$: { [key: string]: string };

  constructor() {
    this.routes$ = {
      Home: "",
      Client: "clients",
    };
  }

  getRouteKeys(): string[] {
    return Object.keys(this.routes$);
  }
}
