import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() activeSection: string = 'home';
  navItems = ['Home', 'About', 'Experience', 'Projects', 'Technologies', 'Contact'];
}
