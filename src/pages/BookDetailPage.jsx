import { Link, useNavigate, useParams } from "react-router-dom";
import Cart from "../components/Cart";
import { useAddToCartWithStockCheck } from "../hooks/useAddToCartWithStockCheck";
import { books } from "../data/books";

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCartChecked = useAddToCartWithStockCheck();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <section className="page">
        <h1>Libro no encontrado</h1>
        <p>No hemos encontrado el libro solicitado.</p>

        <Link to="/libros" className="button button-primary margin-top">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    if (addToCartChecked(book)) {
      navigate("/checkout");
    }
  };

  return (
    <section className="book-detail-page">
      <Link to="/libros" className="back-link">
        ← Volver al catálogo
      </Link>

      <div className="detail-layout">
        <article className="book-detail">
          <img
            src={book.image}
            alt={book.title}
            className="book-detail-image"
          />

          <div className="book-detail-content">
            <span className="book-category">{book.category}</span>

            <h1>{book.title}</h1>

            <p className="book-detail-author">Por {book.author}</p>

            <p className="book-detail-description">{book.description}</p>

            <div className="detail-grid">
              <div>
                <span>Código</span>
                <strong>{book.code}</strong>
              </div>

              <div>
                <span>Valoración</span>
                <strong>{book.rating} ★</strong>
              </div>

              <div>
                <span>Stock</span>
                <strong>{book.stock} unidades</strong>
              </div>

              <div>
                <span>Precio</span>
                <strong>{book.price.toFixed(2)} €</strong>
              </div>
            </div>

            <button
              className="button button-primary detail-button"
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </button>
          </div>
        </article>

        <Cart />
      </div>
    </section>
  );
}

export default BookDetailPage;