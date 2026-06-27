import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  date: string;
  title: string;
  description: string;
  tag?: string;
  isNext?: boolean;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.component.html',
})
export class JourneyComponent implements AfterViewInit {
  milestones: Milestone[] = [
    {
      date: 'Jun 2020',
      title: 'Started BTech ECE',
      description: 'Enrolled at RGUKT IIIT-Basar for Bachelor of Technology in Electronics and Communications Engineering.',
      tag: 'Education',
    },
    {
      date: 'Jun 2023',
      title: 'ML Internship',
      description: 'Machine Learning Internship at Li-Mat Soft Solutions — first hands-on exposure to AI and Python.',
      tag: 'Internship',
    },
    {
      date: 'May 2024',
      title: 'Graduated BTech',
      description: 'Completed Bachelor of Technology with a CGPA of 8.5. Ready to build real things.',
      tag: 'Milestone',
    },
    {
      date: 'Jun 2024',
      title: 'Joined OneDigitals',
      description: 'Started as a Software Engineer. First project: Macnica — AEM components with HTL, Angular, and Java.',
      tag: 'Career',
    },
    {
      date: 'Sep 2024',
      title: 'Taurani Project',
      description: 'Led Angular UI library and Spring Boot API development. Built a RAG proof-of-concept using Spring AI and OpenAI.',
      tag: 'AI',
    },
    {
      date: '2025',
      title: 'Personal RAG App',
      description: 'Built and deployed a full-stack RAG Q&A application. Live at rag-app-one.vercel.app.',
      tag: 'Project',
    },
    {
      date: 'Next →',
      title: 'Full-stack AI Engineer',
      description: 'Deepening expertise in Spring AI, GenAI systems architecture, and production AI applications.',
      tag: 'Future',
      isNext: true,
    },
  ];

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.milestone-item').forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.1,
      });
    });

    gsap.from('.journey-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.journey-header',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}
