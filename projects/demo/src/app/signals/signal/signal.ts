import { Component, signal } from '@angular/core';

@Component({
  template: `
    <h1>Count: {{ count() }}</h1>
    <div class="d-flex gap-2">
      <button class="btn btn-light" (click)="increment()">increment</button>
      <button class="btn btn-light" (click)="decrement()">decrement</button>
      <button class="btn btn-light" (click)="reset()">reset</button>
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
