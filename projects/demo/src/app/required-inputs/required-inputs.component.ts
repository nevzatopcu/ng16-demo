import { Component } from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { RequiredInputHostDirectiveComponent } from './host-directive';
import { AsyncPipe } from '@angular/common';

@Component({
  template: `
    <div class="card p-3 shadow">
      <h2 class="text-center p-3">Required Inputs</h2>
      <div class="tab-content p-3 border bg-light">
        <div class="tab-pane active">
          <app-greeting [greetingName]="name" />
          <app-required-inputs-host-directive />
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [GreetingComponent, RequiredInputHostDirectiveComponent, AsyncPipe],
})
export class RequiredInputsExampleComponent {
  name: string = 'ng Turkey';
}
