import OrderCard from "../components/OrderCard";
import { useAuth } from "../context/AuthContext";
import { orders } from "../data/orders";

function ProfilePage() {
  const { user } = useAuth();
  const lastOrders = orders.slice(0, 5);

  return (
    <section className="profile-page">
      <div className="page-heading">
        <p className="eyebrow">Área privada</p>
        <h1>Perfil de usuario</h1>
        <p>
          Consulta los datos principales de tu cuenta y revisa los últimos
          pedidos realizados en Relatos de Papel.
        </p>
      </div>

      <div className="profile-layout">
        <aside className="profile-card">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />

          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

          <div className="profile-info">
            <div>
              <span>Identificador</span>
              <strong>#{user.id}</strong>
            </div>

            <div>
              <span>Tipo de cuenta</span>
              <strong>Cliente registrado</strong>
            </div>
          </div>
        </aside>

        <div className="orders-section">
          <h2>Últimos cinco pedidos</h2>

          <div className="orders-grid">
            {lastOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;