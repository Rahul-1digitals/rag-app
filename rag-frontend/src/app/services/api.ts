import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'https://4f98-196-12-41-78.ngrok-free.app/api';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/documents`);
  }

  sendMessage(documents: string[], question: string, history: HistoryMessage[]): Observable<{ answer: string }> {
    return this.http.post<{ answer: string }>(`${this.baseUrl}/chat`, { documents, question, history });
  }
}
