import { Component, computed, effect, signal } from '@angular/core';

@Component({
  template: `
    <h2>Count: {{ count() }}</h2>
    <h2>Double: {{ doubleCount() }}</h2>
    <div class="d-flex gap-2">
      <button class="btn btn-light" (click)="decrement()">decrement</button>
      <button class="btn btn-light" (click)="increment()">increment</button>
      <button class="btn btn-light" (click)="reset()">reset</button>
    </div>
  `,
  standalone: true,
})
export class SignalEffectComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.warn(`Count changed to ${this.count()}`);
    });
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
