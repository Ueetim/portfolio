import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, shopping cart, and secure checkout process.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for teams to manage projects, tasks, and deadlines with real-time updates.',
      technologies: ['Angular', 'RxJS', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design principles.',
      technologies: ['Angular', 'Tailwind CSS', 'GSAP', 'Netlify'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application providing real-time forecasts and historical weather data.',
      technologies: ['Angular', 'Chart.js', 'Weather API', 'Geolocation'],
      link: '#'
    }
  ];
}
