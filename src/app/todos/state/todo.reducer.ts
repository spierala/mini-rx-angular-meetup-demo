import { on, reducer } from 'ts-action';
import { TodosState } from "./index";
import { loadTodosSuccess } from "./todo.actions";

// Initial state
const initialState: TodosState = {
  list: [],
};

// Reducer
// The reducer is added to the Store in main.ts
export const todosReducer = reducer(initialState, on(loadTodosSuccess, (state, {payload}) => ({
  ...state,
  list: payload
})));
