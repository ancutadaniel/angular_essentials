import { Injectable } from '@angular/core';
import { NewTask, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private task: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.task = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.task.filter((task) => task.userId === userId);
  }

  addUserTask(task: NewTask, userId: string) {
    this.task.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.task = this.task.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.task));
  }

  sortTasks(direction: 'asc' | 'desc', userId: string) {
    const userTasks = this.getUserTasks(userId);
    if (!userTasks) return;

    const sortedTasks = [...userTasks].sort((a, b) => {
      if (direction === 'asc') {
        return a.dueDate.localeCompare(b.dueDate);
      } else {
        return b.dueDate.localeCompare(a.dueDate);
      }
    });

    this.task = sortedTasks;
    this.saveTasks();
  }
}
