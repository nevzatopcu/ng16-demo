import { Component } from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { RequiredInputHostDirectiveComponent } from './host-directive';

@Component({
  template: `
    <app-greeting [name]="name" />
    <app-required-inputs-host-directive />
  `,
  standalone: true,
  imports: [GreetingComponent, RequiredInputHostDirectiveComponent],
})
export class RequiredInputsExampleComponent {
  name = 'ng turkey';
}
