import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input({required:true}) userId!:string;
  @Output() closeSignal = new EventEmitter<void>();
  enteredTitle= signal("")
  enteredSummary= signal("")
  enteredDate= signal("")

  private tasksService = inject(TasksService)

  onClose() {
    this.closeSignal.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {title:this.enteredTitle(),
      summary:this.enteredSummary(),
      dueDate:this.enteredDate()}
      ,this.userId);
    this.closeSignal.emit();
}

  
}
