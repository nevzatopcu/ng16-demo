import { Component } from '@angular/core';

@Component({
  template: `
    <div class="d-flex flex-column" style="gap:20rem">
      <img src="/assets/spa.png" width="100%" />
      <img src="/assets/prerender.png" width="100%" />
      <img src="/assets/hydration.png" width="100%" />
      <img src="/assets/resumability.png" width="100%" />
    </div>
  `,
  standalone: true,
})
export default class HydrationComponent {}
