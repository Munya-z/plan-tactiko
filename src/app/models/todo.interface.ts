export interface Todo {
  id: string;
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: Date;
  status: 'pending' | 'done';
}

export interface Grocery {
  id: string;
  name: string;
  status: 'pending' | 'done';
}

export interface TodoEvent {
  id: string;
  name: string;
  description: string;
  eventDate: Date;
}

export interface Routine {
  id: string;
  color: string;
  name: string;
  notify: boolean;
  timeslots: Timeslot[];
}

export interface Timeslot {
  day: string;
  startTime: string;
  endTime: string;
}
