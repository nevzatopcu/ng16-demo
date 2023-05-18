import { Component, inject } from '@angular/core';
import { MESSAGE } from './message.token';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p><strong>Message:</strong> {{ message }}</p>`,
  styles: [
    `
      strong {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  message = inject(MESSAGE);
}
