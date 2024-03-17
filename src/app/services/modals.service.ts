import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor() {}

  // modal stuff
  openModal(kind: any, projectId?: any, object?: any) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    dialogWindow?.showModal();
  }

  closeModal(kind: any) {
    const dialogWindow = document.getElementById(kind) as HTMLDialogElement;
    dialogWindow?.close();
  }
}
