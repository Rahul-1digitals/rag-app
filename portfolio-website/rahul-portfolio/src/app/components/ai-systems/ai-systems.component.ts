import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PipelineStep {
  number: string;
  name: string;
  description: string;
  detail: string;
}

@Component({
  selector: 'app-ai-systems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-systems.component.html',
})
export class AiSystemsComponent implements AfterViewInit {
  pipelineSteps: PipelineStep[] = [
    {
      number: '01',
      name: 'Documents',
      description: 'PDF files loaded',
      detail: 'Source documents uploaded and read using Spring AI PDF reader',
    },
    {
      number: '02',
      name: 'Chunking',
      description: '500 token segments',
      detail:
        'Text split into 500-token chunks with 100-token overlap for context continuity',
    },
    {
      number: '03',
      name: 'Embeddings',
      description: 'OpenAI text-embedding-3-small',
      detail:
        'Each chunk converted to a high-dimensional vector using OpenAI embedding model',
    },
    {
      number: '04',
      name: 'Vector Store',
      description: 'SimpleVectorStore with persistence',
      detail:
        'Embeddings stored in SimpleVectorStore, serialized to disk for reuse',
    },
    {
      number: '05',
      name: 'Semantic Search',
      description: 'Similarity search with metadata filtering',
      detail:
        'User query embedded and compared against stored vectors using cosine similarity',
    },
    {
      number: '06',
      name: 'LLM',
      description: 'GPT-4o-mini contextual response',
      detail:
        'Top-k retrieved chunks passed as context to GPT-4o-mini with a grounding prompt',
    },
    {
      number: '07',
      name: 'Answer',
      description: 'Returned to Angular frontend',
      detail:
        'Response streamed back to Angular 18 UI with real-time display',
    },
  ];

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.pipeline-step').forEach((step, i) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.08,
      });
    });

    gsap.from('.ai-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ai-header',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}
