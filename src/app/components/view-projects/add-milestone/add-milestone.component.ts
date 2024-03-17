import { ModalsService } from './../../../services/modals.service';
import { Component } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { Milestone } from '../../../models/milestone.interface';
import { generateID } from '../../../shared/utils';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-milestone',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-milestone.component.html',
})
export class AddMilestoneComponent {
  constructor(
    public modalsService: ModalsService,
    private projectsService: ProjectsService
  ) {}

  addMilestoneForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    step: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl(''),
  });

  projectSelected = this.projectsService.selectedProject();

  addMilestone() {
    if (this.addMilestoneForm.valid) {
      this.addMilestoneForm.value.id = generateID();
      this.addMilestoneForm.value.status = 'pending';

      this.projectsService.addMilestone(
        this.addMilestoneForm.value as unknown as Milestone
      );

      this.modalsService.closeModal('add-milestone');
    }
  }
}
