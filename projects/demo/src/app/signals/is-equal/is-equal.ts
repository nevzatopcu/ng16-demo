import { JsonPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { isEqual } from 'lodash-es';

@Component({
  template: `
    <div>
      <div class="input-group mb-3">
        <input
          placeholder="type your query param here"
          #input
          class="form-control"
          type="text"
          [value]="community().name"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="change(input.value)"
        >
          update community name
        </button>
      </div>
      <div>
        <span class="d-block">Signal Value: {{ community() | json }}</span>
        <span>Community name: {{ community().name }}</span>
      </div>
    </div>
  `,
  imports: [JsonPipe],
  standalone: true,
})
export class SignalIsEqualExampleComponent {
  // community = signal({ name: 'ngTurkey' }, { equal: isEqual });
  community = signal({ name: 'ngTurkey' });

  constructor() {
    // fires the effect after every single change.
    effect(() =>
      console.warn(`value of signal has changed to`, this.community())
    );
  }

  change(name: string): void {
    this.community.set({ name });
  }
}
