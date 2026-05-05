function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.title}</h3>
        <p>
          {item.quantity} x {item.price.toFixed(2)} €
        </p>
      </div>

      <button
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
