import { Component, Input, inject, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  private taskService = inject(TaskService);
  userId = input.required<string>();
  name = input.required<string>();

  isAddingTask = signal(false);
  sortDirection = signal<'asc' | 'desc' | null>(null);

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId());
  }

  onAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onCreateTask(newTask: NewTask) {
    this.taskService.addUserTask(newTask, this.userId());
    this.isAddingTask.set(false);
  }

  toggleSort() {
    const newDirection = this.sortDirection() === 'asc' ? 'desc' : 'asc';
    this.sortDirection.set(newDirection);
    this.taskService.sortTasks(newDirection, this.userId());
  }
}
