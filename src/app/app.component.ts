import { Component, inject, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { createFeatureStateSelector, createSelector, Store } from "@mini-rx/signal-store";
import { Todo, todosFeatureKey, TodosState } from "./state/todo-state";
import { CounterComponent } from "./counter/counter.component";

const getTodosFeature = createFeatureStateSelector<TodosState>(todosFeatureKey);
const getTodos = createSelector(getTodosFeature, state => state.list);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private store = inject(Store);
  todos: Signal<Todo[]> = this.store.select(getTodos);

  showCounter = signal(true);

  toggleShowCounter() {
    this.showCounter.update(state => !state);
  }
}
