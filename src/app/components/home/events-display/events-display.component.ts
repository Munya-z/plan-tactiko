import { TodoEvent } from './../../../models/todo.interface';
import { Component, computed } from '@angular/core';
import { ToDosService } from '../../../services/to-dos.service';

@Component({
  selector: 'app-events-display',
  standalone: true,
  imports: [],
  templateUrl: './events-display.component.html',
})
export class EventsDisplayComponent {
  events = computed(() => this.toDosService.events());

  removeEvent(event: TodoEvent) {
    this.toDosService.removeEvent(event);
  }

  constructor(private toDosService: ToDosService) {}
}
