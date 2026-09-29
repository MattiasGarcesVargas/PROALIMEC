# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Compradores mayoristas de cárnicos congelados: restaurantes y asaderos que compran cortes por volumen de forma recurrente, y distribuidores que compran al por mayor para redistribuir. Llegan desde el home, el catálogo o un enlace compartido, casi siempre con un corte o una línea (cerdo / res) en mente, y quieren cotizar sin fricción.

## Product Purpose

Presencia web corporativa con catálogo estático de PROALIMEC. Ayuda al comprador a entender quién es la empresa, explorar el portafolio por línea y producto, y solicitar información o una cotización. Éxito: el visitante inicia una conversación de cotización, principalmente por WhatsApp.

No es un e-commerce: no muestra precios, stock ni disponibilidad en tiempo real y no permite comprar.

## Positioning

Distribuidor mayorista con base en Ambato, Ecuador, con más de 15 años en el mercado y un portafolio de cortes nacionales e importados.

## Operating Context

- Conversión principal: "Cotizar por WhatsApp" con mensaje prellenado (general o con el producto identificado).
- Conversiones secundarias: ver el catálogo, abrir el detalle de un producto, llamar, abrir la ubicación, escribir al correo.
- Stack existente: React Router 7 (modo framework, prerender estático), Tailwind CSS v4, GSAP para movimiento progresivo.

## Capabilities and Constraints

- Contenido estático desde mocks JSON validados con zod, servidos por servicios locales y loaders (capa de datos preparada para una API futura).
- No crear formularios que aparenten enviar datos sin un servicio real detrás.
- El sitio debe entenderse y usarse completo sin animaciones; el movimiento es una mejora progresiva.
- Mapa embebido solo con URL aprobada y sin perjudicar rendimiento ni privacidad.
- **Pendiente (no inventar):** número de WhatsApp, teléfono, correo, dirección exacta, horarios, URL de Facebook y enlace de Google Maps. Mientras falten, la interfaz debe verse completa y profesional sin mostrar datos ficticios.

## Brand Commitments

- Nombre: PROALIMEC. Frase de marca: "Frescura protegida, calidad garantizada."
- Logo con escudo (versiones horizontal a color y blanca) en `public/assets/images/`.
- Idioma: español de Ecuador, tono comercial directo y confiable.

## Evidence on Hand

- Afirmaciones aprobadas: más de 15 años de experiencia; cortes nacionales e importados; ubicación en Ambato, Ecuador.
- **No aprobada** para uso nuevo: "cadena de frío a −18 °C" como promesa.
- Fotografía de producto real en `public/assets/images/` (cortes de cerdo y res, banners por línea).
- Catálogo: 12 productos (8 cerdo, 4 res) en `src/sections/product-catalog/mocks/products.mock.json`.
- No existen testimonios, clientes nombrados, certificaciones, precios ni zonas de entrega confirmadas: no fabricarlos.

## Product Principles

1. Cada página acerca al comprador a una conversación de cotización.
2. Solo hechos aprobados; lo pendiente se marca como pendiente, nunca se inventa.
3. El producto real (la foto del corte) es la prueba principal de calidad.
4. Rapidez y claridad en móvil antes que efecto.

## Accessibility & Inclusion

Navegación por teclado, foco visible, contraste AA y `prefers-reduced-motion` respetado; el contenido es visible sin JavaScript de animación.
