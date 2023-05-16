import { Routes } from '@angular/router';

const requiredInputRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./required-inputs.component').then(
        (m) => m.RequiredInputsExampleComponent
      ),
  },
];

export default requiredInputRoutes;
