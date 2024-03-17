import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Grocery, Todo } from '../../../models/todo.interface';
import { ModalsService } from '../../../services/modals.service';
import { ToDosService } from '../../../services/to-dos.service';
import { generateID } from '../../../shared/utils';

@Component({
  selector: 'app-add-grocery',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-grocery.component.html',
  styles: ``,
})
export class AddGroceryComponent {
  constructor(
    public modalsService: ModalsService,
    private todosService: ToDosService
  ) {}

  addGroceryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
  });

  addGrocery() {
    if (this.addGroceryForm.valid) {
      this.addGroceryForm.value.id = generateID();
      this.addGroceryForm.value.status = 'pending';
      this.todosService.addGrocery(
        this.addGroceryForm.value as unknown as Grocery
      );

      this.addGroceryForm.reset();
    }

    this.modalsService.closeModal('add-grocery');
  }
}
