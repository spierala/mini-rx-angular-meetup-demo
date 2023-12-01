import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from './models';
import { subDays } from 'date-fns';

function getNow(): Date {
    return new Date();
}

function getYesterday(): Date {
    return subDays(getNow(), 1);
}

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    getUser(): Observable<User> {
        return of({
            firstName: 'John',
            lastName: 'Doe',
            // birthday: getYesterday(),
            birthday: getNow(),
        }).pipe(delay(300));
    }
}
