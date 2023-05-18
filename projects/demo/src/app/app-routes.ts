import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Home',
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.routes'),
    title: 'Signals',
  },
  {
    path: 'required-inputs',
    loadChildren: () => import('./required-inputs/required-inputs.routes'),
    title: 'Required Inputs',
  },
  {
    path: 'rxjs-interop',
    loadChildren: () => import('./rxjs-interop/rxjs-interop.routes'),
    title: 'Rxjs Interop',
  },
  {
    path: 'event-coalescing',
    loadComponent: () =>
      import('./event-coalescing/event-coalescing.component'),
    title: 'Configure Zonejs',
  },
  {
    path: 'esbuild-vite',
    loadComponent: () => import('./vite-esbuild/vite-esbuild.component'),
    title: 'Esbuild & Vite',
  },
  {
    path: 'router-inputs',
    loadChildren: () =>
      import('./router-input-params/router-input-params.routes'),
  },
];
