import Icon from './Icon'
import { formatCurrency, getProductProfit } from '../utils/formatters'

export default function SaleConfirmationModal({ product, onCancel, onConfirm }) {
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onCancel()}><div className="modal sale-modal"><div className="sale-icon"><Icon name="cart" /></div><span className="eyebrow">CONFIRMAR VENTA</span><h2>¿Registrar esta venta?</h2><p className="sale-copy">Estás vendiendo una unidad de:</p><div className="sale-product"><div className="product-icon">{product.name[0]}</div><div><strong>{product.name}</strong><span>{product.sku} · {product.stock} unidades disponibles</span></div></div><div className="charge-box"><span>Total a cobrar</span><strong>{formatCurrency(product.sale)}</strong><small>Ganancia de esta venta: +{formatCurrency(getProductProfit(product))}</small></div><div className="modal-actions"><button type="button" className="outline-button" onClick={onCancel}>Cancelar</button><button type="button" className="primary-button" onClick={onConfirm}><Icon name="cart" />Confirmar venta</button></div></div></div>
}
