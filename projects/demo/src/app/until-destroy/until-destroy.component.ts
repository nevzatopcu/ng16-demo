import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  template: '',
})
export class UntilDestroyComponent {
  destroyRef = inject(DestroyRef);

  constructor() {
    interval(500).pipe(takeUntilDestroyed()).subscribe(console.log);
  }

  someMethod() {
    interval(500)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(console.log);
  }
}
