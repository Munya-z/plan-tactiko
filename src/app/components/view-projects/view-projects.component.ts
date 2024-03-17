import { ModalsService } from './../../services/modals.service';
import { EditMilestoneComponent } from './edit-milestone/edit-milestone.component';
import { Component, signal } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { AddMilestoneComponent } from './add-milestone/add-milestone.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { Milestone } from '../../models/milestone.interface';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-view-projects',
  standalone: true,
  imports: [
    EditMilestoneComponent,
    AddMilestoneComponent,
    CreateProjectComponent,
  ],
  templateUrl: './view-projects.component.html',
  styleUrl: './view-projects.component.scss',
})
export class ViewProjectsComponent {
  constructor(
    private projectsService: ProjectsService,
    public modalsService: ModalsService
  ) {}

  projects = this.projectsService.getProjects();

  allInfoInView = signal(false);
  selectedProject = signal('');

  //display stuff

  percentageCompleted(array: Milestone[]) {
    const normalLength = array.length;
    const completed_arr = array.filter((arr) => arr.status === 'done');
    const completedLegth = completed_arr.length;

    const percentage: any = ((completedLegth / normalLength) * 100).toFixed(0);

    if (isNaN(percentage)) {
      return null;
    }
    return percentage;
  }

  daysToDeadline(deadlineDate: string | number | Date) {
    let deadLine: any = Date.parse(deadlineDate as string);
    let currentDate: any = new Date();

    return Math.floor((deadLine - currentDate) / (1000 * 60 * 60 * 24));
  }

  toggleInfo(specifier: string) {
    const allInfo = document.getElementsByClassName(specifier);

    const allInfo_arr = Array.from(allInfo);

    allInfo_arr.forEach((element) => {
      element?.classList.toggle('visible');
      this.scroll(element);

      if (element.classList.contains('visible')) {
        this.allInfoInView.set(true);
        this.selectedProject.set(specifier);
      } else {
        this.allInfoInView.set(false);
        this.selectedProject.set('');
      }
    });
  }

  scroll(el: any) {
    el.parentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  setupForModal(kind: any, project?: any, milestone?: any) {
    switch (kind) {
      case 'add-milestone':
        this.projectsService.selectedProject.set(project);
        console.log(this.projectsService.selectedProject());
        break;
      case 'edit-milestone':
        this.projectsService.selectedProject.set(project);
        this.projectsService.selectedMilestone.set(milestone);
        console.log(
          this.projectsService.selectedProject(),
          this.projectsService.selectedMilestone()
        );

        break;
      default:
        break;
    }
  }

  async openModal(kind: string, project?: any, milestone?: any) {
    await this.setupForModal(kind, project ?? null, milestone ?? null);
    this.modalsService.openModal(kind);
  }

  // deleteMilestone(kind: string, project?: any, milestone?: any) {
  //   this.setupForModal(kind, project ?? null, milestone ?? null);
  //   this.projectsService.deleteMilestone();
  // }

  //milestone stuff
  editMilestone(projects: Project, milestone: Milestone, action: string) {
    this.projectsService.editMilestone(projects, milestone, action);
  }

  nextMilesStone(array: Milestone[]) {
    return array.map((e) => e.status).indexOf('pending');
  }
}
