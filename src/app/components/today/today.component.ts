import { GroceriesComponent } from './groceries/groceries.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Component, signal } from '@angular/core';
import { ToDosService, toDo } from '../../services/to-dos.service';
import { EventsDisplayComponent } from '../home/events-display/events-display.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [ToDoListComponent, GroceriesComponent, EventsDisplayComponent],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss',
})
export class TodayComponent {}
