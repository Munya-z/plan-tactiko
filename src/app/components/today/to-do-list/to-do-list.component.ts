import { Component, signal, computed } from '@angular/core';
import { ToDosService, toDo } from '../../../services/to-dos.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  constructor(private toDoService: ToDosService) {}

  toDos = computed(() => this.toDoService.toDos());

  completeToDo(toDo: any) {
    this.toDoService.completeToDo(toDo);
  }

  removeToDo(toDo: any) {
    this.toDoService.removeToDo(toDo);
  }
}
