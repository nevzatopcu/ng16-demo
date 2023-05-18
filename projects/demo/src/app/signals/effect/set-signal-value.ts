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
export class SignalSetSignalValueComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  isBig = signal(false);

  constructor() {
    // Not recommended!
    effect(
      () => {
        if (this.count() > 10) {
          this.isBig.set(true);
        } else {
          this.isBig.set(false);
        }
      },
      { allowSignalWrites: true }
    );
    // Best practice
    const isBig = computed(() => this.count() > 5);
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
