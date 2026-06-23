import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DocumentSelection } from '../../services/document-selection';
import { Api } from '../../services/api';
import { LayoutService } from '../../services/layout.service';

interface RagDocument {
  id: string;
  name: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-document-panel',
  imports: [FormsModule],
  templateUrl: './document-panel.html',
  styleUrl: './document-panel.scss',
})
export class DocumentPanel implements OnInit {
  searchQuery = signal('');
  documents = signal<RagDocument[]>([]);

  filteredDocuments = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return q
      ? this.documents().filter(d => d.name.toLowerCase().includes(q))
      : this.documents();
  });

  constructor(
    private documentSelection: DocumentSelection,
    private api: Api,
    protected layout: LayoutService
  ) {}

  ngOnInit() {
    this.api.getDocuments().subscribe(docs => {
      this.documents.set(docs.map(name => ({ id: name, name, isSelected: false })));
    });
  }

  toggleDocumentSelection(doc: RagDocument): void {
    this.documents.update(list =>
      list.map(d => d.id === doc.id ? { ...d, isSelected: !d.isSelected } : d)
    );
  }

  get hasSelection(): boolean {
    return this.documents().some(d => d.isSelected);
  }

  get selectedCount(): number {
    return this.documents().filter(d => d.isSelected).length;
  }

  startChat(): void {
    const selectedNames = this.documents().filter(d => d.isSelected).map(d => d.name);
    this.documentSelection.commitSelection(selectedNames);
  }
}
