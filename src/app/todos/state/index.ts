import { createFeatureStateSelector, createSelector } from "@mini-rx/signal-store";
import { Todo } from "../models";

export const todosFeatureKey = 'todos'

// State interface
export interface TodosState {
  list: Todo[];
}

// Memoized selectors
const getTodosFeature = createFeatureStateSelector<TodosState>(todosFeatureKey);
export const getTodos = createSelector(getTodosFeature, state => state.list);
