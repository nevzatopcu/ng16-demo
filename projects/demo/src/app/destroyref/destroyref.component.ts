import { Component, DestroyRef, inject } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  template: '',
})
export class DestroyRefComponent {
  readonly untilDestroy$ = injectUntilDestroy$();

  constructor() {
    interval(500).pipe(this.untilDestroy$()).subscribe(console.log);
  }
}

function injectUntilDestroy$() {
  const subject = new Subject<void>();
  inject(DestroyRef).onDestroy(() => subject.next());

  return () => takeUntil(subject.asObservable());
}
