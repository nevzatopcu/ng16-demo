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
    path: 'hydration',
    loadComponent: () => import('./hydration/hydration.component'),
  },
];
