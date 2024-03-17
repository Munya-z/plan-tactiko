import { GroceriesComponent } from './../today/groceries/groceries.component';
import { ToDoListComponent } from '../today/to-do-list/to-do-list.component';
import { RouterLink } from '@angular/router';
import { EventsDisplayComponent } from './events-display/events-display.component';
import { QuoteBlockComponent } from './quote-block/quote-block.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    QuoteBlockComponent,
    EventsDisplayComponent,
    ToDoListComponent,
    GroceriesComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  viewArray = ['today', 'events', 'groceries'];

  selectedView = signal('today');

  moveView(direction: string) {
    const currentView = this.viewArray.indexOf(this.selectedView());
    let nextView: number;

    if (direction === 'back') {
      nextView = currentView - 1;

      if (nextView < 0) {
        nextView = this.viewArray.length - 1;
      }
      this.selectedView.set(this.viewArray[nextView]);
    }

    if (direction === 'forward') {
      nextView = currentView + 1;

      if (nextView >= this.viewArray.length) {
        nextView = 0;
      }
      this.selectedView.set(this.viewArray[nextView]);
    }
  }
}
