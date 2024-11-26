import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {}

  // Lógica ao clicar em salvar
  onSave(): void {
    if (!this.data.title || !this.data.description) {
      alert('Both Title and Description are required!');
      return;
    }

    // Envia os dados para o componente pai e fecha o modal
    this.dialogRef.close(this.data);

    console.log(this.data);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
