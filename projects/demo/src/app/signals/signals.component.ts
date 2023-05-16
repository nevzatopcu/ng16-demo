import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <div class="mt-4">
      <button
        class="btn btn-light"
        routerLink="/signals/counter"
        routerLinkActive="text-info"
      >
        counter example
      </button>
      <button
        class="btn btn-light"
        routerLink="/signals/todo"
        routerLinkActive="text-info"
      >
        todo example
      </button>
    </div>
    <div class="container mt-4">
      <router-outlet />
    </div>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
})
export class SignalsComponent {}
