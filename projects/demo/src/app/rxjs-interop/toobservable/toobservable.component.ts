import { Component, Injector, OnInit, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  template: `
    <h1>Count: {{ count }}</h1>
    <div class="d-flex gap-2">
      <button class="btn btn-light" (click)="decrement()">decrement</button>
      <button class="btn btn-light" (click)="increment()">increment</button>
      <button class="btn btn-light" (click)="reset()">reset</button>
    </div>
  `,
  standalone: true,
})
export class ToObservableExampleComponent implements OnInit {
  countSignal = signal(0);
  injector = inject(Injector);

  private count$ = toObservable(this.countSignal);
  count = 0;

  ngOnInit(): void {
    this.count$.subscribe({
      next: (q) => (this.count = q),
      complete: () => console.log('subscription completed'),
    });
  }

  reset(): void {
    this.countSignal.set(0);
  }

  increment() {
    this.countSignal.update((val) => val + 1);
  }

  decrement() {
    this.countSignal.update((val) => val - 1);
  }

  someMethod() {
    toObservable(this.countSignal, { injector: this.injector }).subscribe({
      next: (q) => (this.count = q),
      complete: () => console.log('subscription completed'),
    });
  }
}

// https://github.com/angular/angular/blob/main/packages/core/rxjs-interop/src/to_observable.ts
