import { Component, computed, effect, signal } from '@angular/core';

@Component({
  template: `
    <div>
      <span>Count: {{ count() }}</span>
      <span>Double: {{ doubleCount() }}</span>
      <button (click)="increment()">increment</button>
      <button (click)="decrement()">decrement</button>
      <button (click)="reset()">reset</button>
    </div>
  `,
  standalone: true,
})
export class SignalTimerComponent {
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
