import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counters',
    loadComponent: () =>
      import('./counter/counter-shell/counter-shell.component').then(
        (mod) => mod.CounterShellComponent,
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product-routes').then((mod) => mod.productRoutes),
  },
];
