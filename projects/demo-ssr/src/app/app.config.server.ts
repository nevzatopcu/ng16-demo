import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { MESSAGE } from './message.token';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: MESSAGE,
      useValue: 'This is server-side',
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
