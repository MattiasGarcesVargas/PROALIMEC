import { localContactService } from '~/sections/contact/services/contact.local.service'
import { localHomePageService } from '~/sections/home-page/services/home-page.local.service'
import { localProductCatalogService } from '~/sections/product-catalog/services/product-catalog.local.service'

export const services = {
  contact: localContactService,
  homePage: localHomePageService,
  productCatalog: localProductCatalogService,
} as const
