import fs from "fs";

// ---------- Part 1, steps 1-2: one book ----------
const book = {
  id: 1,
  title: "Fiker Eske Mekabr",
  author: "Haddis Alemayehu",
  genre: "Romance",
  year: 1968,
};

fs.writeFileSync("book.json", JSON.stringify(book, null, 2));

const savedBook = JSON.parse(fs.readFileSync("book.json", "utf8"));
console.log(
  `#${savedBook.id}: "${savedBook.title}" by ${savedBook.author} (${savedBook.genre}, ${savedBook.year})`
);

// ---------- Part 1, steps 3-4: array of books ----------
const books = [
  { id: 1, title: "Fiker Eske Mekabr", author: "Haddis Alemayehu", genre: "Romance", year: 1968 },
  { id: 2, title: "Oromay", author: "Bealu Girma", genre: "Political", year: 1983 },
  { id: 3, title: "Ke Admas Bashager", author: "Bealu Girma", genre: "Reflective", year: 1969 },
  { id: 4, title: "Emegua", author: "Alemayehu Wase", genre: "Philosophical", year: 1965 },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", year: 1988 },
  { id: 6, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
];

fs.writeFileSync("books.json", JSON.stringify(books, null, 2));

const savedBooks = JSON.parse(fs.readFileSync("books.json", "utf8"));
console.log(`\nThere are ${savedBooks.length} books:`);
savedBooks.forEach((b) => {
  console.log(`#${b.id}: "${b.title}" by ${b.author} (${b.genre}, ${b.year})`);
});