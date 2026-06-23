package com.ragapp.rag_backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ragapp.rag_backend.service.IngestionService;

@RestController
@RequestMapping("/api/ingest")
public class IngestionController {
    private final IngestionService ingestionService;

    public IngestionController(IngestionService ingestionService) {
        this.ingestionService = ingestionService;
    }

    @PostMapping
    public String ingestAll() {
        ingestionService.ingestDocument("Attention Is All You Need (2017 paper).pdf", "Attention Is All You Need");
        ingestionService.ingestDocument("You_Dont_Know_JS_Up_and_Going.pdf", "You Dont Know JS");
        ingestionService.ingestDocument("progit.pdf", "Pro Git");
        ingestionService.saveToFile();
        return "Ingestion complete";
    }
}
