import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  initial: string;
  accent: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .skills-section { padding: 4rem 1.5rem; background: #F7F4EF; }
    @media (min-width: 768px)  { .skills-section { padding: 5rem 1.5rem 5rem 0; } }
    @media (min-width: 1024px) { .skills-section { padding: 5.5rem 2rem 5.5rem 0; } }
    @media (min-width: 1200px) { .skills-section { padding: 6rem 3rem 6rem 0; } }
    .section-header { margin-bottom: 3.5rem; }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 900;
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: #111;
      line-height: 1;
      margin-top: 0.75rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    @media (min-width: 560px)  { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1200px) { .skills-grid { grid-template-columns: repeat(3, 1fr); } }

    .skill-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 1.75rem;
      position: relative;
      overflow: hidden;
      border: 1px solid #E8E4DE;
      opacity: 0;
      transition: transform 0.32s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.32s ease,
                  border-color 0.25s ease;
    }
    .skill-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px rgba(0,0,0,0.1);
      border-color: #FF7A2E;
    }

    .card-accent-bar {
      height: 3px;
      border-radius: 2px;
      margin-bottom: 1.5rem;
    }
    .card-initial {
      position: absolute;
      top: -0.75rem;
      right: 1rem;
      font-size: 7rem;
      font-weight: 900;
      font-family: 'Space Grotesk', sans-serif;
      color: #111;
      opacity: 0.055;
      pointer-events: none;
      line-height: 1;
      user-select: none;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }
    .card-category {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #111;
      font-family: 'Space Grotesk', sans-serif;
    }
    .card-count {
      font-size: 0.65rem;
      color: #bbb;
      background: #F7F4EF;
      border-radius: 999px;
      padding: 0.15rem 0.6rem;
      letter-spacing: 0.04em;
    }

    .pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }
    .pill {
      font-size: 0.76rem;
      padding: 0.3rem 0.7rem;
      border-radius: 999px;
      background: #F7F4EF;
      color: #555;
      border: 1px solid #E8E4DE;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      opacity: 0;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
    .skill-card:hover .pill {
      background: #FFF3EE;
      border-color: #FFCAB0;
      color: #333;
    }

    .marquee-strip {
      margin-top: 4rem;
      overflow: hidden;
      border-top: 1px solid #E8E4DE;
      padding-top: 2rem;
    }
    .marquee-track {
      display: flex;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
    }
    .marquee-item {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #aaa;
      font-family: 'Space Grotesk', sans-serif;
      margin-right: 3rem;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 3rem;
    }
    .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: #FF7A2E; }

    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
  `],
  template: `
    <section id="skills" class="skills-section">

      <!-- Header -->
      <div class="section-header skills-header">
        <p class="eyebrow">03 / Skills</p>
        <h2 class="section-title">What I Work With</h2>
      </div>

      <!-- Cards -->
      <div class="skills-grid">
        <div *ngFor="let group of skillGroups; let i = index"
             class="skill-card">

          <!-- Accent bar -->
          <div class="card-accent-bar" [style.background]="group.accent"></div>

          <!-- Big faded initial -->
          <span class="card-initial">{{ group.initial }}</span>

          <!-- Category header -->
          <div class="card-header">
            <span class="card-category">{{ group.category }}</span>
            <span class="card-count">{{ group.skills.length }} skills</span>
          </div>

          <!-- Skill pills -->
          <div class="pills">
            <span *ngFor="let skill of group.skills" class="pill">{{ skill }}</span>
          </div>

        </div>
      </div>

      <!-- Marquee -->
      <div class="marquee-strip">
        <div class="marquee-track">
          <span *ngFor="let tech of marqueeTech.concat(marqueeTech)" class="marquee-item">
            {{ tech }}<span class="marquee-dot"></span>
          </span>
        </div>
      </div>

    </section>
  `,
})
export class SkillsComponent implements AfterViewInit {
  skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      initial: 'B',
      accent: '#F5651F',
      skills: ['Java', 'Spring Boot', 'Spring AI', 'REST APIs', 'Maven', 'JUnit', 'Mockito'],
    },
    {
      category: 'Frontend',
      initial: 'F',
      accent: '#C8F135',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'RxJS'],
    },
    {
      category: 'AI / GenAI',
      initial: 'A',
      accent: '#111111',
      skills: ['RAG', 'OpenAI API', 'Spring AI', 'Vector Search', 'LLMs', 'Embeddings'],
    },
    {
      category: 'CMS & Enterprise',
      initial: 'C',
      accent: '#F5651F',
      skills: ['Adobe Experience Manager', 'AEM Components', 'HTL', 'Sling Models', 'OSGi'],
    },
    {
      category: 'Data & Storage',
      initial: 'D',
      accent: '#C8F135',
      skills: ['SQL', 'JDBC', 'Vector Store', 'MySQL'],
    },
    {
      category: 'Dev Tools',
      initial: 'T',
      accent: '#111111',
      skills: ['Git', 'GitHub', 'Agile', 'Scrum', 'SonarQube', 'IntelliJ'],
    },
  ];

  marqueeTech = [
    'Java', 'Spring Boot', 'Angular', 'TypeScript', 'Spring AI',
    'RAG', 'AEM', 'OpenAI', 'REST APIs', 'JUnit', 'SQL', 'Git',
  ];

  async ngAfterViewInit() {
    const gsap = (await import('gsap')).default;
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    // Header slide-up
    gsap.fromTo('.skills-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-header', start: 'top 85%' } }
    );

    // Cards stagger entrance
    const cards = document.querySelectorAll<HTMLElement>('#skills .skill-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 52, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          delay: (i % 3) * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            // Pop pills in after card lands
            const pills = card.querySelectorAll<HTMLElement>('.pill');
            gsap.to(pills, {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
              stagger: 0.045,
            });
          },
        }
      );
    });
  }
}
