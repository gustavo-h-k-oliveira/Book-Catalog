import { GoogleBooksVolume } from "../types/GoogleBooks";

export async function fetchBooks(query: string, startIndex = 0): Promise<GoogleBooksVolume[]> {
    const maxResults = 10; // Maximum results per request
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items ?? [];
}