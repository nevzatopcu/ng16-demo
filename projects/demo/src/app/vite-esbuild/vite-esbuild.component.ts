import { Component } from '@angular/core';

@Component({
  template: `
    <h2>webpack</h2>
    <img src="/assets/webpack.png" width="100%" />
    <div class="mt-4">
      <h2>Vite & esbuild</h2>
      <img src="/assets/vite-esbuild.png" width="100%" />
    </div>
  `,
  standalone: true,
})
export default class ViteEsbuildComponent {}
