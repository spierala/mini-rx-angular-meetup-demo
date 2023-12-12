import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  getUser(): Observable<User> {
    return of({
      firstName: 'John',
      lastName: 'Doe',
    }).pipe(delay(300));
  }
}
