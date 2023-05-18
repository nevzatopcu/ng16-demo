import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { MESSAGE } from './message.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    {
      provide: MESSAGE,
      useValue: 'This is client-side',
    },
  ],
};
