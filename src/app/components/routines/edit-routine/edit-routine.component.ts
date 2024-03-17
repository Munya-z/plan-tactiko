import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Routine } from '../../../models/todo.interface';
import { ModalsService } from '../../../services/modals.service';
import { RoutinesService } from '../../../services/routines.service';
import { generateID } from '../../../shared/utils';

@Component({
  selector: 'app-edit-routine',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-routine.component.html',
  styles: ``,
})
export class EditRoutineComponent {
  constructor(
    public modalsService: ModalsService,
    private routinesService: RoutinesService
  ) {}

  editRoutineForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    notify: new FormControl(),
  });

  addRoutine() {
    if (this.editRoutineForm.valid) {
      this.editRoutineForm.value.id = generateID();
      this.editRoutineForm.value.notify = true;
      this.routinesService.createRoutine(
        this.editRoutineForm.value as unknown as Routine
      );

      this.editRoutineForm.reset();
    }

    this.modalsService.closeModal('edit-routine');
  }
}
