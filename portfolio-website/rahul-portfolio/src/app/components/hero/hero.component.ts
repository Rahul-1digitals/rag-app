import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  styles: [`
    .hero-section { padding: 4rem 1.5rem; }
    @media (min-width: 768px)  { .hero-section { padding: 5rem 1.5rem 4rem 0; } }
    @media (min-width: 1024px) { .hero-section { padding: 5.5rem 2rem 5rem 0; } }
    @media (min-width: 1200px) { .hero-section { padding: 5.5rem 3rem 5rem 0; } }

    .specialty-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    @media (min-width: 540px)  { .specialty-grid { grid-template-columns: 1fr 1fr; } }

    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
  `],
  template: `
    <section id="hero" class="hero-section" style="background:#F7F4EF">

      <!-- Eyebrow -->
      <p #text class="eyebrow" style="margin-bottom: 1.5rem; opacity:0; transform:translateY(20px)">
        Software Engineer · Hyderabad · IN
      </p>

      <!-- Big title -->
      <div #title style="opacity:0; transform:translateY(30px); line-height:0.88">
        <h1 style="font-size:clamp(3rem,6vw,6.5rem); font-weight:900;
                   font-family:'Space Grotesk',sans-serif; color:#111">
          SOFTWARE
        </h1>
        <h1 style="font-size:clamp(3rem,6vw,6.5rem); font-weight:900;
                   font-family:'Space Grotesk',sans-serif;
                   -webkit-text-stroke:2px #111; color:transparent">
          ENGINEER
        </h1>
      </div>

      <!-- Description + CTA -->
      <div #desc style="margin-top:2rem; opacity:0; transform:translateY(20px); max-width:520px">
        <p style="font-size:1.05rem; line-height:1.7; color:#666">
          Passionate about building scalable software, intelligent systems and modern digital
          experiences. I specialise in Java, Spring Boot, Angular, and applied AI / RAG.
        </p>
        <div style="margin-top:1.75rem; display:flex; gap:1rem; flex-wrap:wrap">
          <a href="#work"
             style="padding:0.75rem 1.6rem; border-radius:999px; background:#F5651F;
                    color:#fff; font-size:0.875rem; font-weight:500; text-decoration:none;
                    transition:transform 0.2s, box-shadow 0.2s"
             onmouseenter="this.style.transform='scale(1.05)';this.style.boxShadow='0 8px 24px rgba(245,101,31,0.35)'"
             onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
            View My Work
          </a>
          <a href="#contact"
             style="padding:0.75rem 1.6rem; border-radius:999px; border:2px solid #111;
                    color:#111; font-size:0.875rem; font-weight:500; text-decoration:none;
                    transition:transform 0.2s"
             onmouseenter="this.style.transform='scale(1.05)'"
             onmouseleave="this.style.transform='scale(1)'">
            Get In Touch
          </a>
          <a href="assets/Rahul-resume.pdf"
             download="Rahul_Siripuram_Resume.pdf"
             style="padding:0.75rem 1.6rem; border-radius:999px; border:2px solid #E5E1DB;
                    color:#666; font-size:0.875rem; font-weight:500; text-decoration:none;
                    display:inline-flex; align-items:center; gap:0.4rem; transition:all 0.2s"
             onmouseenter="this.style.borderColor='#FF7A2E';this.style.color='#FF7A2E'"
             onmouseleave="this.style.borderColor='#E5E1DB';this.style.color='#666'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div #stats class="stats-grid" style="margin-top:3rem; padding-top:2rem; border-top:1px solid #E5E1DB;
                         gap:1.5rem; opacity:0; transform:translateY(20px)">
        <div>
          <div style="font-size:2.75rem; font-weight:900; color:#F5651F;
                      font-family:'Space Grotesk',sans-serif; line-height:1">+2</div>
          <div class="eyebrow" style="margin-top:6px">YEARS OF<br>EXPERIENCE</div>
        </div>
        <div>
          <div style="font-size:2.75rem; font-weight:900; color:#F5651F;
                      font-family:'Space Grotesk',sans-serif; line-height:1">+5</div>
          <div class="eyebrow" style="margin-top:6px">PROJECTS<br>COMPLETED</div>
        </div>
        <div>
          <div style="font-size:2.75rem; font-weight:900; color:#F5651F;
                      font-family:'Space Grotesk',sans-serif; line-height:1">+3</div>
          <div class="eyebrow" style="margin-top:6px">PRODUCTION<br>APPS SHIPPED</div>
        </div>
      </div>

      <!-- Specialty cards -->
      <div #cards class="specialty-grid" style="margin-top:2.5rem; opacity:0; transform:translateY(20px)">

        <!-- Card 1: Full-Stack → links to #work -->
        <a href="#work" style="text-decoration:none; border-radius:16px; padding:1.5rem; min-height:180px; position:relative;
                    overflow:hidden; background:#F5651F; display:flex; flex-direction:column; justify-content:space-between;
                    transition:transform 0.2s, box-shadow 0.2s; cursor:pointer"
           onmouseenter="this.style.transform='scale(1.02)';this.style.boxShadow='0 12px 32px rgba(245,101,31,0.4)'"
           onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
          <div style="position:absolute;inset:0;opacity:0.18;pointer-events:none">
            <svg width="100%" height="100%" viewBox="0 0 260 180">
              <path d="M0 100 Q65 45 130 100 Q195 155 260 100" fill="none" stroke="white" stroke-width="1.5"/>
              <path d="M0 130 Q65 75 130 130 Q195 185 260 130" fill="none" stroke="white" stroke-width="1"/>
            </svg>
          </div>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
          <div>
            <h3 style="color:white;font-weight:900;font-size:1.05rem;text-transform:uppercase;line-height:1.25;font-family:'Space Grotesk',sans-serif">
              Full-Stack &<br>Backend Systems
            </h3>
            <div style="margin-top:0.75rem;display:flex;justify-content:flex-end">
              <div style="width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
            </div>
          </div>
        </a>

        <!-- Card 2: Java/Angular/AI → links to #skills, lime color -->
        <a href="#skills" style="text-decoration:none; border-radius:16px; padding:1.5rem; min-height:180px; position:relative;
                    overflow:hidden; background:#C8F135; display:flex; flex-direction:column; justify-content:space-between;
                    transition:transform 0.2s, box-shadow 0.2s; cursor:pointer"
           onmouseenter="this.style.transform='scale(1.02)';this.style.boxShadow='0 12px 32px rgba(200,241,53,0.45)'"
           onmouseleave="this.style.transform='scale(1)';this.style.boxShadow='none'">
          <div style="position:absolute;inset:0;opacity:0.2;pointer-events:none">
            <svg width="100%" height="100%" viewBox="0 0 260 180">
              <polyline points="0,60 30,20 60,60 90,20 120,60 150,20 180,60 210,20 260,60" fill="none" stroke="#111" stroke-width="1.2"/>
              <polyline points="0,110 30,70 60,110 90,70 120,110 150,70 180,110 210,70 260,110" fill="none" stroke="#111" stroke-width="0.8"/>
              <polyline points="0,155 30,115 60,155 90,115 120,155 150,115 180,155 210,115 260,155" fill="none" stroke="#111" stroke-width="0.6"/>
            </svg>
          </div>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.8">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
          <div>
            <h3 style="color:#111;font-weight:900;font-size:1.05rem;text-transform:uppercase;line-height:1.25;font-family:'Space Grotesk',sans-serif">
              Java · Angular<br>AI / RAG
            </h3>
            <div style="margin-top:0.75rem;display:flex;justify-content:flex-end">
              <div style="width:30px;height:30px;border-radius:8px;background:rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:center">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
            </div>
          </div>
        </a>
      </div>

    </section>
  `,
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('text')  text!:  ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('desc')  desc!:  ElementRef;
  @ViewChild('stats') stats!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;

  async ngAfterViewInit() {
    const gsap = (await import('gsap')).default;
    const tl = gsap.timeline({ delay: 0.4 });
    tl.to(this.text.nativeElement,  { opacity:1, y:0, duration:0.7, ease:'power3.out' })
      .to(this.title.nativeElement, { opacity:1, y:0, duration:0.9, ease:'power3.out' }, '-=0.4')
      .to(this.desc.nativeElement,  { opacity:1, y:0, duration:0.8, ease:'power3.out' }, '-=0.5')
      .to(this.stats.nativeElement, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.4')
      .to(this.cards.nativeElement, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.3');
  }
}
