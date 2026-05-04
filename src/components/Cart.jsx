import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-box">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>

        <Link to="/libros" className="button button-secondary">
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <aside className="cart-box">
      <h2>Carrito</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>
                {item.quantity} x {item.price.toFixed(2)} €
              </p>
            </div>

            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total</span>
        <strong>{totalPrice.toFixed(2)} €</strong>
      </div>
    </aside>
  );
}

export default Cart;