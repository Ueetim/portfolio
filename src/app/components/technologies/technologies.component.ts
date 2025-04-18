import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TechCategory {
  name: string;
  technologies: string[];
}

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies = [
    { name: 'Angular', icon: 'angular' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'RxJS', icon: 'rxjs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'CSS3', icon: 'css' },
    { name: 'HTML5', icon: 'html' },
    { name: 'Sass', icon: 'sass' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'Go (Golang)', icon: 'go' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Git', icon: 'git' },
  ];
}
