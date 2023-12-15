import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
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
  private counterStore = inject(CounterStoreService);
  counter: Signal<number> = this.counterStore.counter;

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }
}
