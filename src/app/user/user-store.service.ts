import { inject, Injectable, Signal } from '@angular/core';
import { ComponentStore, FeatureStore } from '@mini-rx/signal-store';
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
export class UserStoreService extends ComponentStore<UserState> {
  private api = inject(UserApiService);

  userName: Signal<string> = this.select(({ user }) =>
    user ? user.firstName + ' ' + user.lastName : '',
  );

  constructor() {
    super(initialState);

    this.api
      .getUser()
      .subscribe((user) =>
        this.setState({ user }, 'loadUserSuccess'),
      );
  }
}
