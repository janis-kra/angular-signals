import 'zone.js/dist/zone';
import {
  Component,
  computed,
  effect,
  Input,
  OnInit,
  SettableSignal,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'incrementor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increaseResult()">increment</button>
  `,
})
export class IncrementorComponent {
  // alte Angular Welt: normales number Input
  @Input() results: SettableSignal<number>;
  // alte Angular Welt: via EventEmitter neuen Wert hochgeben

  increaseResult(): void {
    this.results.update((result) => result + 1);
  }
}
