package com.ragapp.rag_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/documents")
public class DocumentController {
    @GetMapping
    public List<String> getDocuments() {
        // Return a list of document names or IDs
        return List.of("Attention Is All You Need", "You Dont Know JS", "Pro Git");
    }
}
