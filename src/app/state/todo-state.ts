import { reducer } from 'ts-action';

export const todosFeatureKey = 'todos'

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

// State interface
export interface TodosState {
  list: Todo[];
}

// Initial state
const initialState: TodosState = {
  list: [
    { id: 1, title: 'Car Wash', isDone: false },
    { id: 2, title: 'Dish Wash', isDone: false },
    { id: 3, title: 'Relax', isDone: true },
  ],
};

// Reducer
// The reducer is added to the Store in main.ts
export const todosReducer = reducer(initialState);
