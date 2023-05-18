import { Component, computed, effect, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
    <h2>Count: {{ count() }}</h2>
    <div class="d-flex gap-2">
      <button class="btn btn-light" (click)="decrement()">decrement</button>
      <button class="btn btn-light" (click)="increment()">increment</button>
      <button class="btn btn-light" (click)="reset()">reset</button>
    </div>
    <div class="input-group mt-3">
      <input
        placeholder="type user name here"
        class="form-control"
        [value]="userName()"
        #input
        type="text"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="userName.set(input.value)"
      >
        set user name
      </button>
    </div>
  `,
  imports: [FormsModule],
  standalone: true,
})
export class SignalUntrackedComponent {
  count = signal(0);
  // TODO: Update user name.
  userName = signal('ng Turkey');

  constructor() {
    effect(() => {
      const count = this.count();
      const userName = untracked(() => this.userName());
      console.log(`Count: ${count}, userName: ${userName}`);
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
