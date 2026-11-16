# Homepage

## Propósito

Narrar la promesa de PROALIMEC con escenas de scroll —best sellers colgados del gancho y la percha de cortes— y conducir al catálogo y a la consulta comercial.

## Ruta

`/`, conectada mediante `homePageLoader` (contenido + catálogo) y `HomePage`.

## Componentes

- `HeroSection`: eyebrow, H1 en tres líneas con máscara vertical (la tercera en naranja), intro y PNG recortado.
- `BestSellerScene` + `BestSellerCopy`: escena sticky de 170vh con GSAP (`scrub`). Los dos cortes caen a la vez, uno a cada lado, desde que el negro cubre el 30 % de la pantalla; solo cuando terminan de caer del todo, "Best seller" se desvanece y en el centro aparecen las dos descripciones, una sobre otra, con una flecha hacia su corte.
- `OurProductsScene`: escena sticky de 180vh. El texto, la línea vertical y la percha entran mientras la sección sube, para que no se vea la pantalla en blanco.
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

`BestSellerScene` y `OurProductsScene` usan líneas de tiempo de GSAP con `scrub`; `useRevealOnScroll` gobierna hero y cadena de frío. Todo es reversible al subir y `prefers-reduced-motion` deja las escenas en su estado final.
