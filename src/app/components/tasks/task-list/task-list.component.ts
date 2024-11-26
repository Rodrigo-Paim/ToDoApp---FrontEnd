import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';

export interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  displayedColumns: string[] = ['title', 'description', 'actions'];

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      data: { title: '', description: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newTask: Task = {
          id: this.tasks.length + 1,
          title: result.title,
          description: result.description,
          isCompleted: false,
        };
        console.log(this,newTask);
        this.tasks.push(newTask);
      }
    });
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      data: { title: task.title, description: task.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        task.title = result.title;
        task.description = result.description;
      }
    });
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  markCompleted(task: Task): void {
    task.isCompleted = true;
  }
}
