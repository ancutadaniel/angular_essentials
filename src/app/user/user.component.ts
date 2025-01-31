import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// @Component is a decorator that tells Angular that this class is a component
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  user = input.required<User>();
  isSelected = input.required<boolean>();
  selectUser = output<string>();

  // New way of using computed signal
  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  // Method to select a random user
  onSelectUser() {
    this.selectUser.emit(this.user().id);
  }
}
