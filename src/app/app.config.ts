import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerExtension, provideStore, ReduxDevtoolsExtension } from "@mini-rx/signal-store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      // reducers: {
      //   [todosFeatureKey]: todosReducer
      // },
      extensions: [new ReduxDevtoolsExtension({name: 'meetup demo'}), new LoggerExtension()]
    })
  ]
};
