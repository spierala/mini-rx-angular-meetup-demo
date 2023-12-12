import { createFeatureStateSelector, createSelector } from '@mini-rx/signal-store';
import { Product } from '../models';

// State interface
export interface ProductsState {
    list: Product[];
}

// Memoized selectors
const getProductsFeature = createFeatureStateSelector<ProductsState>('products');
export const getProducts = createSelector(getProductsFeature, (state) => state.list);
