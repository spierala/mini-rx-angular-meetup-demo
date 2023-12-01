import { ChangeDetectionStrategy, Component } from '@angular/core';
import { createComponentStore, createFeatureStore } from "@mini-rx/signal-store";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class CounterComponent {
  private counterStore = createFeatureStore('counter', {count: 42}, {multi: true});
  counter = this.counterStore.select(state => state.count);

  increment() {
    this.counterStore.setState(state => ({count: state.count + 1}), 'inc');
  }

  decrement() {
    this.counterStore.setState(state => ({count: state.count - 1}), 'dec');
  }
}
