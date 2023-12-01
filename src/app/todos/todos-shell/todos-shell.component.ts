import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from "@mini-rx/signal-store";
import { Todo } from "../models";
import { getTodos } from "../state";
import { loadTodos } from "../state/todo.actions";

@Component({
  selector: 'app-todos-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-shell.component.html',
  styleUrl: './todos-shell.component.scss'
})
export class TodosShellComponent implements OnInit {
  private store = inject(Store);
  todos: Signal<Todo[]> = this.store.select(getTodos);

  ngOnInit() {
    this.store.dispatch(loadTodos())
  }
}
