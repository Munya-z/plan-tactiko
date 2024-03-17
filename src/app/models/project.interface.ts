import { Milestone } from './milestone.interface';

export interface Project {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  displayColor: 'sec' | 'main' | 'ter';
  milestones: Milestone[];
}
