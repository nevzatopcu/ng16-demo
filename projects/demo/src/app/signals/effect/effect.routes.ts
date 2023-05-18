import { Routes } from '@angular/router';
import { SignalEffectComponent } from './effect';
import { SignalEffectCleanup } from './effect-cleanup';
import { SignalSetSignalValueComponent } from './set-signal-value';
import { SignalEffectRouteComponent } from './effect-route.component';

const signalEffectRoutes: Routes = [
  {
    path: '',
    component: SignalEffectRouteComponent,
    children: [
      {
        path: 'basic',
        component: SignalEffectComponent,
      },
      {
        path: 'cleanup',
        component: SignalEffectCleanup,
      },
      {
        path: 'set-signal-value',
        component: SignalSetSignalValueComponent,
      },
    ],
  },
];

export default signalEffectRoutes;
