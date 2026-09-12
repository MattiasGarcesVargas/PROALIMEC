import categoriesMock from '~/sections/product-catalog/mocks/categories.mock.json'
import productsMock from '~/sections/product-catalog/mocks/products.mock.json'
import { CategoriesDatasetSchema } from '~/sections/product-catalog/schemas/category.schema'
import { ProductsDatasetSchema } from '~/sections/product-catalog/schemas/product.schema'
import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export const localProductCatalogService: ProductCatalogService = {
  async getCategories() {
    return CategoriesDatasetSchema.parse(categoriesMock).categories
  },

  async getProducts() {
    return ProductsDatasetSchema.parse(productsMock).products
  },

  async getProductBySlug(slug) {
    const products = ProductsDatasetSchema.parse(productsMock).products
    return products.find((product) => product.slug === slug) ?? null
  },
}
