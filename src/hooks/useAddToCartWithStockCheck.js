import { useCart } from '../context/CartContext';
import Swal from "sweetalert2";

export function useAddToCartWithStockCheck() {
  const { addToCart, cartItems } = useCart();

  const addToCartChecked = (book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    const currentQuantity = existingItem ? existingItem.quantity : 0;

    if (currentQuantity + 1 > book.stock) {
      Swal.fire({
          icon: "warning",
          text: `No hay stock suficiente para agregar "${book.title}" al carrito.`,
          confirmButtonText: 'Continuar'
      })
      return false;
    }

    addToCart(book);
    return true;
  };

  return addToCartChecked;
}
