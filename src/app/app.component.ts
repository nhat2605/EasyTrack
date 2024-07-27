import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<string>("");
  displayName = computed(() =>  {
    const user = this.users.find((user) => user.id === this.selectedUser())!;
    return user ? user.name:""  
  });

  onSelectUser(id:string) {
    this.selectedUser.set(id);
  }
}
