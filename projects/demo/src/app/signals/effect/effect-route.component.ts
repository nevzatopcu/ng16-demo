import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <nav class="nav">
      <a
        class="nav-link rounded"
        routerLink="basic"
        routerLinkActive="bg-dark text-white"
      >
        basic example
      </a>

      <a
        class="nav-link rounded"
        routerLink="cleanup"
        routerLinkActive="bg-dark text-white"
      >
        cleanup
      </a>

      <a
        class="nav-link rounded"
        routerLink="set-signal-value"
        routerLinkActive="bg-dark text-white"
      >
        set signal value
      </a>
    </nav>
    <div class="mt-4">
      <router-outlet />
    </div>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
})
export class SignalEffectRouteComponent {}
