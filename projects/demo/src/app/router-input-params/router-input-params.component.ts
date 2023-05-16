import { Component, Input } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { of } from 'rxjs';

@Component({
  standalone: true,
  template: '',
})
export class RouterInputParams {
  @Input() id!: string;
  @Input('subId') secondId!: string;
  @Input() communityName!: string;
  @Input() query!: string; // <path>?query=5;
}

const communityNameResolver: ResolveFn<string> = () => {
  return of('ngTurkey');
};

const routes: Routes = [
  {
    path: ':id',
    data: { communityName: communityNameResolver },
    children: [
      {
        path: ':subId',
        component: RouterInputParams,
      },
    ],
  },
];

// The feature needs to be enabled.
// bootstrapApplication(<component>, {
//     providers: [
//         provideRouter(routes, withComponentInputBinding())
//     ]
// })
