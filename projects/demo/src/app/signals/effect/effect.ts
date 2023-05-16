import {
  Component,
  Injector,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';

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
  userName = signal('newUser');

  constructor() {
    // Requires injection context
    effect(() => {
      console.log('count changed and the current user is', this.userName());
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

@Component({
  template: '',
})
export class SignalTimer2Component {
  count = signal(0);
  injector = inject(Injector);

  initializeLogging(): void {
    effect(
      () => {
        console.log(`The count is: ${this.count()})`);
      },
      { injector: this.injector }
    );
  }
}
