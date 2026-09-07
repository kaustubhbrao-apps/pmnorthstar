---
slug: "what-is-rag"
question: "What is RAG (retrieval-augmented generation)?"
shortAnswer: "RAG retrieves relevant documents from your own data and puts them in the model's context before it answers, so responses are grounded in your sources rather than only in training data. It's the standard way to make a general model answer accurately about specific, private or recent information."
category: "AI"
metaTitle: "What Is RAG? Retrieval-Augmented Generation Explained"
metaDescription: "How RAG grounds model output in your own documents, the retrieval pipeline in plain terms, where it fails, and how it compares to fine-tuning and long context."
keywords:
  - "what is RAG"
  - "retrieval augmented generation"
  - "RAG vs fine tuning"
  - "grounding LLM"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-claude-5-26"
  - "cs-fm-shipped-26"
updatedAt: "2026-09-07"
faqs:
  - question: "Is RAG better than fine-tuning?"
    answer: "They solve different problems. RAG supplies knowledge the model doesn't have and can be updated instantly by changing the documents. Fine-tuning shapes behaviour, format and style. Teams needing current or private facts usually want RAG; teams needing consistent output shape usually want fine-tuning."
  - question: "Does a long context window make RAG unnecessary?"
    answer: "Not for most real corpora. Large context windows reduce the need for aggressive chunking, but stuffing a million documents into every request is slow and expensive, and models still attend unevenly across very long inputs. Retrieval remains the way to send the right ten pages instead of all of them."
  - question: "Why does RAG return wrong answers even with the right documents available?"
    answer: "Usually retrieval, not generation. If the chunk containing the answer never enters the context, the model cannot use it. Most RAG debugging is really search debugging — chunking strategy, embeddings, and whether keyword and semantic search are combined."
---

## The pipeline in plain terms

Documents are split into chunks and converted into embeddings — numeric representations of meaning — then stored in a vector index. At query time, the question is embedded too, the closest chunks are retrieved, and those chunks are inserted into the prompt with an instruction to answer using them.

The model doesn't learn anything. It's being handed the reference material at the moment it answers.

## Why it became the default

Three practical reasons. **Freshness** — update a document and the next answer reflects it, with no retraining. **Attribution** — you know which sources were used, so the answer can cite them, which matters enormously for trust. **Access control** — retrieval can respect permissions, so users only get answers from documents they're allowed to see.

That last one is why RAG dominates enterprise deployments. A fine-tuned model has no notion of who is asking.

## Where it actually breaks

Retrieval quality, almost always. If chunks are too small, the answer is split across several and none looks relevant. If too large, the useful sentence is diluted. Pure semantic search misses exact identifiers — part numbers, error codes, names — which is why hybrid search combining keyword and vector retrieval outperforms either alone in most production systems.

The second failure is confident synthesis from partial context. Given three chunks that don't contain the answer, a model will often produce a plausible one anyway. Instructing it to say when the sources are insufficient helps, and evaluating on questions your corpus can't answer is the only way to know whether it's working.

## The product framing

RAG is a search product with a language model on the end. Teams that treat it as a model problem tune prompts for weeks; teams that treat it as a search problem fix retrieval and watch the answers improve.
