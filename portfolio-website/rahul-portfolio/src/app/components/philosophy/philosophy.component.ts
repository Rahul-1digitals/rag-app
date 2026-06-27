import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Belief {
  number: string;
  statement: string;
  sub: string;
}

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './philosophy.component.html',
})
export class PhilosophyComponent implements AfterViewInit {
  beliefs: Belief[] = [
    {
      number: '01',
      statement: 'Code is communication',
      sub: 'Write for the next developer, not the compiler.',
    },
    {
      number: '02',
      statement: 'Ship working software',
      sub: 'Working beats perfect. Iterating beats waiting.',
    },
    {
      number: '03',
      statement: 'Understand the why',
      sub: 'Technology serves people, not the other way around.',
    },
    {
      number: '04',
      statement: 'Test with intention',
      sub: 'Test what matters, skip what doesn\'t.',
    },
    {
      number: '05',
      statement: 'Keep learning',
      sub: 'The best engineers stay curious and humble.',
    },
    {
      number: '06',
      statement: 'Build with care',
      sub: 'Small details compound into great products.',
    },
  ];

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.belief-row').forEach((row, i) => {
      gsap.from(row, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.07,
      });
    });

    gsap.from('.philosophy-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.philosophy-header',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}
