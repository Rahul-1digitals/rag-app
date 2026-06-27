import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  highlights: string[];
  link?: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
})
export class WorkComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'Taurani',
      year: 'Sep 2024 – Present',
      role: 'Full-Stack Engineer',
      stack: ['Angular', 'Spring Boot', 'Java', 'Spring AI', 'OpenAI'],
      summary:
        'Enterprise web platform with Angular component library, Spring Boot APIs, and a RAG proof-of-concept built per client requirement.',
      highlights: [
        'Angular UI component library for enterprise web application',
        'Spring Boot REST APIs for core business logic',
        'RAG POC — document ingestion, vector search, LLM Q&A using Spring AI',
      ],
    },
    {
      name: 'Macnica',
      year: 'Jun 2024 – Sep 2024',
      role: 'AEM Developer',
      stack: ['AEM', 'Angular', 'Java', 'HTL', 'SCSS', 'Mockito'],
      summary:
        '10+ Adobe Experience Manager components for enterprise client, with 100% unit test coverage and extended Sling Models.',
      highlights: [
        '10+ AEM components built with Angular, HTL, and SCSS',
        '100% unit test coverage using Mockito',
        '8+ Java Sling Models extended for backend data',
      ],
    },
    {
      name: 'RAG Q&A Application',
      year: '2025',
      role: 'Personal Project',
      stack: ['Spring Boot', 'Spring AI', 'Angular', 'OpenAI'],
      summary:
        'Full-stack document Q&A app using RAG pipeline with semantic chunking, vector search, and GPT-4o-mini. Live on Vercel.',
      highlights: [
        'PDF ingestion with semantic chunking (500 tokens, 100 overlap)',
        'Vector search with metadata filtering using SimpleVectorStore',
        'Angular 18 UI with real-time streaming responses',
      ],
      link: 'https://rag-app-one.vercel.app/',
    },
  ];

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.work-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.1,
      });
    });
  }
}
