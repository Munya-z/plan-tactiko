import { Component } from '@angular/core';
import { ModalsService } from '../../../services/modals.service';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../models/project.interface';
import { Milestone } from '../../../models/milestone.interface';

@Component({
  selector: 'app-edit-milestone',
  standalone: true,
  imports: [],
  templateUrl: './edit-milestone.component.html',
})
export class EditMilestoneComponent {
  constructor(
    public modalsService: ModalsService,
    private projectsService: ProjectsService
  ) {}

  selectedProject = this.projectsService.selectedProject();
  selectedMilestone = this.projectsService.selectedMilestone();

  editMilestone(project: Project, milestone: Milestone, action: string) {
    this.projectsService.editMilestone(project, milestone, action);
  }

  deleteMilestone(event: Event) {
    if (confirm('please dont delete me ')) {
      this.projectsService.deleteMilestone();
      this.modalsService.closeModal('edit-milestone');
    }
  }
}
