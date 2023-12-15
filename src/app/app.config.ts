import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  ImmutableStateExtension,
  provideEffects,
  provideStore,
  ReduxDevtoolsExtension,
} from '@mini-rx/signal-store';
import { productReducer } from './products/state/product.reducer';
import { ProductEffects } from './products/state/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      reducers: {
        product: productReducer,
      },
      extensions: [
        new ReduxDevtoolsExtension({ name: 'meetup demo' }),
        new ImmutableStateExtension(),
      ],
    }),
    provideEffects(ProductEffects),
  ],
};
