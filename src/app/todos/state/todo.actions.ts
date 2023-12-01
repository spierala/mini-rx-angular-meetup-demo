import { action, payload } from "ts-action";
import { Todo } from "../models";

export const loadTodos = action('bla' + 'load')
export const loadTodosSuccess = action('bla' + 'load success', payload<Todo[]>())
export const loadTodosError = action('bla' + 'load error')
