import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { createFeatureStateSelector, createSelector, Store } from "@mini-rx/signal-store";
import { Todo, todosFeatureKey, TodosState } from "./state/todo-state";

const getTodosFeature = createFeatureStateSelector<TodosState>(todosFeatureKey);
const getTodos = createSelector(getTodosFeature, state => state.list);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private store = inject(Store);

  todos: Signal<Todo[]> = this.store.select(getTodos);
}
