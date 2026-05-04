import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        Relatos de Papel
      </Link>

      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Landing
        </NavLink>

        <NavLink to="/libros" className="nav-link">
          Libros
        </NavLink>

        <NavLink to="/checkout" className="nav-link">
          Carrito ({totalItems})
        </NavLink>

        {isAuthenticated ? (
          <>
            <NavLink to="/perfil" className="nav-link">
              Perfil
            </NavLink>

            <button className="nav-button" onClick={handleLogout}>
              Cerrar sesión
            </button>

            <span className="user-chip">{user.name}</span>
          </>
        ) : (
          <NavLink to="/login" className="nav-link nav-login">
            Iniciar sesión
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;