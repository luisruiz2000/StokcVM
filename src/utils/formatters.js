export const formatCurrency = (value) => new Intl.NumberFormat('es-CO', {
  style: 'currency', currency: 'COP', maximumFractionDigits: 0,
}).format(value)

export const getProductProfit = (product) => product.sale - product.buy
