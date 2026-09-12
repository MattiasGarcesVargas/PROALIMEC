# Catálogo de productos

## Propósito

Permitir buscar, filtrar y consultar productos estáticos de PROALIMEC sin presentar precio, stock, rating o comportamiento de tienda.

## Rutas

`/productos` usa `ProductCatalogPage`. `/productos/:slug` usa `ProductDetailPage` y permanece preparado para prerenderizar cada slug aprobado.

## Componentes

- `CatalogHero`: encabezado editorial y categorías disponibles.
- `CatalogToolbar`: búsqueda, categorías, contador y limpieza.
- `SearchField`: sincroniza `q` con la URL.
- `CategoryFilters`: sincroniza `categoria` con la URL.
- `ProductGrid` y `ProductCard`: muestran el portafolio sin acciones minoristas.
- `ProductGallery`: selección accesible y navegación por teclado.
- `ProductInformation`: descripción, presentaciones y consulta identificada.
- `RelatedProducts`: máximo tres productos de la misma categoría.
- `EmptyCatalog`: diferencia catálogo sin cargar y filtros sin resultados.

## Fuente de datos

Los mocks vacíos se validan con Zod y son leídos por `ProductCatalogService`. La UI consume únicamente datos entregados por loaders y hooks.

## Filtros

La búsqueda normaliza mayúsculas y tildes. Los criterios viven en query params y se pueden limpiar sin estado global.

## Responsive y accesibilidad

Una columna en móvil, dos en tablet y tres en desktop. La búsqueda tiene label, el contador usa `aria-live`, los chips exponen su selección y las acciones permanecen visibles sin hover.

## Movimiento

El Hero admite parallax decorativo y el grid stagger. La galería conserva cambios inmediatos y no depende del movimiento para comunicar selección.

## Pendientes

Categorías, productos, presentaciones, textos e imágenes autorizadas. Al recibirlos se agregan sus slugs al prerender.
