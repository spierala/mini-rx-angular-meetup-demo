import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, ReduxDevtoolsExtension } from '@mini-rx/signal-store';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore({
            extensions: [new ReduxDevtoolsExtension({ name: 'meetup demo' })],
        }),
    ],
};
