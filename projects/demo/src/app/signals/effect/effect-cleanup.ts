import { Component, computed, effect, signal } from '@angular/core';

@Component({
  template: `
    <h2>Count: {{ count() }}</h2>
    <div class="d-flex gap-2">
      <button class="btn btn-light" (click)="decrement()">decrement</button>
      <button class="btn btn-light" (click)="increment()">increment</button>
      <button class="btn btn-light" (click)="reset()">reset</button>
    </div>
  `,
  standalone: true,
})
export class SignalEffectCleanup {
  count = signal(0);

  constructor() {
    effect(
      (onCleanup) => {
        const count = this.count();

        const timer = setTimeout(() => {
          console.log(`1 second ago, the count became ${count}`);
        }, 1000);

        onCleanup(() => {
          console.log('^clean timer');
          clearTimeout(timer);
        });
      },
      { manualCleanup: true }
    );
  }

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
