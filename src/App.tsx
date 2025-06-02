import React from "react";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h1>Catálogo de Livros (Google Books)</h1>
      <BookSearch />
    </div>
  );
}

export default App;