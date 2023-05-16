import { Component, computed, effect, signal, untracked } from '@angular/core';

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
  userName = signal('newUser');
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      untracked(() => console.log('count changed by', this.userName()));
      if (this.count() % 5) {
        console.log('divisible by 5');
      }
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
