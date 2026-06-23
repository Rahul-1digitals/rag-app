package com.ragapp.rag_backend.model;

import java.util.List;

public class ChatRequest {
    private List<String> documents;
    private String question;
    private List<HistoryMessage> history;

    public List<String> getDocuments() { return documents; }
    public void setDocuments(List<String> documents) { this.documents = documents; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public List<HistoryMessage> getHistory() { return history; }
    public void setHistory(List<HistoryMessage> history) { this.history = history; }
}
