import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/perfil");
  }

  const handleLogin = (email, password) => {
    const success = login(email, password);

    if (success) {
      navigate("/perfil");
    }

    return success;
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div>
          <p className="eyebrow">Acceso de usuario</p>
          <h1>Iniciar sesión</h1>
          <p className="auth-intro">
            Accede a tu perfil para consultar tus datos, revisar tus últimos
            pedidos y continuar con el proceso de compra.
          </p>
        </div>

        <LoginForm onLogin={handleLogin} />

        <div className="demo-access">
          <strong>Credenciales de prueba</strong>
          <span>Email: lucia@relatosdepapel.com</span>
          <span>Contraseña: 123456</span>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;