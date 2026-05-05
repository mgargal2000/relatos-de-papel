import { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("lucia@relatosdepapel.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = onLogin(email, password);

    if (success) {
      setEmail("lucia@relatosdepapel.com");
      setPassword("123456");
      setError("");
    } else {
      setError("El email o la contraseña no son correctos.");
    }
  };

  return (
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
  );
}

export default LoginForm;
