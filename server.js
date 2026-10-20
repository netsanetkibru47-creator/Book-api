const express = require("express");
const app = express();
const PORT = 3000;

const books = [
  { id: 1, title: "Fiker Eske Mekabr", author: "Haddis Alemayehu", genre: "Romance", year: 1968 },
  { id: 2, title: "Oromay", author: "Bealu Girma", genre: "Political", year: 1983 },
  { id: 3, title: "Ke Admas Bashager", author: "Bealu Girma", genre: "Reflective", year: 1969 },
  { id: 4, title: "Emegua", author: "Alemayehu Wase", genre: "Philosophical", year: 1965 },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988 },
  { id: 6, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
];

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});

// GET /books/count -- must be defined BEFORE /books/:id,
// otherwise Express would treat "count" as an :id value.
app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

// GET /books  and  GET /books?genre=Fantasy
app.get("/books", (req, res) => {
  const { genre } = req.query;

  if (genre === undefined) {
    return res.json(books);
  }

  const matches = books.filter(
    (b) => b.genre.toLowerCase() === String(genre).toLowerCase()
  );
  res.json(matches); // [] when nothing matches
});

// GET /books/:id
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});