import { inject, Injectable } from '@angular/core';
import { FeatureStore } from '@mini-rx/signal-store';
import { Todo } from './models';
import { TodoApiService } from './todos-api.service';

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

@Injectable({
  providedIn: 'root',
})
export class TodosStoreService extends FeatureStore<TodoState> {
  private api = inject(TodoApiService);

  private todos = this.select((state) => state.list);
  todosDone = this.select((state) =>
    state.list.filter((item) => item.isDone),
  );
  todosNotDone = this.select((state) =>
    state.list.filter((item) => !item.isDone),
  );

  constructor() {
    super('todo', initialState);
  }

  loadTodos(): void {
    this.api
      .getTodos()
      .subscribe((todos) => this.setState({ list: todos }));
  }

  toggleDone(todo: Todo): void {
    this.setState((state) => ({
      list: state.list.map((item) =>
        item.id === todo.id
          ? { ...item, isDone: !item.isDone }
          : item,
      ),
    }));
  }
}
