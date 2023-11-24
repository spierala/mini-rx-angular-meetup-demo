import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, ReduxDevtoolsExtension } from "@mini-rx/signal-store";
import { todosFeatureKey, todosReducer } from "./state/todo-state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      reducers: {
        [todosFeatureKey]: todosReducer
      },
      extensions: [new ReduxDevtoolsExtension({name: 'meetup demo'})]
    })
  ]
};
