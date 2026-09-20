import catalogContentMock from '~/sections/product-catalog/mocks/catalog-content.mock.json'
import productsMock from '~/sections/product-catalog/mocks/products.mock.json'
import { CatalogContentSchema } from '~/sections/product-catalog/schemas/catalog-content.schema'
import { ProductsDatasetSchema } from '~/sections/product-catalog/schemas/product.schema'
import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

function readProducts() {
  return ProductsDatasetSchema.parse(productsMock).products
}

export const localProductCatalogService: ProductCatalogService = {
  async getContent() {
    return CatalogContentSchema.parse(catalogContentMock)
  },

  async getProducts(line = 'todo') {
    const products = readProducts()
    return line === 'todo'
      ? products
      : products.filter((product) => product.line === line)
  },

  async getLineCounts() {
    const products = readProducts()
    return {
      todo: products.length,
      cerdo: products.filter((product) => product.line === 'cerdo').length,
      res: products.filter((product) => product.line === 'res').length,
    }
  },

  async getProductBySlug(slug) {
    return readProducts().find((product) => product.slug === slug) ?? null
  },
}
