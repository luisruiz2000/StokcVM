import { useState } from 'react'
import Icon from './Icon'
import { emptyProduct } from '../data/products'

const fields = [['name', 'Nombre del producto', 'text'], ['sku', 'SKU / Referencia', 'text'], ['category', 'Categoría', 'text'], ['stock', 'Stock inicial', 'number'], ['buy', 'Precio de compra', 'number'], ['sale', 'Precio de venta', 'number']]

export default function ProductFormModal({ product, onClose, onSubmit }) {
  const [form, setForm] = useState(product || emptyProduct)
  const isEditing = Boolean(product)
  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const submit = (event) => { event.preventDefault(); onSubmit({ ...form, stock: +form.stock, buy: +form.buy, sale: +form.sale }) }

  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><form className="modal" onSubmit={submit}><div className="modal-head"><div><span className="eyebrow">INVENTARIO</span><h2>{isEditing ? 'Editar producto' : 'Agregar producto'}</h2></div><button type="button" onClick={onClose}>×</button></div><div className="form-grid">{fields.map(([key, label, type]) => <label key={key}>{label}<input required min="0" type={type} value={form[key]} onChange={(event) => updateField(key, event.target.value)} /></label>)}</div><div className="modal-actions"><button type="button" className="outline-button" onClick={onClose}>Cancelar</button><button className="primary-button">{isEditing ? 'Guardar cambios' : 'Agregar producto'}</button></div></form></div>
}
