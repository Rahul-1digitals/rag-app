import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentSelection {
  private selectedDocsSubject =
    new BehaviorSubject<string[] | null>(null);

  selectedDocs$ = this.selectedDocsSubject.asObservable();

  commitSelection(ids: string[]) {
    this.selectedDocsSubject.next(ids);
  }
}
