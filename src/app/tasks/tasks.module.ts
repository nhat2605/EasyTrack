import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { AddComponent } from "./add/add.component";
import { SharedModule } from "../shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
   declarations: [TasksComponent,TaskComponent,AddComponent],
   exports: [TasksComponent],
   imports: [CommonModule,FormsModule, SharedModule]
})

export class TasksModule{

}