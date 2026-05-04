import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <article className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />

      <div className="book-card-content">
        <span className="book-category">{book.category}</span>

        <h2>{book.title}</h2>

        <p className="book-author">Por {book.author}</p>

        <div className="book-meta">
          <span>{book.rating} ★</span>
          <span>{book.stock} uds.</span>
        </div>

        <div className="book-card-footer">
          <strong>{book.price.toFixed(2)} €</strong>

          <Link to={`/libros/${book.id}`} className="button button-small">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BookCard;