import { useMemo, useState } from 'react'
import { initialProducts } from '../data/products'

// Clave única para conservar el inventario entre sesiones del navegador.
const STORAGE_KEY = 'stockly'

// Recupera datos guardados y usa los productos iniciales si no existen o están dañados.
const readProducts = () => {
  if (typeof window === 'undefined') return initialProducts

  try {
    const storedProducts = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    return Array.isArray(storedProducts) ? storedProducts : initialProducts
  } catch {
    return initialProducts
  }
}

export function useInventory() {
  const [products, setProducts] = useState(readProducts)

  // Centraliza la actualización de React y localStorage para evitar inconsistencias.
  const saveProducts = (nextProducts) => {
    setProducts(nextProducts)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProducts))
  }

  const addProduct = (product) => saveProducts([{ ...product, id: Date.now(), sold: 0 }, ...products])
  const updateProduct = (product) => saveProducts(products.map((item) => item.id === product.id ? product : item))
  const deleteProduct = (id) => saveProducts(products.filter((product) => product.id !== id))
  // Una venta reduce stock y aumenta las unidades vendidas del producto.
  const registerSale = (id) => saveProducts(products.map((product) => product.id === id
    ? { ...product, stock: product.stock - 1, sold: product.sold + 1 }
    : product))

  // Deriva métricas del inventario actual sin guardar datos duplicados en el estado.
  const totals = useMemo(() => products.reduce((result, product) => ({
    units: result.units + product.stock,
    invested: result.invested + product.stock * product.buy,
    earned: result.earned + product.sold * (product.sale - product.buy),
    sales: result.sales + product.sold * product.sale,
    potential: result.potential + product.stock * product.sale,
  }), { units: 0, invested: 0, earned: 0, sales: 0, potential: 0 }), [products])

  return { products, totals, addProduct, updateProduct, deleteProduct, registerSale }
}
