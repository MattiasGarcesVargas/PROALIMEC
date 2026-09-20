# Catálogo de productos

## Propósito

Permitir explorar los cortes por línea (cerdo / res) y consultar la ficha de cada uno, sin precio, stock ni comportamiento de tienda.

## Rutas

`/productos` usa `ProductCatalogPage` con `clientLoader`, porque el filtro vive en la URL y debe revalidar en cada cambio. `/productos/:slug` usa `ProductDetailPage`.

## Componentes

- `ProductsHero`: eyebrow entre dos filetes, H1 y entradilla centrados.
- `ProductFilterBar`: Todos / Cerdo / Res con contador en naranja y subrayado navy en el activo.
- `ProductGrid` y `ProductCard`: retícula 4:5 sobre negro, degradado inferior y `scale(1.05)` en hover.
- `ProductSheetModal`: ficha en modal con overlay difuminado; cierra con overlay, ✕ o Escape.
- `CustomCutCta`: cierre para cortes bajo especificación.
- `ProductInformation` y `RelatedProducts`: ficha completa y hasta tres cortes de la misma línea.

## Fuente de datos

`products.mock.json` y `catalog-content.mock.json` se validan con Zod y los lee `ProductCatalogService`. La UI consume únicamente datos entregados por loaders y hooks.

## Filtros

`useProductFilter` persiste la línea en `?linea=` para enlaces compartibles; `parseLineFilter` normaliza el valor tanto en el loader como en el cliente.

## Responsive y accesibilidad

La retícula usa `auto-fill` con `minmax(min(17rem,100%),1fr)`. Los botones de filtro exponen `aria-pressed`, las tarjetas son botones con nombre accesible y el modal declara `role="dialog"` con `aria-modal`.

## Movimiento

Hover de tarjeta en 800 ms con `--ease-out-expo`; el modal bloquea el scroll del body mientras está abierto. Nada depende del movimiento para comunicar estado.
