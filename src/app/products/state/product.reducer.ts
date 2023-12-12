import { on, reducer } from 'ts-action';
import { ProductsState } from './index';
import { deleteProduct, loadProductsSuccess } from './product.actions';

// Initial state
const initialState: ProductsState = {
  list: [],
};

// Reducer
// The reducer is added to the Store in main.ts
export const todosReducer = reducer(
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
