import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div class="pointer-events-auto bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-6 border border-gray-100">
        <a href="#hero" class="nav-icon group" title="Home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-gray-500 group-hover:text-orange-500 transition-colors">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
        <a href="#work" class="nav-icon group" title="Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-gray-500 group-hover:text-orange-500 transition-colors">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </a>
        <a href="#skills" class="nav-icon group" title="Skills">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-gray-500 group-hover:text-orange-500 transition-colors">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </a>
        <a href="#journey" class="nav-icon group" title="Experience">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-gray-500 group-hover:text-orange-500 transition-colors">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </a>
        <a href="#contact" class="nav-icon group" title="Contact">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-gray-500 group-hover:text-orange-500 transition-colors">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .nav-icon { display: flex; align-items: center; justify-content: center; cursor: pointer; }
  `]
})
export class NavComponent {}
