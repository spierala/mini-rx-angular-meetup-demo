import { inject, Injectable } from "@angular/core";
import { Actions, createRxEffect, mapResponse } from "@mini-rx/signal-store";
import { ofType } from "ts-action-operators";
import { loadTodos, loadTodosError, loadTodosSuccess } from "./todo.actions";
import { TodoApiService } from "../todo-api.service";
import { mergeMap } from "rxjs";

@Injectable()
export class TodoEffects {
  actions$ = inject(Actions);
  todosApi = inject(TodoApiService)

  loadTodos$ = createRxEffect(this.actions$.pipe(
    ofType(loadTodos),
    mergeMap(() => this.todosApi.getTodos().pipe(
      mapResponse(
        res => loadTodosSuccess(res),
        err => loadTodosError
      )
    ))
  ))
}
