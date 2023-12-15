import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosStoreService } from './todos-store.service';

@Component({
  selector: 'app-todos-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-shell.component.html',
  styleUrl: './todos-shell.component.scss',
})
export class TodosShellComponent implements OnInit {
  todoStore = inject(TodosStoreService);

  ngOnInit(): void {
    this.todoStore.loadTodos();
  }
}
