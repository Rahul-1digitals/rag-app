import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    SidebarComponent,
    HeroComponent,
    WorkComponent,
    SkillsComponent,
    JourneyComponent,
    ContactComponent,
    FooterComponent,
  ],
  styles: [`
    .page-layout {
      display: flex;
      min-height: 100vh;
      background: #F7F4EF;
    }

    /* LEFT sidebar – sticky on desktop */
    .left-sidebar {
      display: none;
    }

    /* RIGHT scrollable column */
    .right-content {
      flex: 1;
      min-width: 0;
    }

    /* Mobile: profile card at top */
    .mobile-card {
      display: block;
      padding: 5.5rem 2rem 0 2rem;
    }

    /* Tablet – iPad Mini / Air (768px – 1023px) */
    @media (min-width: 768px) {
      .left-sidebar {
        display: flex;
        flex-direction: column;
        width: 280px;
        flex-shrink: 0;
      }
      .sidebar-inner {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 1.5rem 1rem 1.5rem 1.5rem;
      }
      .right-content {
        padding-left: 1rem;
      }
      .mobile-card {
        display: none;
      }
    }

    /* Tablet large / small desktop (1024px – 1199px) */
    @media (min-width: 1024px) {
      .left-sidebar { width: 380px; }
      .sidebar-inner { padding: 2rem 2rem 2rem 3rem; }
      .right-content { padding-left: 2rem; }
    }

    /* Full desktop (1200px+) */
    @media (min-width: 1200px) {
      .left-sidebar { width: 500px; }
      .sidebar-inner { padding: 2rem 3rem 2rem 5rem; }
      .right-content { padding-left: 3rem; }
    }
  `],
  template: `
    <app-nav></app-nav>

    <div class="page-layout">

      <!-- LEFT: sticky sidebar with profile card (desktop only) -->
      <aside class="left-sidebar">
        <div class="sidebar-inner">
          <app-sidebar></app-sidebar>
        </div>
      </aside>

      <!-- RIGHT: all content scrolls here -->
      <div class="right-content">

        <!-- Profile card on mobile (stacked, at top) -->
        <div class="mobile-card">
          <app-sidebar></app-sidebar>
        </div>

        <app-hero></app-hero>
        <app-work></app-work>
        <app-skills></app-skills>
        <app-journey></app-journey>
        <app-contact></app-contact>
        <app-footer></app-footer>

      </div>
    </div>
  `,
})
export class AppComponent {}
