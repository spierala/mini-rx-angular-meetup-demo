import { action, payload } from 'ts-action';
import { Todo } from '../models';

export const loadTodos = action('[Todos] load');
export const loadTodosSuccess = action('[Todos] load success', payload<Todo[]>());
export const loadTodosError = action('[Todos] load error');

export const deleteTodo = action('[Todos] delete', payload<{ id: number }>());
