import { useMemo, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Icon from "./components/Icon";
import StatCard from "./components/StatCard";
import ProductTable from "./components/ProductTable";
import ProductFormModal from "./components/ProductFormModal";
import SaleConfirmationModal from "./components/SaleConfirmationModal";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import Insights from "./components/Insights";
import { useInventory } from "./hooks/useInventory";
import { formatCurrency } from "./utils/formatters";

export default function App() {
  // El hook concentra las operaciones de inventario para mantener este componente enfocado en la composición de la pantalla.
  const {
    products,
    totals,
    addProduct,
    updateProduct,
    deleteProduct,
    registerSale,
  } = useInventory();
  // Estado visual de filtros, formularios y confirmaciones pendientes.
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [editingProduct, setEditingProduct] = useState(null);
  const [saleProduct, setSaleProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [notice, setNotice] = useState("");
  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];
  // Filtra por nombre o SKU sin modificar la colección original.
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "Todos" || product.category === category) &&
          `${product.name} ${product.sku}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [products, query, category],
  );
  const flash = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(""), 2200);
  };
  // Decide si el formulario crea un producto o actualiza uno existente.
  const handleSave = (product) => {
    product.id ? updateProduct(product) : addProduct(product);
    setEditingProduct(null);
    flash(product.id ? "Producto actualizado" : "Producto agregado");
  };
  // Abre la confirmación; la eliminación ocurre únicamente después de confirmarla.
  const handleDelete = (id) =>
    setProductToDelete(products.find((product) => product.id === id));
  const confirmDelete = () => {
    deleteProduct(productToDelete.id);
    setProductToDelete(null);
    flash("Producto eliminado");
  };
  // Registra una unidad vendida y actualiza stock, ventas y ganancias.
  const handleSale = () => {
    registerSale(saleProduct.id);
    setSaleProduct(null);
    flash("Venta registrada");
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header onAddProduct={() => setEditingProduct({})} />
        <section className="content">
          <div className="stats-grid">
            <StatCard
              label="Productos registrados"
              value={products.length}
              hint="en tu inventario"
              icon="box"
              tone="blue"
            />
            <StatCard
              label="Unidades en stock"
              value={totals.units}
              hint="unidades disponibles"
              icon="chart"
              tone="purple"
            />
            <StatCard
              label="Total invertido"
              value={formatCurrency(totals.invested)}
              hint="valor del stock actual"
              icon="box"
              tone="orange"
            />
            <StatCard
              label="Ganancia obtenida"
              value={formatCurrency(totals.earned)}
              hint="de productos vendidos"
              icon="chart"
              tone="green"
            />
          </div>
          <div className="section-heading">
            <div>
              <h2>Inventario de productos</h2>
              <p>Administra tus productos y revisa su rendimiento.</p>
            </div>
            <button
              className="outline-button"
              onClick={() => setEditingProduct({})}>
              <Icon name="plus" />
              Nuevo producto
            </button>
          </div>
          <ProductTable
            products={filteredProducts}
            totalProducts={products.length}
            query={query}
            category={category}
            categories={categories}
            onQueryChange={setQuery}
            onCategoryChange={setCategory}
            onSell={setSaleProduct}
            onEdit={setEditingProduct}
            onDelete={handleDelete}
            potentialValue={totals.potential}
          />
          <Insights totals={totals} products={products} />
        </section>
      </main>
      {editingProduct && (
        <ProductFormModal
          product={editingProduct.id ? editingProduct : null}
          onClose={() => setEditingProduct(null)}
          onSubmit={handleSave}
        />
      )}
      {saleProduct && (
        <SaleConfirmationModal
          product={saleProduct}
          onCancel={() => setSaleProduct(null)}
          onConfirm={handleSale}
        />
      )}
      {productToDelete && (
        <DeleteConfirmationModal
          product={productToDelete}
          onCancel={() => setProductToDelete(null)}
          onConfirm={confirmDelete}
        />
      )}
      {notice && <div className="toast">✓ {notice}</div>}
    </div>
  );
}
