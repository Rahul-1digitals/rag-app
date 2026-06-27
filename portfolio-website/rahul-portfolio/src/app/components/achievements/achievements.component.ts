import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sub: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
})
export class AchievementsComponent implements AfterViewInit {
  metrics: Metric[] = [
    {
      value: '2+',
      numericValue: 2,
      suffix: '+',
      label: 'Years of Experience',
      sub: 'Building Java and Angular applications in production',
    },
    {
      value: '10+',
      numericValue: 10,
      suffix: '+',
      label: 'AEM Components Shipped',
      sub: 'With 100% unit test coverage on Macnica project',
    },
    {
      value: '57%',
      numericValue: 57,
      suffix: '%',
      label: 'Test Coverage Achieved',
      sub: 'Improved from 7% baseline on critical path',
    },
    {
      value: '3',
      numericValue: 3,
      suffix: '',
      label: 'Active Client Projects',
      sub: 'Simultaneously maintained across different domains',
    },
    {
      value: '∞',
      numericValue: -1,
      suffix: '',
      label: 'Learning Never Stops',
      sub: 'Currently deepening Spring AI and GenAI systems',
    },
  ];

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>('.metric-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
          onEnter: () => {
            // CountUp animation
            const metric = this.metrics[i];
            if (metric.numericValue === -1) {
              // infinity symbol stays as-is in template
              return;
            }
            const obj = { value: 0 };
            gsap.to(obj, {
              value: metric.numericValue,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                const el = document.querySelectorAll('.metric-display')[i];
                if (el) {
                  el.textContent = Math.round(obj.value) + metric.suffix;
                }
              },
              onComplete: () => {
                const el = document.querySelectorAll('.metric-display')[i];
                if (el) {
                  el.textContent = metric.value;
                }
              },
            });
          },
        },
        delay: i * 0.08,
      });
    });

    gsap.from('.achievements-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.achievements-header',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}
