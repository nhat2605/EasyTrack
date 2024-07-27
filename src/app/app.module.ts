import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./footer/footer.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
   declarations: [AppComponent, 
      HeaderComponent, 
      UserComponent],
   bootstrap:[AppComponent],
   imports:[BrowserModule, FooterComponent, FormsModule, SharedModule, TasksModule]
})
export class AppModule {

}