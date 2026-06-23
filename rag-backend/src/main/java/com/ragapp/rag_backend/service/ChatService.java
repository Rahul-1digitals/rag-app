package com.ragapp.rag_backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.ai.vectorstore.filter.Filter;
import org.springframework.ai.vectorstore.filter.FilterExpressionBuilder;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    private final VectorStore vectorStore;
    private final ChatModel chatModel;

    public ChatService(VectorStore vectorStore, ChatModel chatModel) {
        this.vectorStore = vectorStore;
        this.chatModel = chatModel;
    }

    public String chat(String question, List<String> selectedDocuments, List<com.ragapp.rag_backend.model.HistoryMessage> history) {

        // Step 1: Retrieve relevant chunks filtered by selected documents
        FilterExpressionBuilder b = new FilterExpressionBuilder();
        Filter.Expression filter = b.in("document_name", selectedDocuments.toArray()).build();

        SearchRequest request = SearchRequest.builder()
                .query(question)
                .topK(5)
                .filterExpression(filter)
                .build();

        List<Document> chunks = vectorStore.similaritySearch(request);

        // Step 2: Join chunk texts into a single context string
        String context = chunks.stream()
                .map(Document::getText)
                .collect(Collectors.joining("\n\n"));

        // Step 3: Build conversation history string
        String historyText = "";
        if (history != null && !history.isEmpty()) {
            historyText = "\nConversation so far:\n" +
                    history.stream()
                            .map(h -> (h.getRole().equals("user") ? "User: " : "Assistant: ") + h.getContent())
                            .collect(Collectors.joining("\n")) +
                    "\n";
        }

        // Step 4: Build the prompt with context + history + question
        String prompt = """
                You are a helpful assistant that answers questions strictly based on the provided context.
                Do not use any outside knowledge.

                Context:
                %s
                %s
                Current question: %s

                Answer based only on the context above. If the answer is not in the context, say "I couldn't find that in the selected documents."
                """.formatted(context, historyText, question);

        // Step 5: Send to LLM and return the generated answer
        return chatModel.call(prompt);
    }
}
