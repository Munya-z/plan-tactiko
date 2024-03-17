import { NavComponent } from './components/nav/nav.component';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Navigation,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ModalsService } from './services/modals.service';
import { initializeLocalStorage } from './shared/utils';
import { AddTodoComponent } from './components/today/add-todo/add-todo.component';
import { AddGroceryComponent } from './components/today/add-grocery/add-grocery.component';
import { AddEventComponent } from './components/today/add-event/add-event.component';
import { AddRoutineComponent } from './components/routines/add-routine/add-routine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    AddTodoComponent,
    AddGroceryComponent,
    AddEventComponent,
    AddRoutineComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'plan-tactiko';

  @ViewChild('floatToggler') floatToggler: ElementRef | undefined;
  @ViewChild('floatMenu') floatMenu: ElementRef | undefined;
  openpage = signal('');

  toggleFloatMenu() {
    this.floatMenu?.nativeElement.classList.toggle('visible');
    this.floatToggler?.nativeElement.classList.toggle('selected');
  }
  constructor(public modals: ModalsService, private router: Router) {
    initializeLocalStorage([
      'projects',
      'routines',
      'toDos',
      'groceries',
      'events',
    ]);
  }

  ngOnInit(): void {
    document.addEventListener('click', (e) => {
      if (!this.floatToggler?.nativeElement.contains(e.target)) {
        this.floatMenu?.nativeElement.classList.remove('visible');
      }
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.openpage.set(event.url.slice(1));
      }
      if (!this.floatToggler?.nativeElement.classList.contains('visible')) {
        this.floatMenu?.nativeElement.classList.remove('visible');
      }
    });
  }
}
