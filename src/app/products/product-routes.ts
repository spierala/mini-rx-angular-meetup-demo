import { Routes } from '@angular/router';
import { ProductShellComponent } from './products-shell/product-shell.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
    // Lazy load the products state
    // providers: [
    //   provideFeature('products', productReducer),
    //   provideEffects(ProductEffects),
    // ],
  },
];
