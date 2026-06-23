import { Component, OnInit, signal, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DocumentSelection } from '../../services/document-selection';
import { Api, HistoryMessage } from '../../services/api';
import { ThemeService } from '../../services/theme.service';
import { LayoutService } from '../../services/layout.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  time: Date;
}

@Component({
  selector: 'app-chat-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-panel.html',
  styleUrl: './chat-panel.scss',
})
export class ChatPanel implements OnInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  selectedDocs$: Observable<string[] | null>;
  selectedDocNames: string[] = [];
  messages = signal<ChatMessage[]>([]);
  currentMessage = signal('');
  isLoading = signal(false);
  copiedIndex = signal<number | null>(null);

  readonly suggestions = [
    'Summarize this document',
    'What are the key concepts?',
    'Explain this topic simply',
    'What are the main takeaways?',
  ];

  constructor(
    private documentSelection: DocumentSelection,
    private api: Api,
    protected theme: ThemeService,
    protected layout: LayoutService
  ) {
    this.selectedDocs$ = this.documentSelection.selectedDocs$;

    effect(() => {
      this.messages();
      setTimeout(() => this.scrollToBottom(), 0);
    });
  }

  ngOnInit() {
    this.documentSelection.selectedDocs$.subscribe(docs => {
      this.selectedDocNames = docs ?? [];
    });
  }

  sendMessage(text?: string): void {
    const content = (text ?? this.currentMessage()).trim();
    if (!content || this.isLoading()) return;

    const history: HistoryMessage[] = this.messages().map(m => ({ role: m.role, content: m.content }));
    this.messages.update(list => [...list, { role: 'user', content, time: new Date() }]);
    this.currentMessage.set('');
    this.isLoading.set(true);

    this.api.sendMessage(this.selectedDocNames, content, history).subscribe({
      next: response => {
        this.messages.update(list => [...list, { role: 'assistant', content: response.answer, time: new Date() }]);
        this.isLoading.set(false);
      },
      error: () => {
        this.messages.update(list => [...list, { role: 'assistant', content: 'Something went wrong. Please try again.', time: new Date() }]);
        this.isLoading.set(false);
      }
    });
  }

  copyMessage(content: string, index: number): void {
    navigator.clipboard.writeText(content);
    this.copiedIndex.set(index);
    setTimeout(() => this.copiedIndex.set(null), 2000);
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }
}
