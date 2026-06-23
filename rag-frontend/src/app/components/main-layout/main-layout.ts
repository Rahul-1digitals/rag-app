import { Component } from '@angular/core';
import { ChatPanel } from '../chat-panel/chat-panel';
import { DocumentPanel } from '../document-panel/document-panel';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-main-layout',
  imports: [DocumentPanel, ChatPanel],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  constructor(protected layout: LayoutService) {}
}
