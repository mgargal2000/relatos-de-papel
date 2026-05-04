import BookCard from "../components/BookCard";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import { books } from "../data/books";
import { useBookSearch } from "../hooks/useBookSearch";

function HomePage() {
  const { searchTerm, setSearchTerm, filteredBooks, totalResults } =
    useBookSearch(books);

  return (
    <section className="catalog-page">
      <div className="page-heading">
        <p className="eyebrow">Catálogo</p>
        <h1>Encuentra tu próxima lectura</h1>
        <p>
          Explora algunos de los libros disponibles en Relatos de Papel. En esta
          actividad, la búsqueda filtra por título usando datos mock.
        </p>
      </div>

      <div className="catalog-layout">
        <div className="catalog-main">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            totalResults={totalResults}
          />

          <div className="books-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="empty-state">
              <h2>No se han encontrado libros</h2>
              <p>Prueba con otro término de búsqueda.</p>
            </div>
          )}
        </div>

        <Cart />
      </div>
    </section>
  );
}

export default HomePage;