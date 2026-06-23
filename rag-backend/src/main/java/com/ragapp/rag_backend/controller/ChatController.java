package com.ragapp.rag_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ragapp.rag_backend.model.ChatRequest;
import com.ragapp.rag_backend.model.ChatResponse;
import com.ragapp.rag_backend.service.ChatService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/chat")
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request) {
        String answer = chatService.chat(request.getQuestion(), request.getDocuments(), request.getHistory());
        ChatResponse response = new ChatResponse();
        response.setAnswer(answer);
        return response;
    }
}
