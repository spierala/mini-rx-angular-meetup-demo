import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todos/todo-routes').then(mod => mod.todoRoutes),
  },
];
