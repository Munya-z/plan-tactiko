import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Todo, TodoEvent } from '../../../models/todo.interface';
import { ModalsService } from '../../../services/modals.service';
import { ToDosService } from '../../../services/to-dos.service';
import { generateID } from '../../../shared/utils';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss',
})
export class AddEventComponent {
  constructor(
    public modalsService: ModalsService,
    private todosService: ToDosService
  ) {}

  addEventForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    status: new FormControl(''),
  });

  addEvent() {
    if (this.addEventForm.valid) {
      this.addEventForm.value.id = generateID();
      this.addEventForm.value.status = 'pending';
      this.todosService.addEvent(
        this.addEventForm.value as unknown as TodoEvent
      );

      this.addEventForm.reset();
    }

    this.modalsService.closeModal('add-event');
  }
}
