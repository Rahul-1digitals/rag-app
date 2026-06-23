import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarOpen = signal(typeof window !== 'undefined' ? window.innerWidth > 768 : true);

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }
}
