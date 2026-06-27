import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <div #card style="opacity: 0; transform: translateY(24px); width: 100%">

      <!-- Card: overflow:hidden clips everything (image, SVG curve) to rounded corners -->
      <div style="position: relative; border-radius: 26px; overflow: hidden; background: #ffffff;
                  box-shadow: 0 20px 56px rgba(0,0,0,0.13)">

        <!-- Photo area: white padding creates the frame -->
        <div style="padding: 32px 32px 36px 32px; background: #ffffff">
          <div style="border-radius: 18px; overflow: hidden; height: 245px; position: relative">
            <img src="assets/rahul-portrait.png"
                 alt="Rahul Siripuram"
                 style="position:absolute; inset:0; width:100%; height:100%;
                        object-fit:cover; object-position:top center; display:block" />
          </div>
        </div>



        <!-- Card body -->
        <div style="padding: 28px 22px 32px 22px; text-align: center">
          <h2 style="font-size:1.35rem; font-weight:800; color:#111;
                     font-family:'Space Grotesk',sans-serif; line-height:1.2">
            Rahul Siripuram
          </h2>
          <p style="margin-top:10px; font-size:0.84rem; line-height:1.65; color:#888">
            Full-stack engineer crafting Java backends and Angular UIs.
          </p>

          <!-- Social icons — centered, circle style -->
          <div style="margin-top:20px; display:flex; gap:14px; align-items:center; justify-content:center">

            <!-- GitHub -->
            <a href="https://github.com/Rahul-Siripuram1" target="_blank"
               style="color:#FF7A2E; width:36px; height:36px; border-radius:50%;
                      border:1.5px solid #FF7A2E; display:flex; align-items:center;
                      justify-content:center; transition:all 0.2s"
               onmouseenter="this.style.background='#FF7A2E';this.style.color='#fff'"
               onmouseleave="this.style.background='transparent';this.style.color='#FF7A2E'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/siripuram-rahul/" target="_blank"
               style="color:#FF7A2E; width:36px; height:36px; border-radius:50%;
                      border:1.5px solid #FF7A2E; display:flex; align-items:center;
                      justify-content:center; transition:all 0.2s"
               onmouseenter="this.style.background='#FF7A2E';this.style.color='#fff'"
               onmouseleave="this.style.background='transparent';this.style.color='#FF7A2E'">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            <!-- Email -->
            <a href="mailto:siripuramrahul3@gmail.com"
               style="color:#FF7A2E; width:36px; height:36px; border-radius:50%;
                      border:1.5px solid #FF7A2E; display:flex; align-items:center;
                      justify-content:center; transition:all 0.2s"
               onmouseenter="this.style.background='#FF7A2E';this.style.color='#fff'"
               onmouseleave="this.style.background='transparent';this.style.color='#FF7A2E'">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>

            <!-- Resume download -->
            <a href="assets/Rahul-resume.pdf"
               download="Rahul_Siripuram_Resume.pdf"
               title="Download Resume"
               style="color:#FF7A2E; width:36px; height:36px; border-radius:50%;
                      border:1.5px solid #FF7A2E; display:flex; align-items:center;
                      justify-content:center; transition:all 0.2s"
               onmouseenter="this.style.background='#FF7A2E';this.style.color='#fff'"
               onmouseleave="this.style.background='transparent';this.style.color='#FF7A2E'">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </div>
  `,
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('card') card!: ElementRef;

  async ngAfterViewInit() {
    const gsap = (await import('gsap')).default;
    gsap.to(this.card.nativeElement, {
      opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: 'power3.out',
    });
  }
}
