import { inject, Injectable } from '@angular/core';
import {
    createFeatureStateSelector,
    createSelector,
    FeatureStore,
} from '@mini-rx/signal-store';
import { User } from './models';
import { UserApiService } from './user-api.service';

export const userFeatureKey = 'user';

export interface UserState {
    user: User | undefined;
}

const initialState: UserState = {
    user: undefined,
};

const getUserFeature = createFeatureStateSelector<UserState>();
const getUser = createSelector(getUserFeature, (state) => state.user);
const getUserName = createSelector(getUser, (user) =>
    user ? user.firstName + ' ' + user.lastName : '',
);

@Injectable({
    providedIn: 'root',
})
export class UserStoreService extends FeatureStore<UserState> {
    private userApi = inject(UserApiService);

    userName = this.select(getUserName);

    constructor() {
        super(userFeatureKey, initialState);

        this.userApi
            .getUser()
            .subscribe((user) => this.setState({ user }));
    }
}
