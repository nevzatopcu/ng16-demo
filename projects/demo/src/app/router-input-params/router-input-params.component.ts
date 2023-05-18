import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <div class="card p-3 shadow">
      <h2 class="text-center p-3">Router Inputs</h2>
      <div class="tab-content p-3 border bg-light">
        <div class="tab-pane active">
          <div class="input-group mb-3">
            <input
              class="form-control"
              placeholder="type your query param here"
              [(ngModel)]="value"
              type="text"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              routerLink="."
              [queryParams]="{ query: value }"
            >
              change query param
            </button>
          </div>

          <ul class="list-group">
            <li class="list-group-item">
              <span class="fw-bold">id from route path</span>: {{ idFromPath }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">another id from path</span>: {{ anotherId }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">community name from resolve</span>:
              {{ communityNameFromResolve }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">foo from route data</span>:
              {{ fooFromData }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">query parameter</span>: {{ query }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  imports: [RouterLink, FormsModule],
})
export default class RouterInputParams implements OnInit {
  @Input() idFromPath!: string;
  @Input('anotherIdFromPath') anotherId!: string;
  @Input() communityNameFromResolve!: string;
  @Input() fooFromData!: string;
  @Input() query!: string; // <path>?query=5;

  value: string = '';

  ngOnInit(): void {
    console.log('component oninit');
  }
}
