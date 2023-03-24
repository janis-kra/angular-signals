import 'zone.js/dist/zone';
import {
  Component,
  computed,
  effect,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { IncrementorComponent } from './incrementor.component';
import { StatusComponent } from './status.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, IncrementorComponent, StatusComponent],
  template: `
    <h1>Signals Demo!</h1>
    <br/>
    <incrementor [results]="results"></incrementor>
    <status [results]="results"></status>
  `,
})
export class App {
  name = 'Angular';
  // alte Angular Welt: normales number Feld, update via EventEmitter in incrementor aufgerufen
  results = signal(0);
}

bootstrapApplication(App);
