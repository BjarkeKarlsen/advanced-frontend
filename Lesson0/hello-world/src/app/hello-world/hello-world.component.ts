import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello World!</h1>
    <p>This template definition spans multiple lines</p>
  `,
  styles: ['h1 { front-weight: normal; }'],
})
export class HelloWorldComponent {}
