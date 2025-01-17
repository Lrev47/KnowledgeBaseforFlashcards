# 2) **Frontend README.md**

```markdown
# FlashcardMaker - Frontend (React + Redux)

This is the **React** front end for browsing the knowledgebase, viewing flashcards, and exploring topics. It integrates with a Node/Express + Prisma backend that provides AI-generated flashcards, hierarchical topics, and optional QR code links.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
  - [Redux Slices & Axios](#redux-slices--axios)
  - [Knowledgebase Pages](#knowledgebase-pages)
- [Navigation & Routes](#navigation--routes)
- [How to Run](#how-to-run)
- [Future Enhancements](#future-enhancements)

---

## Overview

When someone struggles with a physical flashcard, they can **scan the QR code**. That links them to the **knowledgebase** portion of this front end. The front end offers:

1. **Home** page with quick links to “View All Cards” or “View All Topics.”  
2. **Flashcard** browsing pages:
   - `/cards` => lists all flashcards  
   - `/cards/:cardId` => single flashcard detail  
3. **Topic** navigation pages:
   - `/topics` => top-level topics only  
   - `/topics/:topicId` => subtopic drill-down  

The front end uses **Axios** (with a custom `axiosClient`) to call the backend, and **Redux** (with RTK slices) to store fetched data in `cards` and `topics` states.

---

## Architecture

### Redux Slices & Axios

We have slices like:

- **`cardSlice.js`** (for flashcards)
- **`topicSlice.js`** (for topics)

Each slice defines **async thunks** that call the server via an API module (e.g., `cardApi.js`, `topicApi.js`). The store is combined in `store.js`.

src/ ├─ api/ │ ├─ cardApi.js │ ├─ topicApi.js │ └─ axiosClient.js ├─ store/ │ ├─ slices/ │ │ ├─ cardSlice.js │ │ └─ topicSlice.js │ └─ store.js ├─ pages/ ├─ components/ └─ ...

markdown
Copy

**`axiosClient.js`** sets a `baseURL` (usually `http://localhost:3000`). The slices dispatch these thunks, which update Redux state.

### Knowledgebase Pages

When a flashcard has a `qrCodeUrl` pointing to this front end (e.g., `/kb/card/:id`), we can show a **detailed explanation** or references for that card. Alternatively, you can use the same route as `/cards/:cardId`.

---

## Navigation & Routes

Using **React Router**:

1. **`/`** => `Homepage` (welcome screen, links to “/cards” or “/topics”).  
2. **`/cards`** => `FlashcardList` (shows all flashcards).  
3. **`/cards/:cardId`** => `FlashcardDetailPage` (detail of one card, with code snippet or explanation).  
4. **`/topics`** => `TopicPage` (displays top-level topics only).  
5. **`/topics/:topicId`** => shows subtopics for the given topic ID.  
6. (Optional) **`/kb/card/:cardId`** => separate route if you prefer a knowledgebase layout.

---

## How to Run

1. **Install dependencies** (assuming you have a React + Vite setup):
   ```bash
   npm install
Start dev server:
bash
Copy
npm run dev
It typically runs at http://127.0.0.1:5173.
Make sure your backend is running on http://localhost:3000 and has CORS enabled:
js
Copy
import cors from 'cors';
app.use(cors());
Open http://127.0.0.1:5173 in your browser. You should see the homepage.
Future Enhancements
A search bar to find topics or flashcards by name.
Authentication for editing or verifying flashcards.
Better styling with a CSS framework or design library.
Real-time updates if you want collaborative editing.