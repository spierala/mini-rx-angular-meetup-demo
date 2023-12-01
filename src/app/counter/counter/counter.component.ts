import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { createComponentStore, createFeatureStore } from '@mini-rx/signal-store';
import { CounterStoreService } from '../counter-store.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    providers: [CounterStoreService],
})
export class CounterComponent {
    // private counterStore = createFeatureStore('counter', {count: 42}, {multi: true});
    // counter = this.counterStore.select(state => state.count);
    //
    // increment() {
    //   this.counterStore.setState(state => ({count: state.count + 1}), 'inc');
    // }
    //
    // decrement() {
    //   this.counterStore.setState(state => ({count: state.count - 1}), 'dec');
    // }

    private counterStore = inject(CounterStoreService);
    counter = this.counterStore.counter;

    increment() {
        this.counterStore.increment();
    }

    decrement() {
        this.counterStore.decrement();
    }
}
