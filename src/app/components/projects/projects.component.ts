import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  screenshot?: string;
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
      title: 'Eelclip',
      description: 'A video creation tool that enables users to assemble scenes and add assets via a drag-and-drop interface, designed for intuitive content creation.',
      technologies: ['Angular 17', 'RxJS', 'Karma', 'Tailwind CSS', 'HTML5 Canvas'],
      link: 'https://eelclip.com',
      screenshot: 'https://pub-c9c48f48e139441394243dbd3e2f25ee.r2.dev/home.png'
    },
    {
      title: 'Tramatch',
      description: 'A faith-based dating platform focused on matching like-minded individuals. Features include geolocation, dynamic forms, and responsive UI.',
      technologies: ['Angular', 'Angular Material', 'HTML5', 'CSS3', 'REST APIs'],
      link: 'https://www.tramatch.com',
      screenshot: 'projects/tramatch.png'
    },
    {
      title: 'Webintel',
      description: 'A website analytics and performance monitoring app offering SEO recommendations and AI-driven insights for digital growth.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'AI APIs'],
      link: 'https://webintel.co',
      screenshot: 'https://webintel.co/images/screenshot.png'
    },
    {
      title: 'Top 100',
      description: 'A platform that ranks the top 100 entities across various industries based on performance, relevance, and data-driven metrics.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'Chart.js'],
      link: 'https://top100-global.com',
      screenshot: 'https://top100-global.com/images/screenshot.png'
    },
    {
      title: 'MikroTask',
      description: 'A platform that ranks the top 100 entities across various industries based on performance, relevance, and data-driven metrics.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'PrimeNG'],
      link: 'https://mikrotask.com',
      screenshot: 'https://mikrotask.com/screenshot.png'
    }
  ];  
}
