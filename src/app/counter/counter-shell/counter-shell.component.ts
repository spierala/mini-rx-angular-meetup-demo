import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-shell',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './counter-shell.component.html',
  styleUrl: './counter-shell.component.scss',
})
export class CounterShellComponent {}
