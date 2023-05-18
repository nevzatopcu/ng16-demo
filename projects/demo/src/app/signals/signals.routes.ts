import { Routes } from '@angular/router';
import { SignalFullComponent } from './all-together-example';
import { SignalMutateComponent } from './mutate/mutate.component';
import { SignalsComponent } from './signals.component';
import { SignalIsEqualExampleComponent } from './is-equal/is-equal';
import { SignalExampleComponent } from './signal/signal';
import { SignalComputedComponent } from './computed/computed';
import { SignalUntrackedComponent } from './untracked/untracked';
import { SignalInjectionTokenComponent } from './injectable/injectable';

const signalsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic-signal',
  },
  {
    path: '',
    component: SignalsComponent,
    children: [
      {
        path: 'basic-signal',
        component: SignalExampleComponent,
      },
      {
        path: 'effect',
        loadChildren: () => import('./effect/effect.routes'),
      },
      {
        path: 'injection-token',
        component: SignalInjectionTokenComponent,
      },
      {
        path: 'untracked',
        component: SignalUntrackedComponent,
      },
      {
        path: 'computed',
        component: SignalComputedComponent,
      },
      {
        path: 'is-equal',
        component: SignalIsEqualExampleComponent,
      },
      {
        path: 'counter',
        component: SignalFullComponent,
      },
      {
        path: 'todo',
        component: SignalMutateComponent,
      },
    ],
  },
];

export default signalsRoutes;
