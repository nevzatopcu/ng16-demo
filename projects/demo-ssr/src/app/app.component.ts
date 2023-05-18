import { Component, inject } from '@angular/core';
import { MESSAGE } from './message.token';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p><strong>Message:</strong> {{ message }}</p>`,
})
export class AppComponent {
  message = inject(MESSAGE);
}
