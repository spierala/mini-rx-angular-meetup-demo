import { action, payload } from 'ts-action';
import { Product } from '../models';

export const loadProducts = action('[Products] load');
export const loadProductsSuccess = action('[Products] load success', payload<Product[]>());
export const loadProductsError = action('[Products] load error');

export const deleteProduct = action('[Products] delete', payload<{ id: number }>());
