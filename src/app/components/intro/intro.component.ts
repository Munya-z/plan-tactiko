import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './intro.component.html',
})
export class IntroComponent {}
