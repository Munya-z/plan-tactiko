import { Component, signal } from '@angular/core';
import { RoutinesService } from '../../../services/routines.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Routine, Timeslot } from '../../../models/todo.interface';
import { ModalsService } from '../../../services/modals.service';
import { generateID } from '../../../shared/utils';

@Component({
  selector: 'app-add-routine',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-routine.component.html',
  styles: ``,
})
export class AddRoutineComponent {
  constructor(
    public modalsService: ModalsService,
    private routinesService: RoutinesService
  ) {}

  timeslots = signal<null | Timeslot[]>(null);

  addRoutineForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    notify: new FormControl(true),
    timeslots: new FormControl(),
    day: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
  });
  addTimeslot(event: Event) {
    event.preventDefault();

    const newTimeslot: Timeslot = {
      day: this.addRoutineForm.value.day,
      startTime: this.addRoutineForm.value.startTime,
      endTime: this.addRoutineForm.value.endTime,
    };
    console.log(newTimeslot, ' new timeslots');

    this.timeslots.update((timeslots) => {
      if (Array.isArray(timeslots)) {
        timeslots.push(newTimeslot);
        return timeslots;
      } else {
        return [newTimeslot];
      }
    });
    console.log(this.timeslots(), 'timeslots');
  }

  addRoutine() {
    if (this.addRoutineForm.valid) {
      this.addRoutineForm.value.id = generateID();
      this.addRoutineForm.value.notify = true;
      this.addRoutineForm.value.timeslots = this.timeslots();
      this.routinesService.createRoutine(
        this.addRoutineForm.value as unknown as Routine
      );

      this.addRoutineForm.reset();
    }

    this.modalsService.closeModal('add-routine');
  }
}
