import { Injectable } from '@angular/core';
import { ComponentStore, FeatureStore } from '@mini-rx/signal-store';

@Injectable()
export class CounterStoreService extends ComponentStore<{
  count: number;
}> {
  counter = this.select((state) => state.count);

  constructor() {
    super({ count: 1 });
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }), 'inc');
  }

  decrement() {
    this.setState((state) => ({ count: state.count - 1 }), 'dec');
  }
}
