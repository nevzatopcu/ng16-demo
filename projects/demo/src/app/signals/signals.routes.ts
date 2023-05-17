import { Routes } from '@angular/router';
import { SignalFullComponent } from './all-together-example';
import { MutateSignalComponent } from './mutate/mutate.component';
import { SignalsComponent } from './signals.component';

const signalsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter',
  },
  {
    path: '',
    component: SignalsComponent,
    children: [
      {
        path: 'counter',
        component: SignalFullComponent,
      },
      {
        path: 'todo',
        component: MutateSignalComponent,
      },
    ],
  },
];

export default signalsRoutes;
