import { ProjectsService } from './../../../services/projects.service';
import { Component } from '@angular/core';
import { ModalsService } from '../../../services/modals.service';

import { generateID } from '../../../shared/utils';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {
  constructor(
    public modalsService: ModalsService,
    private projectsService: ProjectsService
  ) {}

  createProjectForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    dueDate: new FormControl('', Validators.required),
    displayColor: new FormControl('', Validators.required),
  });

  async createProject(event: Event) {
    event.preventDefault();

    this.createProjectForm.value.id = generateID();
    console.log(this.createProjectForm.value);

    await this.projectsService.createProject(
      this.createProjectForm.value as any
    );

    this.modalsService.closeModal('create-project');
  }
}
