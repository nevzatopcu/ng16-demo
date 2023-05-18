import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  template: `
    <div class="card p-3 shadow">
      <h2 class="text-center p-3">🚦 Signals</h2>
      <nav>
        <div class="nav nav-tabs mb-3">
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/basic-signal"
            routerLinkActive="bg-dark text-white"
          >
            Signal
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/computed"
            routerLinkActive="bg-dark text-white"
          >
            computed
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/effect"
            routerLinkActive="bg-dark text-white"
          >
            effect
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/injection-token"
            routerLinkActive="bg-dark text-white"
          >
            injection token
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/untracked"
            routerLinkActive="bg-dark text-white"
          >
            untracked
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/is-equal"
            routerLinkActive="bg-dark text-white"
          >
            is equal
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/counter"
            routerLinkActive="bg-dark text-white"
          >
            counter example
          </button>
          <button
            class="nav-link"
            type="button"
            routerLink="/signals/todo"
            routerLinkActive="bg-dark text-white"
          >
            todo example
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
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
})
export class SignalsComponent {}
