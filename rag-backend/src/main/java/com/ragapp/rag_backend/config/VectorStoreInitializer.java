package com.ragapp.rag_backend.config;

import java.io.File;

import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class VectorStoreInitializer implements CommandLineRunner {

    private final SimpleVectorStore vectorStore;

    public VectorStoreInitializer(SimpleVectorStore vectorStore) {
        this.vectorStore = vectorStore;
    }

    @Override
    public void run(String... args) {
        File file = new File("vector-store.json");
        if (file.exists()) {
            vectorStore.load(file);
            System.out.println("Vector store loaded from disk.");
        } else {
            System.out.println("No vector store found. Please call /api/ingest first.");
        }
    }
}
