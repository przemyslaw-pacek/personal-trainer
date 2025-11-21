import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  name = '';
  email = '';
  message = '';

  isSent = signal(false);

  sendMessage() {
    this.isSent.set(true);

    this.name = '';
    this.email = '';
    this.message = '';

    setTimeout(() => {
      this.isSent.set(false);
    }, 5000);
  }
}
