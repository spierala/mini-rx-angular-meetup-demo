import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { createComponentStore, createFeatureStore } from "@mini-rx/signal-store";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class CounterComponent {
    private counterStore = createComponentStore({count: 42});
    counter = this.counterStore.select(state => state.count);

    increment() {
        this.counterStore.setState(state => ({count: state.count + 1}));
    }

    decrement() {
      this.counterStore.setState(state => ({count: state.count - 1}));
    }
}
