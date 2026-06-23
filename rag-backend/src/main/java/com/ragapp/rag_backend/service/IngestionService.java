package com.ragapp.rag_backend.service;

import java.io.File;
import java.util.List;

import org.springframework.ai.document.Document;
import org.springframework.ai.reader.pdf.PagePdfDocumentReader;
import org.springframework.ai.transformer.splitter.TokenTextSplitter;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class IngestionService {

    private final VectorStore vectorStore;

    public IngestionService(VectorStore vectorStore) {
        this.vectorStore = vectorStore;
    }

    public void ingestDocument(String fileName, String documentName) {

        // Step 1: Read the PDF from classpath resources/documents/
        ClassPathResource resource = new ClassPathResource("documents/" + fileName);
        PagePdfDocumentReader reader = new PagePdfDocumentReader(resource);
        List<Document> pages = reader.get();

        System.out.println("Read " + pages.size() + " pages from " + documentName);

        // Step 2: Split into chunks (500 tokens, 100 token overlap)
        TokenTextSplitter splitter = new TokenTextSplitter(500, 350, 5, 10000, true);
        List<Document> chunks = splitter.apply(pages);

        // Step 3: Attach document_name metadata to every chunk
        // This is what enables filtering by selected documents at query time
        for (Document chunk : chunks) {
            chunk.getMetadata().put("document_name", documentName);
        }

        System.out.println("Created " + chunks.size() + " chunks from " + documentName);

        // Step 4: Generate embeddings and store in vector store
        // Spring AI calls OpenAI for each chunk, gets back a vector, stores both
        vectorStore.add(chunks);

        System.out.println("Embeddings stored for: " + documentName);
    }

    public void saveToFile() {
        // Persist the in-memory vector store to disk so it survives restarts
        File file = new File("vector-store.json");
        ((SimpleVectorStore) vectorStore).save(file);
        System.out.println("Vector store saved to: " + file.getAbsolutePath());
    }
}
