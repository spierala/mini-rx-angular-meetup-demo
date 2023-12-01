import {
    createFeatureStateSelector,
    createSelector,
} from '@mini-rx/signal-store';
import { Todo } from '../models';
import {
    userFeatureKey,
    UserState,
} from '../../user/user-store.service';
import { isToday } from 'date-fns';

export const todosFeatureKey = 'todos';

// State interface
export interface TodosState {
    list: Todo[];
}

// Memoized selectors
const getTodosFeature =
    createFeatureStateSelector<TodosState>(todosFeatureKey);
export const getTodos = createSelector(
    getTodosFeature,
    (state) => state.list,
);

const getUsersFeature =
    createFeatureStateSelector<UserState>(userFeatureKey);
const getUser = createSelector(
    getUsersFeature,
    (state) => state.user,
);
export const getTodosWithBirthdayGift = createSelector(
    getUser,
    getTodos,
    (user, todos) => {
        if (!user) {
            return todos;
        }
        return isToday(user.birthday) ? [] : todos;
    },
);
