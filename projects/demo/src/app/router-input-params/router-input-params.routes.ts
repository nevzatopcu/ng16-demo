import { ResolveFn, Routes } from '@angular/router';
import { map, timer } from 'rxjs';

const communityNameResolver: ResolveFn<string> = () => {
  return timer(500).pipe(map(() => 'ngTurkey'));
};

const routes: Routes = [
  {
    path: ':idFromPath',
    resolve: { communityName: communityNameResolver },
    data: { fooFromData: 'foo' },
    children: [
      {
        path: ':anotherIdFromPath',
        loadComponent: () => import('./router-input-params.component'),
      },
    ],
  },
];

export default routes;
