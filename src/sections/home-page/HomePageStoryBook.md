# Homepage

## Propósito

Narrar la promesa de PROALIMEC con escenas de scroll —best sellers colgados del gancho y la percha de cortes— y conducir al catálogo y a la consulta comercial.

## Ruta

`/`, conectada mediante `homePageLoader` (contenido + catálogo) y `HomePage`.

## Componentes

- `HeroSection`: eyebrow, H1 en tres líneas con máscara vertical (la tercera en naranja), intro y PNG recortado.
- `MarqueeStrip`: banda negra en bucle de 28 s con separadores naranja.
- `BestSellerScene` + `BestSellerCopy`: escena sticky de `calc(var(--scene) * 1.9)`. El corte 01 cae sobre la losa de piedra; el 02 entra con el gancho al ras del borde superior.
- `OurProductsScene`: escena sticky donde primero entra el texto, luego la línea vertical y la percha se balancea desde la derecha.
- `CategoriesSection`: filas cerdo / res con banner y velo en hover.
- `ColdChainSection`: línea horizontal que crece, tres pasos y tres cifras.
- `CatalogPreviewSection`: carrusel con `scroll-snap` que reutiliza `ProductCard` del catálogo.
- `ServiceSection`: cuatro tarjetas con borde superior sobre `--surface-cold`.
- `ContactCtaSection`: cierre comercial hacia contacto y catálogo.

## Fuente de datos

`home-page.mock.json` se valida con `HomePageSchema`, se obtiene mediante `HomePageService` y llega a la página por loader y hook tipado. Los productos del carrusel vienen del `ProductCatalogService` a través del mismo loader. Ningún componente contiene copy ni rutas de imagen.

## Estados

El loader entrega contenido y productos ya validados: la página no renderiza estados de carga. `BestSellerScene` se omite si el mock no trae dos best sellers.

## Responsive y accesibilidad

Todo es fluido (`clamp()`, grids `auto-fit`). Las escenas sticky mantienen el layout en columna por el `flex-wrap` del contenedor. Existe un solo H1, los adornos llevan `aria-hidden` y las cifras de cadena de frío exponen su etiqueta en el `dt`.

## Movimiento

`useScrollScene` calcula el progreso 0..1 por rAF y `useHangingSceneMotion` lo traduce a estilos; `useRevealOnScroll` gobierna hero y cadena de frío. Todo es reversible al subir y `prefers-reduced-motion` deja las escenas en su estado final.
