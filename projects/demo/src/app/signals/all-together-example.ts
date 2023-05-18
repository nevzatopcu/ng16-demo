import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-full',
  standalone: true,
  template: `
    <h3>counter: {{ counter() }}</h3>
    <h3>is even: {{ isEven() }}</h3>
    <div class="d-flex gap-2 mt-4">
      <button class="btn btn-light" (click)="update()">Update</button>
      <button class="btn btn-light" (click)="updateToSameValue()">
        Update to the same value
      </button>
      <button class="btn btn-light" (click)="increment(1)">
        Increment + 1
      </button>
      <button class="btn btn-light" (click)="increment(2)">
        Increment + 2
      </button>
    </div>
  `,
})
export class SignalFullComponent {
  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0);

  constructor() {
    effect(() => {
      console.warn('Counter:', this.counter());
    });

    effect(() => {
      console.warn('isEven', this.isEven());
    });

    this.counter.set(1);
    this.counter.set(2);
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
  }

  update() {
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
    this.counter.update((current) => current + 1);
  }

  updateToSameValue() {
    this.counter.set(100);
    this.counter.set(100);
    this.counter.update(() => 100);
    this.counter.update(() => 100);
  }

  increment(amount: number) {
    this.counter.update((current) => current + amount);
  }
}
