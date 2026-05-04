import { useMemo, useState } from "react";

export function useBookSearch(bookList) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return bookList;
    }

    return bookList.filter((book) =>
      book.title.toLowerCase().includes(normalizedSearch)
    );
  }, [bookList, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredBooks,
    totalResults: filteredBooks.length,
  };
}