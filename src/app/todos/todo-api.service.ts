import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { Todo } from "./models";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  getTodos(): Observable<Todo[]> {
    return of(
      [
        { id: 1, title: 'Car Wash', isDone: false },
        { id: 2, title: 'Dish Wash', isDone: false },
        { id: 3, title: 'Relax', isDone: true },
      ]
    ).pipe(
      delay(350)
    )
  }
}
