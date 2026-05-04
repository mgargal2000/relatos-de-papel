import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("lucia@relatosdepapel.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/perfil");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/perfil");
    } else {
      setError("El email o la contraseña no son correctos.");
    }
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="lucia@relatosdepapel.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="123456"
              required
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="button button-primary">
            Entrar
          </button>
        </form>

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