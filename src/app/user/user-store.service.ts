import { inject, Injectable, Signal } from '@angular/core';
import { FeatureStore } from '@mini-rx/signal-store';
import { User } from './models';
import { UserApiService } from './user-api.service';

interface UserState {
    user: User | undefined;
}

const initialState: UserState = {
    user: undefined,
};

@Injectable({
    providedIn: 'root',
})
export class UserStoreService extends FeatureStore<UserState> {
    private userApi = inject(UserApiService);

    userName: Signal<string> = this.select(({ user }) =>
        user ? user.firstName + ' ' + user.lastName : '',
    );

    constructor() {
        super('user', initialState);

        this.userApi.getUser().subscribe((user) => this.setState({ user }, 'loadUserSuccess'));
    }
}
