import { Injectable, signal } from '@angular/core';
import { Grocery, Todo, TodoEvent } from '../models/todo.interface';
import { getItemIndex, updateData } from '../shared/utils';

export interface toDo {
  id: string;
  name: string;
  status: 'pending' | 'done';
}

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  /**************
   * todos methods
   *************/

  toDos = this.getTodosFromLocalStorage();
  selectedToDo: any = signal('');

  getTodosFromLocalStorage() {
    const localStorageTodos = localStorage.getItem('toDos') as string;
    if (localStorageTodos.length <= 0) {
      return signal('');
    }
    return signal(JSON.parse(localStorageTodos));
  }

  getTodoIndex(toDos: Todo[], todo: Todo) {
    return toDos.findIndex((todoItem: Todo) => todoItem.id === todo.id);
  }

  updateSelectedTodo(updatedTodo: Todo) {
    this.toDos.update((todos) => {
      return todos.map((todo: Todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      });
    });

    localStorage.setItem('toDos', JSON.stringify(this.toDos()));
  }

  addToDo(newTodo: Todo) {
    this.toDos.update((toDos) => [...toDos, newTodo]);
    localStorage.setItem('toDos', JSON.stringify(this.toDos()));
  }

  completeToDo(todo: Todo) {
    this.selectedToDo.set(todo);
    this.selectedToDo().status = 'done';
    this.updateSelectedTodo(this.selectedToDo());
  }

  removeToDo(todo: Todo) {
    this.selectedToDo.set(todo);
    const toDoLocation = getItemIndex(this.toDos() as Todo[], todo);
    this.toDos().splice(toDoLocation, 1);

    this.updateSelectedTodo(this.toDos());
  }

  /**************
   * events methods
   *************/

  events = this.getEventsFromlocalStorage();
  selectedEvent: any = signal('');

  getEventsFromlocalStorage() {
    const localStorageEvents = localStorage.getItem('events') as string;
    if (localStorageEvents.length <= 0) {
      return signal('');
    }
    return signal(JSON.parse(localStorageEvents));
  }

  updateSelectedEvent(updatedEvent: TodoEvent) {
    this.events.update((events) => {
      return events.map((event: TodoEvent) => {
        return event.id === updatedEvent.id ? updatedEvent : event;
      });
    });

    localStorage.setItem('events', JSON.stringify(this.events()));
  }

  addEvent(newEvent: TodoEvent) {
    this.events.update((events) => [...events, newEvent]);
    localStorage.setItem('events', JSON.stringify(this.events()));
  }

  removeEvent(event: TodoEvent) {
    this.selectedEvent.set(event);
    const toDoLocation = getItemIndex(this.events() as TodoEvent[], event);
    this.events().splice(toDoLocation, 1);

    this.updateSelectedEvent(this.events());
  }

  /**************
   * groceries methods
   *************/
  groceries = this.getGroceriessFromLocalStorage();
  selectedGrocery: any = signal('');

  getGroceriessFromLocalStorage() {
    const localStorageGroceriess = localStorage.getItem('groceries') as string;
    if (localStorageGroceriess.length <= 0) {
      return signal('');
    }
    return signal(JSON.parse(localStorageGroceriess));
  }

  updateSelectedGrocery(updatedGrocery: Todo) {
    this.groceries.update((groceries) => {
      return groceries.map((grocery: Grocery) => {
        return grocery.id === updatedGrocery.id ? updatedGrocery : grocery;
      });
    });

    localStorage.setItem('groceries', JSON.stringify(this.groceries()));
  }

  addGrocery(newGrocery: Grocery) {
    this.groceries.update((groceries) => [...groceries, newGrocery]);
    localStorage.setItem('groceries', JSON.stringify(this.groceries()));
  }

  completeGroceries(grocery: toDo) {
    this.selectedGrocery.set(grocery);
    this.selectedGrocery().status = 'done';

    this.updateSelectedGrocery(this.selectedGrocery());
  }
}
