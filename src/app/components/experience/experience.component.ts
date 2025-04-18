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
      period: 'Dec 2024 – Present',
      company: 'Mixt Technologies (Remote, Part-Time)',
      title: 'Frontend Developer',
      description: 'Developing Webintel — a website analytics and performance monitoring app that offers SEO recommendations and AI-driven insights. Collaborating with a cross-functional team to implement clean code practices, performance optimizations, and scalable frontend solutions.'
    },
    {
      period: 'Dec 2022 – Present',
      company: 'Tramatch LTD (Remote)',
      title: 'Lead Frontend Developer',
      description: 'Led the development of Tramatch, a faith-based dating platform. Used Angular to improve responsiveness and reduce load times by 40%, enhancing user engagement. Collaborated with designers to build adaptive interfaces with HTML5, CSS3, and Angular Material. Integrated third-party services, optimized performance with lazy loading and caching, and implemented robust validation, leading to measurable improvements in UX and data accuracy.'
    },
    {
      period: 'Nov 2021 – May 2022',
      company: 'Taquatech Limited (Uyo, Nigeria)',
      title: 'Junior Frontend Developer',
      description: 'Contributed to building a Requisition Management System and Academa, a scalable school management platform supporting 1000+ users. Enhanced operational efficiency and satisfaction across clients by delivering responsive apps, optimizing interfaces, and implementing UX improvements.'
    },
    {
      period: '2023 – Present',
      company: 'Eelclip (Side Project)',
      title: 'Frontend Developer & Co-Founder',
      description: 'Co-founded and built Eelclip, a video creation platform with a drag-and-drop interface. Developed the frontend in Angular 17, established testing with Karma for improved reliability, and standardized code practices to reduce technical debt and increase code coverage by 25%.'
    }
  ];  
}
