import { Component, Signal } from '@angular/core';
import { timer } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  template: ` <h2>Interval: {{ interval() }}</h2> `,
  standalone: true,
})
export class ToSignalExampleComponent {
  readonly obs$ = timer(0, 2000);

  interval: Signal<number | undefined> = toSignal(this.obs$); // returns readonly signal.

  // interval: Signal<number | undefined> = toSignal(this.obs$, {
  //   initialValue: 0,
  // });

  // interval: Signal<number | undefined> = toSignal(this.obs.pipe(startWith(0)), {requireSync: true});

  // has initial value
  // readonly behaviorSubject = new BehaviorSubject<number>(0);
  // signal = toSignal(
  //   this.behaviorSubject.asObservable().pipe(debounceTime(500)),
  //   { requireSync: true }
  // );

  // throw error.
  // readonly subject = new Subject<number>();
  // signalFromSubjectSync = toSignal(this.behaviorSubject, { requireSync: true });

  // fine. returns undefined until observable emits
  // signalFromSubject = toSignal(this.behaviorSubject);

  constructor() {
    // below methods are not available
    // this.counter.set()
    // this.counter.update()
  }

  someFunction() {
    // const signal = toSignal(this.behaviorSubject);
  }
}
