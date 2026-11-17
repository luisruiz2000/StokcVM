import Icon from './Icon'

// Confirma una acción irreversible antes de eliminar el producto.
export default function DeleteConfirmationModal({ product, onCancel, onConfirm }) {
  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onCancel()}><div className="modal sale-modal"><div className="sale-icon delete-icon"><Icon name="trash" /></div><span className="eyebrow">ELIMINAR PRODUCTO</span><h2>¿Eliminar este producto?</h2><p className="sale-copy">Esta acción no se puede deshacer.</p><div className="sale-product"><div className="product-icon">{product.name[0]}</div><div><strong>{product.name}</strong><span>{product.sku} · {product.stock} unidades en stock</span></div></div><div className="modal-actions"><button type="button" className="outline-button" onClick={onCancel}>Cancelar</button><button type="button" className="primary-button" onClick={onConfirm}><Icon name="trash" />Eliminar producto</button></div></div></div>
}
