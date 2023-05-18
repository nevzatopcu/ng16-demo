import { Routes } from '@angular/router';
import { RxjsInteropComponent } from './rxjs-interop.component';
import { ToSignalExampleComponent } from './tosignal/tosignal.component';
import { ToObservableExampleComponent } from './toobservable/toobservable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'to-signal',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RxjsInteropComponent,
    children: [
      {
        path: 'to-signal',
        component: ToSignalExampleComponent,
      },
      {
        path: 'to-observable',
        component: ToObservableExampleComponent,
      },
    ],
  },
];

export default routes;
