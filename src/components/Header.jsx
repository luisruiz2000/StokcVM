import Icon from './Icon'

export default function Header({ onAddProduct }) {
  return <header className="topbar"><div><span className="eyebrow">SÁBADO, 14 DE NOVIEMBRE DE 2026</span><h1>Resumen general</h1><p>Ten el control de tu negocio en un solo lugar.</p></div><div className="top-actions"><button className="icon-button"><Icon name="bell" /></button><button className="primary-button" onClick={onAddProduct}><Icon name="plus" />Agregar producto</button></div></header>
}
