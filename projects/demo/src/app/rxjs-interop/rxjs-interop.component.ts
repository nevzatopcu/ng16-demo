import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <div class="card p-3 shadow">
      <h2 class="text-center p-3">Rxjs Interop</h2>
      <nav>
        <div class="nav nav-tabs mb-3">
          <button
            class="nav-link"
            type="button"
            routerLink="/rxjs-interop/to-observable"
            routerLinkActive="bg-dark text-white"
          >
            to observable
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/rxjs-interop/to-signal"
            routerLinkActive="bg-dark text-white"
          >
            to signal
          </button>
        </div>
      </nav>
      <div class="tab-content p-3 border bg-light">
        <div class="tab-pane active">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class RxjsInteropComponent {}
