import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{ name }}</h1>`,
  standalone: true,
  // inputs: [
  //   { required: true, alias: 'greetingName', name: 'name' }
  // ]
})
export class GreetingComponent {
  // @Input({ required: true }) name!: string;
  @Input({ required: true, alias: 'greetingName' }) name!: string;
}
