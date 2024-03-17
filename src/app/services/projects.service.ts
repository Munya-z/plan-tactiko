/**
 * Service that manages projects and milestones.
 *
 * Provides methods to get projects, update selected project,
 * create/edit projects and milestones, etc. Uses localStorage
 * to persist projects data.
 */
import { Project } from './../models/project.interface';
import { Injectable, signal } from '@angular/core';
import { Milestone } from '../models/milestone.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: any = this.getProjects();

  selectedProject: any = signal('');
  selectedMilestone: any = signal('');

  getProjects() {
    const localStorageProjects = localStorage.getItem('projects') as string;
    if (localStorageProjects.length <= 0) {
      return signal('');
    }
    return signal(JSON.parse(localStorageProjects));
  }

  getMilestoneIndex(project: Project, milestone: Milestone) {
    return project.milestones.findIndex(
      (milestoneItem: Milestone) => milestoneItem.id === milestone.id
    );
  }

  updateSelectedProject(updatedProject: Project) {
    this.projects.update((projects: Project[]) => {
      return projects.map((project: Project) => {
        return project.id === updatedProject.id ? updatedProject : project;
      });
    });

    localStorage.setItem('projects', JSON.stringify(this.projects()));
  }

  createProject(newProject: Project) {
    newProject.milestones = [];

    this.projects.update((projects: Project[]) => [...projects, newProject]);
    localStorage.setItem('projects', JSON.stringify(this.projects()));
  }

  addMilestone(newMilestone: Milestone) {
    this.selectedProject().milestones.push(newMilestone);

    this.updateSelectedProject(this.selectedProject());
  }

  deleteMilestone() {
    const milestoneLocation = this.getMilestoneIndex(
      this.selectedProject(),
      this.selectedMilestone()
    );

    this.selectedProject().milestones.splice(milestoneLocation, 1);

    this.updateSelectedProject(this.selectedProject());
  }

  editMilestone(
    projectSelected: Project,
    milestoneSelected: Milestone,
    action: string
  ) {
    this.selectedProject.set(projectSelected);
    this.selectedMilestone.set(milestoneSelected);

    const milestoneLocation = this.getMilestoneIndex(
      this.selectedProject(),
      this.selectedMilestone()
    );

    if (action === 'done') {
      alert('milestone done');

      this.selectedProject().milestones[milestoneLocation].status = 'done';

      this.updateSelectedProject(this.selectedProject());
    }
  }

  editProjectInfo() {}
}
