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
  techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'RxJS']
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL']
    },
    {
      name: 'Tools & Others',
      technologies: ['Git', 'Docker', 'CI/CD', 'Jest', 'Cypress', 'Figma', 'Webpack', 'NPM']
    }
  ];
}
