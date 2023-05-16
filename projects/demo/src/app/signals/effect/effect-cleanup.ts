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

  constructor() {
    const timerEffect = effect(
      (onCleanup) => {
        const timer = setTimeout(() => {
          console.log(`1 second ago, the count has changed`);
        }, 1000);

        onCleanup(() => {
          clearTimeout(timer);
          timerEffect.destroy();
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
