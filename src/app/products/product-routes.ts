import { Routes } from '@angular/router';
import { ProductShellComponent } from './products-shell/product-shell.component';
import { provideEffects, provideFeature } from '@mini-rx/signal-store';
import { todosReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effects';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
    providers: [
      provideFeature('products', todosReducer),
      provideEffects(ProductEffects),
    ],
  },
];
