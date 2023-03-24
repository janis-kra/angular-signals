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
import { interval } from 'rxjs';

@Component({
  selector: 'status',
  standalone: true,
  template: `
    <pre>{{results()}}</pre>
    <span>since 10s:</span>
    <pre>{{signalSince()}}</pre>
  `,
})
export class StatusComponent implements OnInit {
  ngOnInit(): void {
    interval(10000).subscribe(() => this.since.set(this.results()));
  }
  // alte Angular Welt: normales number Input
  @Input() results: Signal<number>;
  // alte Angular Welt: normales number Feld
  since = signal(0);
  // alte Angular Welt: aufzurufende Funktion, wird via Change Detection getriggert
  signalSince = computed(() => this.results() - this.since());
}
