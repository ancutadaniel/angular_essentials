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
  // A signal is an object that holds a value and can be observed for changes

  // old way of using Input
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  // Old way of using computed
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // new way of using signal input
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectUser = output<string>();

  // New way of using computed signal
  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  // Method to select a random user
  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
