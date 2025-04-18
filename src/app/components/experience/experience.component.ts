import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  period: string;
  company: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      period: '2023 - Present',
      company: 'Quantum Digital',
      title: 'Senior Frontend Developer',
      description: 'Leading the development of responsive web applications using Angular and modern frontend technologies. Implemented state management solutions, optimized performance, and mentored junior developers. Collaborated with design and backend teams to deliver seamless user experiences across multiple projects.'
    },
    {
      period: '2021 - 2023',
      company: 'TechNova Solutions',
      title: 'Full-Stack Engineer',
      description: 'Developed and maintained various web applications using Angular, Node.js, and MongoDB. Created RESTful APIs, implemented authentication systems, and integrated third-party services. Participated in agile development processes and contributed to architectural decisions for scalable applications.'
    }
  ];
}
