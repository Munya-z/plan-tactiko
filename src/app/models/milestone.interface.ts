export interface Milestone {
  id: string;
  name: string;
  step: number;
  description: string;
  status: 'done' | 'pending';
}
