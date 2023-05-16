import { JsonPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { isEqual } from 'lodash-es';

@Component({
  template: `
    <div>
      <span>Community: {{ community() | json }}</span>
      <button (click)="change()">reset</button>
    </div>
  `,
  standalone: true,
  imports: [JsonPipe],
})
export class SignalExampleComponent {
  community = signal({ name: 'ngTurkey' }, { equal: isEqual });

  constructor() {
    // fires the effect after every single change.
    effect(() => console.log(this.community()));
  }

  change(): void {
    this.community.set({ name: 'ngTurkey' });
  }
}

@Component({
  template: `
    <div>
      <span>Community: {{ community() | json }}</span>
      <button (click)="change()">reset</button>
    </div>
  `,
  standalone: true,
  imports: [JsonPipe],
})
export class SignalEqualExampleComponent {
  community = signal({ name: 'ngTurkey' }, { equal: isEqual });

  constructor() {
    // fixed.
    effect(() => console.log(this.community()));
  }

  change(): void {
    this.community.set({ name: 'ngTurkey' });
  }
}
