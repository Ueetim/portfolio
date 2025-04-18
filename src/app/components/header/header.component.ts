import { Component } from '@angular/core';
import { TypewriterComponent } from "../typewriter/typewriter.component";

@Component({
  selector: 'app-header',
  imports: [TypewriterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  typewriterPhrases: string[] = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast',
    'Angular Expert'
  ];
}
