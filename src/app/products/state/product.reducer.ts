import { on, reducer } from 'ts-action';
import { ProductsState } from './index';
import {
  deleteProduct,
  loadProductsSuccess,
} from './product.actions';

const initialState: ProductsState = {
  list: [],
};

export const productReducer = reducer(
  initialState,
  on(loadProductsSuccess, (state, { payload }) => ({
    ...state,
    list: payload,
  })),
  on(deleteProduct, (state, { payload }) => ({
    ...state,
    list: state.list.filter((item) => item.id !== payload.id),
  })),
);
