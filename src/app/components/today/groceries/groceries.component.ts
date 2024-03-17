import { Component, computed } from '@angular/core';
import { ToDosService } from '../../../services/to-dos.service';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.scss',
})
export class GroceriesComponent {
  constructor(private toDoService: ToDosService) {}

  groceries = computed(() => this.toDoService.groceries());

  completeGrocery(grocery: any) {
    this.toDoService.completeGroceries(grocery);
  }
}
