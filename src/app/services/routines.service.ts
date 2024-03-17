import { Injectable, signal } from '@angular/core';
import { Routine } from '../models/todo.interface';
import { getItemIndex } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class RoutinesService {
  routines = signal(this.getRoutines());
  selectedRoutine: any;

  getRoutines() {
    const localRoutines = localStorage.getItem('routines') as string;
    if (localRoutines.length > 0) {
      return JSON.parse(localRoutines);
    }
    return localRoutines;
  }

  createRoutine(newRoutine: Routine) {
    this.routines.update((routines) => [...routines, newRoutine]);
    localStorage.setItem('routines', JSON.stringify(this.routines()));
  }

  deleteRoutine(routine: Routine) {
    // this.selectedRoutine.set(routine);
    console.log('working ');
    const toDoLocation = getItemIndex(this.routines() as Routine[], routine);
    this.routines().splice(toDoLocation, 1);

    this.updateSelectedRoutine(this.routines());
  }

  updateSelectedRoutine(selectedRoutines: Routine) {
    this.routines.update((routines) => {
      return routines.map((routine: Routine) => {
        return routine.id === selectedRoutines.id ? selectedRoutines : routines;
      });
    });

    localStorage.setItem('routines', JSON.stringify(this.routines()));
  }
  constructor() {}
}
