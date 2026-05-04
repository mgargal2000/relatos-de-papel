import { Link, useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    window.alert("El pedido se ha realizado correctamente.");
    clearCart();
    navigate("/libros");
  };

  if (cartItems.length === 0) {
    return (
      <section className="page">
        <h1>Checkout</h1>
        <p>No tienes libros en el carrito.</p>

        <Link to="/libros" className="button button-primary margin-top">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="page-heading">
        <p className="eyebrow">Compra segura</p>
        <h1>Resumen del pedido</h1>
        <p>
          Revisa los libros seleccionados antes de finalizar la compra. En esta
          actividad, el pago se simula mediante una alerta del navegador.
        </p>
      </div>

      <div className="checkout-layout">
        <Cart />

        <div className="payment-card">
          <h2>Pago</h2>

          <p>
            El importe total de tu pedido es de{" "}
            <strong>{totalPrice.toFixed(2)} €</strong>.
          </p>

          <button className="button button-primary" onClick={handlePayment}>
            Proceder al pago
          </button>

          <Link to="/libros" className="button button-secondary">
            Seguir comprando
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;