import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: '',
    loadChildren: () =>
      import('./products/product-routes').then(
        (v) => v.productRoutes,
      ),
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./todos/todos-shell/todos-shell.component').then(
        (v) => v.TodosShellComponent,
      ),
  },
  {
    path: 'counters',
    loadComponent: () =>
      import('./counter/counter-shell/counter-shell.component').then(
        (v) => v.CounterShellComponent,
      ),
  },
];
