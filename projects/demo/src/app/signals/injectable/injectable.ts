import {
  Component,
  InjectionToken,
  Input,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';

export const GREETING = new InjectionToken<WritableSignal<string>>('GREETING', {
  factory() {
    const greeting = signal('world');

    effect(() => {
      console.log(`Greeting is ${greeting()}`);
    });
    return greeting;
  },
});

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{ name }}</h1>`,
  standalone: true,
})
export class GreetingComponent {
  @Input({ required: true }) name!: string;
  // @Input({ required: true, alias: 'greetingName' }) name!: string;
}

@Component({
  standalone: true,
  template: `<app-greeting [name]="name()" />`,
  imports: [GreetingComponent],
})
export class SignalComponent {
  name = inject(GREETING);

  constructor() {
    effect(() => {
      console.log(`Greeting is ${this.name()}`);
    });
  }
}
