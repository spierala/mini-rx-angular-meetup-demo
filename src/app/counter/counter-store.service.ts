import { Injectable } from '@angular/core';
import { FeatureStore } from '@mini-rx/signal-store';

@Injectable()
export class CounterStoreService extends FeatureStore<{
    count: number;
}> {
    counter = this.select((state) => state.count);

    constructor() {
        super('counter', { count: 1 }, { multi: true });
    }

    increment() {
        this.setState((state) => ({ count: state.count + 1 }), 'inc');
    }

    decrement() {
        this.setState((state) => ({ count: state.count - 1 }), 'dec');
    }
}
