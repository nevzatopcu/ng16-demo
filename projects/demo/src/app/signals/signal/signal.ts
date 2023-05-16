import { Component, signal } from '@angular/core';

@Component({
  template: `
    <div>
      <span>Count: {{ count() }}</span>
      <button (click)="increment()">increment</button>
      <button (click)="decrement()">decrement</button>
      <button (click)="reset()">reset</button>
    </div>
  `,
  standalone: true,
})
export class SignalExampleComponent {
  count = signal(0);

  reset(): void {
    this.count.set(0);
  }

  increment() {
    this.count.update((val) => val + 1);
  }

  decrement() {
    this.count.update((val) => val - 1);
  }
}
