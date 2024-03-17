import { Routine } from '../../models/todo.interface';
import { RoutinesService } from './../../services/routines.service';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent {
  routines = signal(this.routinesService.routines());

  constructor(private routinesService: RoutinesService) {}

  checked(checked: boolean) {
    return checked ? checked : null;
  }

  removeRoutine(routine: Routine) {
    this.routinesService.deleteRoutine(routine);
  }

  toggleExtraMenu(specifier: string) {
    const extraMenu = document.getElementsByClassName(specifier);

    const allInfo_arr = Array.from(extraMenu);

    allInfo_arr.forEach((element) => {
      element?.classList.toggle('visible');
    });
  }
}
