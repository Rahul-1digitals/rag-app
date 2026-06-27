import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.from('.resume-content', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.resume-content',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.resume-card', {
      opacity: 0,
      x: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.resume-card',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      delay: 0.2,
    });
  }
}
