# Homepage

## Propósito

Presentar la identidad de PROALIMEC, facilitar el acceso al catálogo y conducir a una consulta comercial sin publicar información no confirmada.

## Ruta

`/`, conectada mediante `homePageLoader` y `HomePage`.

## Componentes

- `HeroSection`: promesa principal aprobada, dos acciones y media opcional.
- `BrandMarquee`: repetición decorativa del slogan aprobado.
- `CategoryShowcase`: categorías data-driven; se omite si el array está vacío.
- `WhyProalimecSection`: beneficios aprobados; se omite sin contenido.
- `BrandStorySection`: historia y fotografía opcionales.
- `ColdChainSection`: hitos confirmados; nunca inventa procesos.
- `FeaturedProductsSection`: reserva la composición para productos aprobados.
- `TrustMetricsSection`: solo muestra cifras presentes en el mock validado.
- `QuoteCtaSection`: cierre comercial hacia la página de contacto.

## Fuente de datos

`home-page.mock.json` se valida con `HomePageSchema`, se obtiene mediante `HomePageService` y llega a la página por loader y hook tipado.

## Estados

Los módulos dependientes de contenido usan arrays vacíos o `null` y no se renderizan. El Hero y el CTA usan únicamente textos aprobados o descriptivos.

## Responsive y accesibilidad

El Hero mantiene copy antes del medio en el DOM, pasa de una a doce columnas y conserva targets mínimos de 44 px. Existe un solo H1 y los adornos son invisibles para tecnologías asistivas.

## Movimiento

Reveals y parallax breve sobre capas decorativas mediante `useSectionMotion`. Reduced motion desactiva desplazamientos, marquee y scrub sin ocultar contenido.

## Pendientes

Categorías, productos, fotografías, historia, beneficios, cadena de frío y métricas aprobadas.
