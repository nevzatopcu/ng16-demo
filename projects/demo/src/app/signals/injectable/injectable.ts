import {
  Component,
  InjectionToken,
  Input,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{ name }}</h1>`,
  standalone: true,
})
export class GreetingComponent {
  @Input({ required: true }) name!: string;
}

const GREETING = new InjectionToken<WritableSignal<string>>('GREETING', {
  factory() {
    const greeting = signal('world');

    effect(() => {
      console.warn(`From InjectionToken: Greeting is ${greeting()}`);
    });
    return greeting;
  },
});

@Component({
  standalone: true,
  template: `
    <app-greeting [name]="name()" />
    <div class="input-group mt-3">
      <input
        placeholder="type your name here"
        #input
        class="form-control"
        [value]="name()"
        type="text"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="name.set(input.value)"
      >
        change name
      </button>
    </div>
  `,
  imports: [GreetingComponent],
})
export class SignalInjectionTokenComponent {
  name = inject(GREETING);

  constructor() {
    effect(() => {
      console.warn(`From Component: Greeting is ${this.name()}`);
    });
  }
}
