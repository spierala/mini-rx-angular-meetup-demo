import { Routes } from "@angular/router";
import { TodosShellComponent } from "./todos-shell/todos-shell.component";
import { provideEffects, provideFeature } from "@mini-rx/signal-store";
import { todosReducer } from "./state/todo.reducer";
import { TodoEffects } from "./state/todo.effects";

export const todoRoutes: Routes = [{
  path: '',
  component: TodosShellComponent,
  providers: [
    provideFeature('todos', todosReducer),
    provideEffects(TodoEffects)
  ]
}];
