import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  imports: [CommonModule],
  templateUrl: './navigation-mobile.component.html',
  styleUrl: './navigation-mobile.component.css'
})
export class NavigationMobileComponent {
  @Input() activeSection: string = 'home';
  navItems = ['About', 'Experience', 'Projects', 'Technologies', 'Contact'];
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = '';
  }
}
