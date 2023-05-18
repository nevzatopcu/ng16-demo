import { Component, computed, signal } from '@angular/core';

@Component({
  template: `
    <div>
      <h2>Count: {{ count() }}</h2>
      <h2>Double: {{ doubleCount() }}</h2>
      <div class="d-flex gap-2 mt-2">
        <button type="button" class="btn btn-light" (click)="decrement()">
          decrement
        </button>
        <button type="button" class="btn btn-light" (click)="increment()">
          increment
        </button>
        <button type="button" class="btn btn-light" (click)="reset()">
          reset
        </button>
      </div>
    </div>
  `,
  standalone: true,
})
export class SignalComputedComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

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
