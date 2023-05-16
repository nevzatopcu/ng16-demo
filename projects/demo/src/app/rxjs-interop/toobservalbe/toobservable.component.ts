import { Component, Injector, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  template: '',
})
export class ToObservableExampleComponent {
  query = signal(0);
  injector = inject(Injector);

  query$ = toObservable(this.query);

  someMethod() {
    // requires injector or injection context.
    const queryClone = toObservable(this.query, { injector: this.injector });
  }
}

// https://github.com/angular/angular/blob/main/packages/core/rxjs-interop/src/to_observable.ts
