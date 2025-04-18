import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { NavigationMobileComponent } from "./components/navigation-mobile/navigation-mobile.component";
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { StarfieldComponent } from "./components/starfield/starfield.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HeaderComponent, AboutComponent, ExperienceComponent, TechnologiesComponent, ContactComponent, FooterComponent, ProjectsComponent, CommonModule, StarfieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeSection: string = 'about';
  shootingStars: any[] = [];
  scrollY: number = 0;

  // Parallax offset values for different layers
  parallaxOffsets = {
    nebula: 0
  };

  ngOnInit() {
    // Set up intersection observer for section tracking
    this.setupSectionObserver();

    AOS.init({
      duration: 800, // optional - animation duration
      easing: 'ease-in-out', // optional - animation easing
      once: true, // optional - whether animation should happen only once
      mirror: false // optional - whether elements should animate out while scrolling past them
    });
  }

  setupSectionObserver() {
    // Wait for DOM to be ready
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Section is considered in view when 30% visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        observer.observe(section);
      });
    }, 100);
  }

  // Handle scroll events for parallax effect
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;

    // Calculate parallax offsets based on scroll position
    this.parallaxOffsets.nebula = this.scrollY * 0.15; // Between slow and medium
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const light = document.getElementById('cursor-light');
    if (light) {
      light.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(100, 150, 255, 0.1) 0%, transparent 40%)`;
    }
  }  
}
