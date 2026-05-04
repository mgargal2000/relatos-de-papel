function OrderCard({ order }) {
  return (
    <article className="order-card">
      <div className="order-card-header">
        <div>
          <h3>{order.id}</h3>
          <p>{order.date}</p>
        </div>

        <span className="order-status">{order.status}</span>
      </div>

      <div className="order-books">
        {order.books.map((bookTitle) => (
          <span key={bookTitle}>{bookTitle}</span>
        ))}
      </div>

      <div className="order-total">
        <span>Total</span>
        <strong>{order.total.toFixed(2)} €</strong>
      </div>
    </article>
  );
}

export default OrderCard;