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

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HeaderComponent, AboutComponent, ExperienceComponent, TechnologiesComponent, ContactComponent, FooterComponent, ProjectsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  activeSection: string = 'about';
  shootingStars: any[] = [];
  scrollY: number = 0;

  // Parallax offset values for different layers
  parallaxOffsets = {
    far: 0,
    mid: 0,
    near: 0,
    nebula: 0
  };

  ngOnInit() {
    // Create shooting stars with random positions and delays
    this.createShootingStars();

    // Set up intersection observer for section tracking
    this.setupSectionObserver();

    AOS.init({
      duration: 800, // optional - animation duration
      easing: 'ease-in-out', // optional - animation easing
      once: true, // optional - whether animation should happen only once
      mirror: false // optional - whether elements should animate out while scrolling past them
    });
  }

  createShootingStars() {
    // Create 10 shooting stars with random properties
    for (let i = 0; i < 10; i++) {
      this.shootingStars.push({
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight / 2, // Start in top half of screen
        width: Math.random() * 80 + 30, // Width between 30-110px
        angle: Math.random() * 20 + 30, // Angle between 30 and 50 degrees (diagonal downward)
        delay: Math.random() * 15 // Random delay up to 15s
      });
    }
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

  // Update shooting stars on window resize
  @HostListener('window:resize')
  onResize() {
    this.shootingStars = [];
    this.createShootingStars();
  }

  // Handle scroll events for parallax effect
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;

    // Calculate parallax offsets based on scroll position
    // Different layers move at different speeds
    this.parallaxOffsets.far = this.scrollY * 0.1;    // Slowest
    this.parallaxOffsets.mid = this.scrollY * 0.2;    // Medium
    this.parallaxOffsets.near = this.scrollY * 0.3;   // Fastest
    this.parallaxOffsets.nebula = this.scrollY * 0.15; // Between slow and medium
  }
}
