import Icon from "./Icon";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">▦</div>
        <div>
          <strong>
            stock<span>vm</span>
          </strong>
          <small>Gestión de inventario</small>
        </div>
      </div>
      <div className="menu-label">MENÚ PRINCIPAL</div>
      <nav>
        {[
          ["grid", "Resumen"],
          ["box", "Productos"],
          ["chart", "Ventas"],
        ].map(([icon, label]) => (
          <button className={label === "Resumen" ? "active" : ""} key={label}>
            <Icon name={icon} />
            {label}
          </button>
        ))}
      </nav>
      <div className="menu-label second">CUENTA</div>
      <nav>
        <button>
          <Icon name="settings" />
          Configuración
        </button>
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card">
          <b>?</b>
          <strong>¿Necesitas ayuda?</strong>
          <span>Estamos aquí para ayudarte.</span>
          <button>Ver centro de ayuda →</button>
        </div>
        <div className="profile">
          <div className="avatar">JD</div>
          <div>
            <strong>Juan David</strong>
            <span>Administrador</span>
          </div>
          <i>•••</i>
        </div>
      </div>
    </aside>
  );
}
