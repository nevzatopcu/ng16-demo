import { Component, Injector, Signal, inject } from '@angular/core';
import { BehaviorSubject, Subject, interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  template: '',
})
export class ToSignalExampleComponent {
  readonly obs = interval(500);

  private readonly injector = inject(Injector);

  // require initial value:
  counter: Signal<number> = toSignal(this.obs, { initialValue: 0 }); // returns readonly signal.

  // has initial value
  readonly behaviorSubject = new BehaviorSubject<number>(0);
  signal = toSignal(this.behaviorSubject, { requireSync: true });

  // throw error.
  readonly subject = new Subject<number>();
  signalFromSubjectSync = toSignal(this.behaviorSubject, { requireSync: true });

  // fine. returns undefined until observable emits
  signalFromSubject = toSignal(this.behaviorSubject);

  constructor() {
    // below methods are not available
    // this.counter.set()
    // this.counter.update()
  }

  someFunction() {
    const signal = toSignal(this.behaviorSubject, { injector: this.injector }); // requires injection context or injector.
  }
}
