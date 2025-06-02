import React, { useState } from "react";
import { fetchBooks } from "../api/googleBooks";
import { GoogleBooksVolume } from "../types/GoogleBooks";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<GoogleBooksVolume[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const results = await fetchBooks(query);
      setBooks(results);
    } catch (err) {
      setError("Erro ao buscar livros.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por título, autor ou ISBN"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Buscar
        </button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              style={{ height: 100 }}
            />
            <div>
              <strong>{book.volumeInfo.title}</strong>
              <br />
              {book.volumeInfo.authors?.join(", ")}
              <br />
              <small>{book.volumeInfo.publishedDate}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
