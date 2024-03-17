import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalsService } from './../../../services/modals.service';
import { Component } from '@angular/core';
import { ToDosService } from '../../../services/to-dos.service';
import { generateID } from '../../../shared/utils';
import { Todo } from '../../../models/todo.interface';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  constructor(
    public modalsService: ModalsService,
    private todosService: ToDosService
  ) {}

  addTodoForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    status: new FormControl(''),
  });

  addTodo() {
    if (this.addTodoForm.valid) {
      this.addTodoForm.value.id = generateID();
      this.addTodoForm.value.status = 'pending';
      this.todosService.addToDo(this.addTodoForm.value as unknown as Todo);

      this.addTodoForm.reset();
    }

    this.modalsService.closeModal('add-todo');
  }
}
