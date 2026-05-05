import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

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
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
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