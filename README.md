# Stockly

<div align="center">

### Gestión de inventario simple, clara y eficiente

Aplicación web para controlar productos, stock, ventas, inversión y ganancias desde un solo lugar.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222)

</div>

## Sobre el proyecto

Stockly es una aplicación de inventario orientada a pequeños negocios y emprendimientos. Permite registrar productos, consultar existencias, calcular el valor invertido, controlar ventas y conocer las ganancias obtenidas.

La aplicación está construida con React y una arquitectura modular basada en componentes reutilizables. Para esta prueba piloto, toda la información del inventario se conserva localmente en el navegador mediante `localStorage`, por lo que no requiere un servidor o una base de datos.

## Funcionalidades

- Dashboard con resumen general del inventario.
- Registro de productos con nombre, SKU, categoría, stock y precios.
- Edición y eliminación de productos con confirmación visual.
- Registro de ventas con confirmación antes de descontar unidades.
- Cálculo automático de inversión, ingresos, ganancias y valor potencial de venta.
- Búsqueda por nombre o SKU.
- Filtro por categoría.
- Indicador visual de stock bajo.
- Persistencia automática en `localStorage`.
- Diseño responsive para escritorio y dispositivos móviles.
- Componentes separados para facilitar el mantenimiento y la evolución del proyecto.

## Vista general

La pantalla principal reúne las métricas más importantes y la tabla de productos:

| Métrica | Descripción |
| --- | --- |
| Productos registrados | Cantidad de productos administrados. |
| Unidades en stock | Total de unidades disponibles. |
| Total invertido | Valor de compra del stock actual. |
| Ganancia obtenida | Ganancia acumulada de las ventas registradas. |

## Tecnologías

- [React](https://react.dev/) para la interfaz y los componentes.
- [Vite](https://vite.dev/) como herramienta de desarrollo y compilación.
- JavaScript moderno con ES Modules.
- CSS responsive sin dependencias visuales externas.
- `localStorage` para persistencia local.
- Oxlint para revisión estática del código.

## Requisitos

- Node.js 18 o superior.
- npm 9 o superior.

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd inventario
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Después, abre la dirección local mostrada por Vite en el navegador.

## Scripts disponibles

```bash
npm run dev       # Inicia el entorno de desarrollo
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza la compilación de producción
npm run lint      # Analiza el código con Oxlint
```

## Estructura del proyecto

```text
src/
├── components/
│   ├── DeleteConfirmationModal.jsx
│   ├── Header.jsx
│   ├── Icon.jsx
│   ├── Insights.jsx
│   ├── ProductFormModal.jsx
│   ├── ProductTable.jsx
│   ├── SaleConfirmationModal.jsx
│   ├── Sidebar.jsx
│   └── StatCard.jsx
├── data/
│   └── products.js
├── hooks/
│   └── useInventory.js
├── utils/
│   └── formatters.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Responsabilidades principales

- `App.jsx`: compone la pantalla y coordina el estado visual.
- `useInventory.js`: centraliza el inventario, las ventas y la persistencia.
- `ProductTable.jsx`: muestra productos, búsqueda, filtros y acciones.
- `ProductFormModal.jsx`: crea y edita productos.
- `SaleConfirmationModal.jsx`: confirma y presenta el detalle de una venta.
- `DeleteConfirmationModal.jsx`: evita eliminaciones accidentales.
- `formatters.js`: contiene funciones reutilizables para formato y cálculos.

## Modelo de producto

Cada producto utiliza la siguiente estructura:

```js
{
  id: 1,
  name: 'Audífonos Bluetooth',
  sku: 'AUD-001',
  category: 'Tecnología',
  stock: 24,
  sold: 8,
  buy: 45000,
  sale: 79000
}
```

## Persistencia de datos

El inventario se guarda automáticamente en el almacenamiento local del navegador usando la clave `stockly`. Se conservan los productos, categorías, SKU, stock disponible, unidades vendidas, precios de compra y precios de venta.

Esta estrategia es adecuada para una prueba piloto porque permite trabajar sin configurar un backend. Sin embargo, los datos quedan vinculados al navegador y al dispositivo donde se utiliza la aplicación: no existe sincronización entre equipos, usuarios ni copias de seguridad automáticas.

Para reiniciar los datos de prueba, abre las herramientas de desarrollo del navegador y elimina la clave `stockly` de `localStorage`. Antes de usar la aplicación con datos reales, conviene implementar una exportación o una base de datos.

## Próximas mejoras

- Conectar una base de datos y una API.
- Agregar autenticación de usuarios.
- Incorporar historial detallado de ventas.
- Permitir exportar reportes a CSV o PDF.
- Añadir paginación y ordenamiento de productos.
- Incorporar pruebas automatizadas.
- Migrar progresivamente a TypeScript.

## Contribución

1. Crea un fork del repositorio.
2. Crea una rama descriptiva: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza los cambios manteniendo la separación por responsabilidades.
4. Ejecuta `npm run lint` y `npm run build` antes de enviar los cambios.
5. Abre un Pull Request explicando el problema y la solución.

## Licencia

Este proyecto está disponible bajo la licencia que se defina en el repositorio.

---

<div align="center">

Desarrollado con React para simplificar la gestión diaria de inventarios.

</div>
