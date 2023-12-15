import { Injectable, Signal } from '@angular/core';
import { ComponentStore } from '@mini-rx/signal-store';

@Injectable()
export class CounterStoreService extends ComponentStore<{
  count: number;
}> {
  counter: Signal<number> = this.select(
    (state) => state.count,
  );

  constructor() {
    super({ count: 1 });
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
}
