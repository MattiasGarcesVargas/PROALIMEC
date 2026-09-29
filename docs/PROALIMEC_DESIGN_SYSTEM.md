---
title: 'PROALIMEC - Design System Web'
project: 'PROALIMEC'
document: 'Design system y biblioteca de secciones'
status: 'ready-for-design'
owner: 'Mattias Garcés'
version: '1.0.0'
updated: '2026-09-12'
---

# PROALIMEC - Design System Web

> Sistema visual y funcional para diseñar la nueva presencia web de PROALIMEC.
>
> Este documento define fundamentos de marca, tokens, componentes, estructuras de página, biblioteca de secciones, comportamiento responsive y reglas de movimiento. Debe utilizarse junto con `PROALIMEC_CONTEXT.md` y `FASE_1_INICIALIZACION_ESTRUCTURA_PROALIMEC.md`.

---

## 0. Propósito y uso del documento

Este Design System tiene cuatro objetivos:

1. Convertir la identidad de PROALIMEC en una experiencia web reconocible y consistente.
2. Dar a Homepage, Catálogo, Detalle de producto y Contacto un mismo lenguaje visual.
3. Permitir que componentes y secciones se construyan de forma reutilizable en React.
4. Mantener los contenidos desacoplados mediante JSON, servicios, loaders, hooks y schemas Zod.

Las palabras **DEBE**, **NO DEBE**, **RECOMENDADO** y **OPCIONAL** expresan prioridad.

- **DEBE**: regla obligatoria de identidad, experiencia o accesibilidad.
- **NO DEBE**: uso prohibido o fuera del alcance aprobado.
- **RECOMENDADO**: solución predeterminada; cambiarla requiere una razón concreta.
- **OPCIONAL**: variante válida cuando existe contenido aprobado y no afecta rendimiento.

### Jerarquía de fuentes

Ante un conflicto, utilizar este orden:

1. Identidad oficial y material aprobado por PROALIMEC.
2. Información comercial confirmada por el cliente.
3. Este Design System.
4. Referencias visuales e inspiración externa.

Las referencias sirven para entender composición y jerarquía. **No autorizan copiar interfaces, textos, fotografías, animaciones, iconos o recursos de otras marcas.**

---

## 1. Fundamento estratégico

### 1.1 Objetivo comercial

La web debe convertir la presencia digital de PROALIMEC en un canal comercial claro para compradores mayoristas de alimentos cárnicos congelados.

La conversión principal es:

> Clic en **Solicitar cotización** o **Consultar por WhatsApp**.

Conversiones secundarias:

- visitar el catálogo;
- filtrar una categoría;
- abrir el detalle de un producto;
- consultar un producto específico;
- llamar, escribir un correo o abrir la ubicación.

### 1.2 Concepto creativo

**Frescura protegida**

La propuesta visual combina conservación, cadena de frío, confianza y atención directa. Debe sentirse técnica y moderna, pero cercana; mayorista, pero no anticuada; llamativa, pero no saturada.

### 1.3 Promesa visual

Cada pantalla debe comunicar en pocos segundos:

- el producto se conserva de forma responsable;
- la empresa transmite respaldo y confianza;
- existe una vía directa para solicitar información o cotizar.

### 1.4 Personalidad

| Rasgo     | Cómo se expresa                                                                            |
| --------- | ------------------------------------------------------------------------------------------ |
| Confiable | Navy, jerarquía estable, mensajes concretos y datos aprobados.                             |
| Fresca    | Fondos hielo, luz limpia, espacios amplios y fotografía nítida.                            |
| Técnica   | Grillas ordenadas, procesos explicados con claridad y microdatos útiles.                   |
| Cercana   | Español directo, personas reales y contacto visible.                                       |
| Mayorista | Catálogo organizado, presentaciones y CTA de cotización; no estética de carrito minorista. |
| Dinámica  | GSAP controlado, recortes de producto y cambios de ritmo entre secciones.                  |

### 1.5 Principios de diseño

1. **Producto primero:** la carne, el empaque y la operación real son protagonistas.
2. **Frío confiable:** los colores fríos organizan; el naranja llama a actuar.
3. **Claridad B2B:** toda sección debe explicar, demostrar o convertir.
4. **Movimiento con propósito:** la animación guía la mirada, nunca bloquea la lectura.
5. **Confianza verificable:** no inventar cifras, certificaciones, clientes, testimonios ni cobertura.
6. **Sistemas antes que pantallas:** construir tokens y componentes antes de estilizar páginas aisladas.
7. **Responsive desde el contenido:** la experiencia debe funcionar desde 320 px sin depender de hover.

---

## 2. Síntesis de las referencias visuales

Referencias revisadas:

- `654795b1-6024-4adb-aa6d-6b1da962f0de.png`
- `dae5cd76-2658-4e99-aa65-430a085ac06a.png`
- `b2cc9798-bbe3-4a3b-8ef3-3529e0cc1845.png`
- `ada33014-81f3-47e0-9327-98e57bf90d5b.png`
- `0e6dd7f3-b9ef-45e3-97d9-1c7321d0f8dc.png`
- Capturas previas de AGROSUPER incorporadas al contexto maestro.

### 2.1 Patrones útiles y traducción para PROALIMEC

| Patrón observado                      | Valor del patrón                     | Traducción propia para PROALIMEC                                                                                      |
| ------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Fotografía de carne a gran escala     | Comunica el producto inmediatamente. | Usar producto crudo/congelado, empaques y operación real sobre superficies frías.                                     |
| Hero editorial asimétrico             | Crea impacto y jerarquía.            | Copy a la izquierda y recorte de producto protegido por un arco/placa a la derecha.                                   |
| Alternancia claro/oscuro              | Evita una landing monótona.          | Alternar blanco, frost y navy; reservar dark sections para promesa, proceso o CTA.                                    |
| Separadores curvos                    | Conectan visualmente los bloques.    | Crear un **arco protector** basado en el escudo; no repetir olas genéricas en cada sección.                           |
| Categorías mediante iconos o imágenes | Acelera la exploración.              | Tarjetas con recortes reales, nombre, descripción corta y enlace al catálogo filtrado.                                |
| Producto aislado con ingredientes     | Aporta profundidad y apetito visual. | Utilizar elementos secundarios mínimos; nunca competir con el producto o comunicar preparación si se vende congelado. |
| Bloques de métricas                   | Refuerzan experiencia y escala.      | Mostrar únicamente años, categorías, cobertura u otros datos confirmados.                                             |
| Grid uniforme de productos            | Facilita comparar.                   | Tarjetas sin precio ni carrito; usar “Ver detalle” y “Consultar”.                                                     |
| Historia y beneficios en split layout | Construye confianza.                 | Combinar fotografía real de operación con valores aprobados y CTA comercial.                                          |
| CTA repetido                          | Reduce fricción para convertir.      | Cotización visible en header, producto, cierre de página y botón flotante moderado.                                   |

### 2.2 Qué se conserva como inspiración

- producto protagonista;
- titulares de gran escala;
- composición editorial;
- alternancia de superficies;
- categorías visuales;
- secciones de proceso y confianza;
- ritmo narrativo por bloques;
- CTA comercial claro.

### 2.3 Qué se descarta

- estética genérica roja y negra de carnicería;
- precios, descuentos, carrito, estrellas o botones “Comprar”;
- imágenes de comida cocinada que confundan el tipo de negocio;
- logotipos falsos, testimonios de plantilla o métricas inventadas;
- exceso de ondas, ingredientes flotantes o adornos;
- tipografías script o desgastadas como lenguaje principal;
- copia del hero, catálogo, menú o animaciones de AGROSUPER;
- mármol, recursos gráficos o frases identificables de otras marcas.

---

## 3. Identidad de marca

### 3.1 Rol del logotipo

El logo es el punto de reconocimiento principal. Debe aparecer en:

- header;
- footer;
- favicon o app icon mediante una variante oficial simplificada;
- social card;
- documentos o assets promocionales derivados.

### 3.2 Reglas del logotipo

- DEBE usarse un archivo oficial, preferiblemente SVG.
- NO DEBE reconstruirse con texto, trazarse manualmente ni alterarse.
- NO DEBE deformarse, rotarse, recolorearse o separarse.
- DEBE conservar su área de protección.
- La versión completa DEBE medir al menos **140 px de ancho** en digital.
- Sobre fotografía DEBE colocarse dentro de una superficie sólida o con contraste suficiente.
- En el header móvil puede utilizarse una variante oficial compacta únicamente si PROALIMEC la entrega o aprueba.

### 3.3 Recursos conceptuales permitidos

El sistema puede reinterpretar, sin copiar el logo:

- escudo: protección y estructura;
- gota: frescura y conservación;
- copo: cadena de frío;
- línea continua: transporte, proceso y distribución;
- recortes de productos: portafolio y variedad.

No usar estos elementos simultáneamente en todos los bloques. Cada sección debe elegir un recurso principal.

---

## 4. Sistema de color

### 4.1 Paleta primaria

| Token          |       Hex | Rol principal                                                   |
| -------------- | --------: | --------------------------------------------------------------- |
| `brand-navy`   | `#0B1F53` | Confianza, header, CTA primario, fondos de alto impacto.        |
| `brand-orange` | `#D85A1A` | Acentos, marcadores, líneas, íconos y momentos de acción.       |
| `brand-ice`    | `#63C8F2` | Señales de frío, ilustraciones, detalles y estados decorativos. |
| `brand-frost`  | `#D9F1FB` | Fondos fríos, paneles suaves y separación de secciones.         |
| `brand-white`  | `#FFFFFF` | Superficie base, respiración y contraste.                       |

### 4.2 Colores funcionales

| Token               |       Hex | Uso                                  |
| ------------------- | --------: | ------------------------------------ |
| `ink`               | `#071633` | Texto principal sobre fondos claros. |
| `muted`             | `#526079` | Texto secundario y metadatos.        |
| `surface`           | `#FFFFFF` | Tarjetas y superficie principal.     |
| `surface-cold`      | `#F3FBFE` | Fondo alterno muy claro.             |
| `surface-navy-soft` | `#EEF1F8` | Panel de apoyo asociado al navy.     |
| `border-cold`       | `#C6E2EE` | Bordes, divisores y campos.          |
| `success`           | `#19734B` | Confirmación real del sistema.       |
| `warning`           | `#8A5B00` | Advertencias.                        |
| `danger`            | `#B42318` | Errores.                             |

Los colores funcionales no reemplazan ni modifican la paleta oficial del logo.

### 4.3 Proporción visual sugerida

- 55–65 % blanco y superficies claras.
- 20–25 % navy.
- 10–15 % frost e ice.
- 5–8 % naranja.

El naranja es un acento. Si ocupa grandes superficies repetidas, pierde fuerza y acerca el diseño a una estética genérica de alimentos.

### 4.4 Combinaciones aprobadas

| Fondo   | Texto principal | Acción/acento                            |
| ------- | --------------- | ---------------------------------------- |
| Blanco  | Ink o navy      | Naranja, navy o ice decorativo.          |
| Frost   | Navy            | Naranja en detalles; botón navy.         |
| Navy    | Blanco          | Ice y naranja en elementos no textuales. |
| Naranja | Navy/ink        | Uso breve y controlado.                  |

### 4.5 Accesibilidad de color

- El CTA primario DEBE ser navy con texto blanco.
- `#D85A1A` NO DEBE usarse con texto blanco pequeño porque no alcanza contraste AA.
- El naranja puede utilizarse para texto grande, borde, icono, indicador o superficie con texto navy.
- El estado activo nunca se comunica solo con color: añadir icono, subrayado, borde o etiqueta.
- El foco sobre superficies claras debe usar outline navy; sobre navy debe usar outline blanco o ice con contraste verificado.

### 4.6 Tokens CSS base

```css
:root {
  --color-brand-navy: #0b1f53;
  --color-brand-orange: #d85a1a;
  --color-brand-ice: #63c8f2;
  --color-brand-frost: #d9f1fb;
  --color-brand-white: #ffffff;

  --color-ink: #071633;
  --color-muted: #526079;
  --color-surface: #ffffff;
  --color-surface-cold: #f3fbfe;
  --color-surface-navy-soft: #eef1f8;
  --color-border-cold: #c6e2ee;

  --color-success: #19734b;
  --color-warning: #8a5b00;
  --color-danger: #b42318;
}
```

---

## 5. Tipografía

### 5.1 Familias

- **Montserrat:** H1, H2, H3, títulos de producto, métricas y frases de impacto.
- **Inter:** navegación, botones, cuerpo, filtros, etiquetas y contenido funcional.

Las fuentes deben autohospedarse en WOFF2. No depender de una solicitud externa para renderizar la interfaz.

### 5.2 Escala fluida

| Token        | Font           | Tamaño sugerido                  | Interlineado | Uso                           |
| ------------ | -------------- | -------------------------------- | ------------ | ----------------------------- |
| `display-xl` | Montserrat 700 | `clamp(3.5rem, 7vw, 6.5rem)`     | `0.92`       | Frase editorial excepcional.  |
| `display-lg` | Montserrat 700 | `clamp(2.75rem, 6vw, 5rem)`      | `0.98`       | Hero principal.               |
| `h1`         | Montserrat 700 | `clamp(2.5rem, 5vw, 4.5rem)`     | `1.02`       | H1 de páginas internas.       |
| `h2`         | Montserrat 700 | `clamp(2rem, 4vw, 3.25rem)`      | `1.08`       | Título de sección.            |
| `h3`         | Montserrat 650 | `clamp(1.5rem, 2.5vw, 2.125rem)` | `1.15`       | Tarjetas destacadas y grupos. |
| `h4`         | Montserrat 650 | `clamp(1.125rem, 2vw, 1.5rem)`   | `1.2`        | Tarjetas y detalles.          |
| `body-lg`    | Inter 400      | `1.125rem`                       | `1.65`       | Introducciones.               |
| `body`       | Inter 400      | `1rem`                           | `1.6`        | Texto principal.              |
| `body-sm`    | Inter 400      | `0.875rem`                       | `1.55`       | Metadatos y ayudas.           |
| `label`      | Inter 600      | `0.8125rem`                      | `1.2`        | Eyebrows, chips y etiquetas.  |

### 5.3 Reglas tipográficas

- Mantener líneas de párrafo entre 45 y 75 caracteres.
- No usar mayúsculas sostenidas en párrafos.
- Eyebrows pueden usar uppercase con tracking moderado.
- No usar más de dos pesos por familia en una misma vista si no existe una necesidad clara.
- Los H1 pueden resaltar una frase corta en naranja, pero nunca dividir cada palabra en un color distinto.
- El copy de marketing debe ser breve; el diseño no debe depender de lorem ipsum.

---

## 6. Grilla, contenedores y espaciado

### 6.1 Grilla responsive

| Rango               | Columnas |   Gutter | Comportamiento                    |
| ------------------- | -------: | -------: | --------------------------------- |
| 320–639 px          |        4 | 16–20 px | Una columna principal.            |
| 640–1023 px         |        8 | 24–32 px | Dos columnas o composición mixta. |
| 1024 px en adelante |       12 | 24–32 px | Composición editorial completa.   |

### 6.2 Contenedor

```css
.container {
  width: min(100% - 2 * clamp(1.25rem, 4vw, 4rem), 80rem);
  margin-inline: auto;
}
```

- Ancho máximo recomendado: `1280px`.
- Contenido de lectura: `680–760px`.
- Hero y bandas visuales pueden llegar a `1440px`, manteniendo el texto alineado al contenedor.
- No pegar texto ni controles al borde de la ventana.

### 6.3 Escala de espaciado

Base de 4 px:

| Token      |  Valor | Uso frecuente                    |
| ---------- | -----: | -------------------------------- |
| `space-1`  |   4 px | Separación mínima.               |
| `space-2`  |   8 px | Icono + etiqueta.                |
| `space-3`  |  12 px | Elementos compactos.             |
| `space-4`  |  16 px | Padding pequeño.                 |
| `space-5`  |  20 px | Campos y tarjetas móviles.       |
| `space-6`  |  24 px | Grupos internos.                 |
| `space-8`  |  32 px | Tarjetas y subsecciones.         |
| `space-10` |  40 px | Separación media.                |
| `space-12` |  48 px | Bloques.                         |
| `space-16` |  64 px | Inicio/cierre de sección móvil.  |
| `space-20` |  80 px | Sección tablet.                  |
| `space-24` |  96 px | Sección desktop.                 |
| `space-32` | 128 px | Hero o sección editorial amplia. |

Padding vertical recomendado de sección:

```css
padding-block: clamp(4rem, 9vw, 8rem);
```

### 6.4 Densidad

- Home: densidad baja-media, fotografía amplia y respiración.
- Catálogo: densidad media-alta, controles claros y grid estable.
- Detalle: densidad media, galería protagonista e información agrupada.
- Contacto: densidad baja, accesos directos y datos fáciles de escanear.

---

## 7. Forma, bordes, sombras y capas

### 7.1 Radios

| Token         |  Valor | Uso                                     |
| ------------- | -----: | --------------------------------------- |
| `radius-sm`   |   8 px | Chips, etiquetas y controles compactos. |
| `radius-md`   |  16 px | Campos y tarjetas estándar.             |
| `radius-lg`   |  24 px | Media cards y CTA panels.               |
| `radius-xl`   |  32 px | Bloques editoriales.                    |
| `radius-pill` | 999 px | Botones pill y filtros.                 |

### 7.2 Arco protector

El **arco protector** es el separador distintivo derivado conceptualmente del escudo.

- Puede utilizarse en el hero, una sección de marca o un CTA de cierre.
- Máximo recomendado: dos usos fuertes por página.
- En móvil debe simplificarse; no debe generar espacios vacíos ni recortes de texto.
- Debe construirse con CSS, SVG propio o clip-path sencillo; no copiar curvas de una referencia.

### 7.3 Bordes

- Borde estándar: `1px solid var(--color-border-cold)`.
- Borde activo: navy de 2 px o combinación navy + icono.
- El naranja se reserva para acentos de 2–4 px, no para encerrar cada tarjeta.

### 7.4 Sombras

```css
:root {
  --shadow-xs: 0 0.25rem 0.75rem rgb(11 31 83 / 0.06);
  --shadow-sm: 0 0.75rem 2rem rgb(11 31 83 / 0.08);
  --shadow-md: 0 1.5rem 4rem rgb(11 31 83 / 0.12);
  --shadow-focus: 0 0 0 3px rgb(99 200 242 / 0.55);
}
```

- Evitar sombras negras duras.
- Usar elevación solo para indicar capas, foco o protagonismo.
- Una tarjeta estándar no necesita sombra y borde fuerte simultáneamente.

---

## 8. Dirección fotográfica y assets

### 8.1 Familias de imagen

| Familia                  | Objetivo                         | Tratamiento                                                                 |
| ------------------------ | -------------------------------- | --------------------------------------------------------------------------- |
| Producto aislado         | Reconocimiento y catálogo.       | Fondo transparente o blanco frío, luz limpia, recorte preciso.              |
| Producto empacado        | Presentación comercial real.     | Etiqueta legible, proporción consistente, sin reflejos excesivos.           |
| Operación/cadena de frío | Demostrar proceso y confianza.   | Fotografía real, orden, limpieza y temperatura visual fría.                 |
| Equipo/servicio          | Humanizar la marca.              | Entornos reales, poses naturales, uniforme autorizado.                      |
| Contexto mayorista       | Comunicar escala y distribución. | Bodega, transporte o recepción únicamente si pertenece a la operación real. |

### 8.2 Reglas

- Priorizar fotografías de PROALIMEC sobre stock.
- No publicar imágenes sin autorización.
- No reutilizar fotografías de AGROSUPER ni de las plantillas de referencia.
- No representar carne cocinada como producto vendido si puede inducir a error.
- No añadir ingredientes decorativos que sugieran contenido o preparación inexistente.
- Mantener temperatura de color y fondo consistentes dentro de cada grid.
- Evitar composiciones sangrientas, oscuras o agresivas.
- No usar IA para inventar empaques, etiquetas, certificaciones o instalaciones de PROALIMEC.

### 8.3 Proporciones

| Uso                         | Ratio recomendado                           |
| --------------------------- | ------------------------------------------- |
| Hero desktop                | `4:3`, `5:4` o recorte libre controlado.    |
| Hero móvil                  | `4:5`.                                      |
| Tarjeta de producto         | `4:3` o `1:1`, igual para todo el catálogo. |
| Galería de detalle          | `4:3`.                                      |
| Imagen editorial de proceso | `3:2` o `16:10`.                            |
| Social card                 | `1.91:1`.                                   |

### 8.4 Rendimiento

- AVIF como primera opción y WebP como fallback cuando el pipeline lo permita.
- Reservar `width`, `height` o `aspect-ratio`.
- Hero con `fetchpriority="high"` y sin lazy loading.
- Imágenes bajo el fold con lazy loading nativo.
- Generar variantes mediante `srcset` y `sizes`.
- No servir originales de varios megabytes directamente.

---

## 9. Iconografía y sistema gráfico

### 9.1 Iconografía funcional

- Utilizar Lucide únicamente para acciones genéricas: buscar, cerrar, menú, teléfono, correo, ubicación y flechas.
- Stroke recomendado: `1.75–2px`.
- Tamaños base: 16, 20 y 24 px.
- Todo icono interactivo necesita un nombre accesible.

### 9.2 Iconografía de marca

Los íconos de escudo, gota, copo, cadena de frío y categorías deben ser propios o aprobados. No usar Lucide como sustituto de un símbolo central de identidad si se requiere una pieza distintiva.

### 9.3 Elementos decorativos

Permitidos:

- líneas frías;
- microgotas;
- patrones muy sutiles;
- recortes de producto;
- placas protectoras;
- degradados suaves de navy a frost.

No permitidos:

- texturas intensas detrás del texto;
- patrones que parezcan suciedad o escarcha sobre el alimento;
- ilustraciones de animales si no pertenecen al lenguaje aprobado;
- ingredientes flotantes repetidos sin función;
- efectos glassmorphism que reduzcan legibilidad.

---

## 10. Sistema de movimiento

### 10.1 Principios

- La experiencia completa debe funcionar sin animaciones.
- GSAP mejora jerarquía; no es responsable de mostrar contenido esencial.
- Animar principalmente `transform` y `opacity`.
- Evitar `width`, `height`, `top` y `left` cuando provoquen layout/repaint.
- Respetar `prefers-reduced-motion`.
- No alterar el scroll nativo en la primera versión.
- Todo timeline y ScrollTrigger debe limpiarse al desmontar el componente.

### 10.2 Tokens

```ts
export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.18,
    base: 0.42,
    slow: 0.72,
  },
  ease: {
    enter: 'power3.out',
    exit: 'power2.in',
    emphasize: 'expo.out',
  },
  distance: {
    sm: 12,
    md: 28,
    lg: 48,
  },
  stagger: {
    tight: 0.05,
    base: 0.09,
  },
} as const
```

### 10.3 Patrones de movimiento

| Patrón                | Uso                                          | Límite                                       |
| --------------------- | -------------------------------------------- | -------------------------------------------- |
| `reveal-up`           | Encabezados y bloques al entrar al viewport. | 12–28 px; una sola vez.                      |
| `reveal-mask`         | H1 del hero.                                 | 0.6–0.8 s; contenido visible si falla JS.    |
| `stagger-cards`       | Categorías, beneficios o productos.          | 0.05–0.09 s entre elementos.                 |
| `product-float-in`    | Producto principal del hero.                 | Traslación 20–30 px y escala mínima.         |
| `marquee-slow`        | Slogan o categorías.                         | Pausable; decorativo; sin información única. |
| `cold-chain-progress` | Hitos de proceso.                            | Sin pinning agresivo; lista normal en móvil. |
| `crossfade-gallery`   | Cambio de imagen en detalle.                 | 0.18–0.3 s.                                  |

### 10.4 Reduced motion

Cuando el usuario prefiera movimiento reducido:

- contenido visible desde el primer render;
- sin parallax, scrub, marquee ni desplazamientos amplios;
- transiciones casi inmediatas;
- conservar únicamente feedback necesario de foco y estado.

---

## 11. Componentes fundamentales

Los componentes compartidos viven en `app/shared/components/` únicamente cuando sean usados por dos o más secciones.

### 11.1 Botón

**Anatomía:** label, icono opcional, estado de foco, área táctil.

| Variante    | Apariencia                             | Uso                                                 |
| ----------- | -------------------------------------- | --------------------------------------------------- |
| `primary`   | Navy + texto blanco                    | Acción principal: cotizar, consultar, ver catálogo. |
| `secondary` | Fondo blanco/transparente + borde navy | Acción secundaria.                                  |
| `accent`    | Fondo naranja + texto navy             | Promoción puntual; validar contraste.               |
| `ghost`     | Sin fondo + texto navy                 | Acciones terciarias.                                |
| `inverse`   | Blanco + texto navy                    | CTA sobre fondo navy.                               |

Reglas:

- Altura mínima: 44 px; recomendada: 48–52 px.
- No más de dos CTAs de igual jerarquía dentro del mismo bloque.
- Un enlace que navega debe ser `<a>`/`Link`; una acción local debe ser `<button>`.
- Estados: default, hover, active, focus-visible, disabled y loading solo si existe una acción asíncrona real.

### 11.2 SiteHeader

**Contenido:** logo, Inicio, Productos, Contáctanos y CTA Solicitar cotización.

- Transparente únicamente cuando el hero garantiza contraste.
- Después de scroll puede usar superficie blanca con blur moderado y borde inferior.
- En móvil: logo, CTA compacto opcional y botón de menú.
- Menú móvil con foco controlado, cierre por Escape y bloqueo de scroll mientras está abierto.
- El CTA nunca debe quedar oculto por una animación larga.

### 11.3 SectionHeading

Props sugeridas:

```ts
type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  tone?: 'light' | 'dark'
}
```

- Alineación inicial por defecto.
- Centrado solo en grids, métricas o cierres de campaña.
- Ancho máximo de descripción: 60–68 caracteres por línea.

### 11.4 ProductCard

**Anatomía:** media, categoría, nombre, presentación opcional, enlace de detalle y consulta.

- Ratio de imagen constante.
- No mostrar precio, stock, descuento, rating ni carrito.
- Hover desktop: imagen hasta `scale(1.03)`, borde navy y elevación suave.
- La acción “Consultar” debe generar un mensaje con el producto identificado.
- Evitar enlaces interactivos anidados dentro de toda la tarjeta.
- En móvil, acciones siempre visibles.

### 11.5 CategoryCard

**Anatomía:** nombre, descripción breve, recorte o icono aprobado y enlace.

Variantes:

- `image`: categoría con fotografía protagonista;
- `compact`: icono + nombre para navegación rápida;
- `featured`: tarjeta editorial de mayor tamaño.

Al seleccionar debe navegar a `/productos?categoria={slug}`.

### 11.6 FilterChip

- Pill con label corto.
- Estado seleccionado con fondo navy, texto blanco y check/icono.
- Estado no seleccionado con fondo blanco y borde frío.
- Debe ser operable por teclado.
- No depender únicamente del color para comunicar selección.

### 11.7 SearchField

- Label visible o visible para lectores con contexto inequívoco.
- Placeholder: `Buscar productos`.
- Botón de limpiar cuando exista valor.
- Actualización de query param `q`.
- No ejecutar peticiones ni simular latencia: la fuente inicial es local.

### 11.8 BenefitCard

**Anatomía:** icono propio, título, descripción corta.

Usos: servicio, calidad, conservación, atención o distribución, siempre con copy aprobado.

- Máximo 3–4 beneficios por bloque.
- No presentar un valor corporativo como certificación.

### 11.9 MetricItem

**Anatomía:** cifra, unidad, descriptor y fuente interna aprobada.

- Las cifras deben venir del mock validado, no de JSX.
- Si no existen datos confirmados, reemplazar la sección por contenido cualitativo.
- No usar contadores animados que dificulten leer el valor final.

### 11.10 BrandMarquee

- Texto posible: slogan o nombres de categorías aprobados.
- Debe duplicarse solo a nivel visual; la repetición decorativa usa `aria-hidden="true"`.
- Pausar movimiento con reduced motion.
- Nunca contener el único CTA o información esencial.

### 11.11 ProductGallery

- Imagen principal con dimensiones reservadas.
- Miniaturas como botones accesibles.
- Flechas con label.
- Navegación por teclado.
- Crossfade corto; sin zoom obligatorio.

### 11.12 ContactCard

Variantes: WhatsApp, teléfono, correo, dirección y horario.

- Mostrar el dato y la acción asociada.
- Icono no sustituye la etiqueta.
- `tel:`, `mailto:` y enlace de mapa deben probarse en móvil.

### 11.13 FloatingWhatsAppCTA

- Acción secundaria persistente, no sustituto del CTA principal.
- Respetar safe area móvil.
- No cubrir filtros, footer, banners de privacidad o contenido.
- Puede ocultarse cuando un CTA de WhatsApp equivalente esté visible.

### 11.14 Estados compartidos

| Estado               | Componente      | Comportamiento                              |
| -------------------- | --------------- | ------------------------------------------- |
| Sin resultados       | `EmptyCatalog`  | Explica y permite limpiar filtros.          |
| Error de contenido   | `ContentError`  | Mensaje claro; no expone detalles técnicos. |
| Imagen no disponible | `ImageFallback` | Superficie frost con nombre/categoría.      |
| 404                  | `NotFoundPage`  | Retorno a Inicio y Productos.               |

No crear skeletons prolongados para datos locales prerenderizados. Solo usarlos si una futura API introduce una espera real.

---

## 12. Biblioteca de estructuras visuales

Esta biblioteca permite construir distintas páginas y campañas sin inventar un layout nuevo cada vez.

### 12.1 Heroes

#### Hero A — Producto protegido

**Uso recomendado:** Homepage.

- Fondo frost/blanco con bloque navy parcial.
- Copy en 5 columnas y producto en 7 columnas.
- Arco protector detrás del producto.
- Eyebrow, H1, párrafo, dos CTAs y prueba de confianza aprobada.
- En móvil: copy primero, producto debajo; CTA principal a ancho completo.
- Movimiento: reveal de H1, stagger del copy y entrada corta del producto.

Contenido inicial:

- Eyebrow: `PROALIMEC · Alimentos cárnicos congelados`.
- H1: `Frescura protegida, calidad garantizada.`
- CTA primario: `Solicitar cotización`.
- CTA secundario: `Ver productos`.

#### Hero B — Portafolio editorial

**Uso:** Catálogo.

- Fondo navy.
- H1 blanco, descripción breve y chips de categorías.
- Mosaico de 2–3 recortes de producto en el lateral.
- Sin CTA redundante de compra.
- En móvil: recortes simplificados y filtros debajo del encabezado.

#### Hero C — Información directa

**Uso:** Contacto y páginas funcionales.

- Superficie clara.
- H1 y descripción en ancho de lectura.
- Un CTA directo y una imagen de operación/servicio.
- Menor altura que el Home hero.

### 12.2 Estructuras de productos

#### Product Category Rail

- 3–4 categorías visibles en desktop.
- Scroll-snap horizontal en móvil o grid de una columna.
- Una categoría puede destacarse en mayor tamaño.
- Cada tarjeta dirige al catálogo filtrado.

#### Featured Product Grid

- Desktop: 3 o 4 columnas.
- Tablet: 2 columnas.
- Móvil: 1 columna.
- Máximo recomendado en Home: 4–6 productos.
- El catálogo completo puede mostrar hasta 30 sin paginación inicial.

#### Product Spotlight

- Producto destacado en split 6/6.
- Imagen amplia, descripción, presentaciones aprobadas y CTA Consultar.
- Fondo alterno frost o navy.
- Útil para campaña o categoría prioritaria; no mostrar precio inventado.

#### Product Mosaic

- Una tarjeta grande y 2–4 tarjetas compactas.
- Útil para variedad visual en Home.
- Debe mantener orden de lectura y no sustituir el catálogo accesible.

#### Related Products

- 3 productos de la misma categoría.
- Sin carrusel si caben en la grilla.
- En móvil puede usar scroll-snap, controles visibles y semántica correcta.

### 12.3 Estructuras de marca

#### Brand Story Split

- Imagen real de empresa/operación en 6 columnas.
- Título, historia breve, 2–3 valores y CTA en 6 columnas.
- Puede invertir dirección en secciones alternas.
- No usar párrafos largos ni historia no confirmada.

#### Brand Promise Banner

- Fondo navy de ancho completo.
- Frase grande, detalle gráfico frío y CTA inverse.
- Puede incluir el slogan.
- Una sola idea; no convertirlo en un bloque de múltiples tarjetas.

#### Operational Gallery

- Mosaico controlado de bodega, transporte, productos y equipo.
- Cada imagen debe tener autorización y contexto real.
- Usar captions cuando agreguen información.
- No ocultar deficiencias mediante filtros o montajes engañosos.

#### Trust Metrics Strip

- 2–4 métricas aprobadas.
- Fondo frost o navy.
- Cifras grandes con Montserrat.
- En móvil: lista 2x2 o vertical.

### 12.4 Estructuras de marketing

#### Why PROALIMEC

- SectionHeading + 3 BenefitCards.
- Explica razones para contactar o confiar.
- Íconos propios y copy de máximo 2–3 líneas.
- No usar “premium”, “certificado” o “garantizado” como hechos no comprobados.

#### Cold Chain Journey

- 3–5 hitos conectados por línea/gota.
- Desktop: recorrido horizontal o escalonado.
- Móvil: timeline vertical normal.
- Solo incluir procesos confirmados.
- Movimiento: progreso corto vinculado al scroll, sin bloquear la página.

#### Wholesale Attention

- Bloque de conversión dirigido a compradores mayoristas.
- Puede incluir pasos: explorar, consultar y coordinar.
- CTA a WhatsApp y contacto alternativo.
- No prometer plazos, mínimos o cobertura sin aprobación.

#### Audience Use Cases

- Tarjetas para segmentos atendidos por la empresa.
- OPCIONAL y solo con segmentos reales aprobados.
- No asumir restaurantes, hoteles, distribuidores o supermercados sin confirmación.

#### Campaign Banner

- Producto/categoría prioritaria, título corto y CTA.
- Puede alternar fondo navy o frost.
- Sin descuentos o precios si no existe una campaña real.
- Contenido controlado desde JSON para cambiarlo sin tocar JSX.

#### Testimonial / Client Proof

- OPCIONAL.
- Solo usar testimonio textual, nombre, cargo, empresa y permiso verificables.
- No usar avatares, estrellas ni logos de clientes de plantilla.
- Si no existe evidencia aprobada, omitir la sección por completo.

#### FAQ Comercial

- 4–6 preguntas reales sobre compra mayorista, contacto, presentaciones o distribución.
- Respuestas concretas y aprobadas.
- Disclosure accesible con `<button>` y `aria-expanded`.
- No inventar políticas comerciales.

#### Quote CTA

- Sección de cierre antes del footer.
- Título de una línea, texto breve y CTA principal.
- Fondo navy con arco protector o fotografía autorizada.
- Variante compacta para Catálogo y Detalle.

---

## 13. Composición recomendada por página

### 13.1 Homepage

| Orden | Sección                         | Superficie                     | Objetivo                            |
| ----: | ------------------------------- | ------------------------------ | ----------------------------------- |
|     1 | SiteHeader                      | Blanca/transparente controlada | Navegación y cotización inmediata.  |
|     2 | Hero A — Producto protegido     | Frost + navy                   | Presentar promesa y producto.       |
|     3 | BrandMarquee                    | Navy o blanco                  | Reforzar slogan/categorías.         |
|     4 | Product Category Rail           | Blanco                         | Facilitar exploración.              |
|     5 | Why PROALIMEC                   | Surface cold                   | Explicar valor.                     |
|     6 | Brand Story Split               | Blanco                         | Dar rostro e historia a la empresa. |
|     7 | Cold Chain Journey              | Navy                           | Construir confianza operativa.      |
|     8 | Featured Product Grid           | Blanco                         | Mostrar portafolio.                 |
|     9 | Trust Metrics Strip             | Frost                          | Respaldar con datos aprobados.      |
|    10 | Wholesale Attention / Quote CTA | Navy                           | Convertir.                          |
|    11 | Contact summary + Footer        | Ink/navy                       | Cerrar con información útil.        |

No todas las secciones tienen que publicarse en la primera entrega si falta contenido real. Es preferible una Home más corta y creíble que una larga con placeholders permanentes.

### 13.2 Catálogo de productos

1. SiteHeader.
2. Hero B — Portafolio editorial.
3. Barra de búsqueda, categorías y contador.
4. Grid responsive de ProductCard.
5. Empty state cuando corresponda.
6. Quote CTA compacto.
7. Footer.

Desktop:

- filtros mediante chips superiores o sidebar solo si las categorías realmente lo necesitan;
- 3 columnas recomendadas para conservar fotografía y lectura;
- 4 columnas únicamente en pantallas amplias y tarjetas simples.

Móvil:

- búsqueda primero;
- categorías en scroll horizontal o disclosure;
- una columna;
- botón de limpiar visible cuando existan filtros.

### 13.3 Detalle de producto

1. SiteHeader.
2. Breadcrumbs.
3. Galería 7 columnas + información 5 columnas.
4. Nombre, categoría, descripción y presentaciones aprobadas.
5. CTA Consultar por WhatsApp.
6. Información adicional aprobada.
7. Related Products.
8. Quote CTA compacto.
9. Footer.

No mostrar precio, stock, SKU, certificación, tabla nutricional o disponibilidad si no fueron proporcionados y aprobados.

### 13.4 Contacto

1. SiteHeader.
2. Hero C — Información directa.
3. Grid de ContactCards.
4. Ubicación y horarios.
5. Mapa OPCIONAL, con URL aprobada y carga diferida.
6. Wholesale Attention.
7. Footer.

No incluir un formulario que aparente enviar datos si no existe un servicio real.

---

## 14. Ritmo visual de la landing

Para evitar una página plana, la Homepage debe alternar ritmo:

```text
Impacto -> exploración -> confianza -> historia -> proceso -> producto -> conversión
```

Reglas:

- No colocar tres grids de tarjetas consecutivos.
- Después de un bloque denso, usar una sección editorial con más espacio.
- No repetir fondo navy en bloques consecutivos.
- Alternar fotografía recortada, fotografía contextual y UI de catálogo.
- Un solo elemento debe ser protagonista en cada viewport.
- Los CTAs se repiten por intención, no de forma automática en cada sección.

---

## 15. Responsive design

### 15.1 Breakpoints orientativos

- `sm`: 640 px.
- `md`: 768 px.
- `lg`: 1024 px.
- `xl`: 1280 px.
- `2xl`: 1536 px, solo para limitar espacios y medios; no para inflar texto sin control.

### 15.2 Reglas globales

- Mobile first desde 320 px.
- Cero scroll horizontal involuntario.
- No esconder información crítica en hover.
- Targets táctiles de al menos 44 × 44 px.
- Tipografía y espaciado mediante `clamp()` cuando sea útil.
- Los recortes decorativos pueden reducirse u ocultarse en móvil.
- Las composiciones de dos columnas pasan a una columna respetando el orden de lectura.
- La imagen no debe aparecer antes del H1 en el DOM solo para conseguir un layout visual.

### 15.3 Matriz de adaptación

| Componente    | Móvil                      | Tablet              | Desktop                    |
| ------------- | -------------------------- | ------------------- | -------------------------- |
| Header        | Logo + menú + CTA compacto | Navegación compacta | Navegación + CTA completo  |
| Hero          | Copy y luego imagen        | Composición mixta   | 5/7 columnas               |
| Category Rail | Scroll-snap/1 columna      | 2 columnas          | 3–4 columnas               |
| Product Grid  | 1 columna                  | 2 columnas          | 3 columnas                 |
| Detail        | Galería arriba             | 2 columnas          | 7/5 + info sticky moderada |
| Cold Chain    | Timeline vertical          | Vertical/escalonado | Horizontal o escalonado    |
| Metrics       | 2x2 o vertical             | 2x2                 | 4 columnas                 |
| Quote CTA     | Stack y botón full width   | Stack amplio        | Copy + CTA lateral         |

---

## 16. Contenido y tono de voz

### 16.1 Voz

- profesional;
- directa;
- confiable;
- cercana;
- sin tecnicismos innecesarios;
- orientada a compradores mayoristas.

### 16.2 Fórmula recomendada

```text
Beneficio claro + respaldo real + acción directa
```

Ejemplo de estructura, no copy final:

```text
Productos cárnicos congelados para tu negocio.
[Descripción aprobada de portafolio y servicio].
Solicitar cotización.
```

### 16.3 Claims

Slogan principal propuesto:

> Frescura protegida, calidad garantizada.

Claims de apoyo heredados del contexto:

- Cadena de frío que conserva la calidad.
- Respaldo y confianza en cada corte.
- Calidad cárnica con estándares de seguridad.

El cliente debe aprobar cuáles se publican. No usar todos simultáneamente.

### 16.4 Prohibiciones de contenido

- No inventar productos ni presentaciones.
- No inventar certificaciones, precios, disponibilidad o cobertura.
- No inventar testimonios o logotipos de clientes.
- No prometer “entrega inmediata”, “mejor precio” o “calidad premium” sin respaldo.
- No convertir el copy en una repetición artificial de keywords.
- No afirmar “más de 15 años” hasta contar con aprobación final del dato publicado.

---

## 17. Arquitectura del Design System en el proyecto

### 17.1 Fundamentos compartidos

```text
app/shared/
├── components/
│   ├── button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── container/
│   ├── section-heading/
│   ├── optimized-image/
│   ├── brand-marquee/
│   └── visually-hidden/
├── styles/
│   ├── tokens.css
│   ├── fonts.css
│   ├── reset.css
│   ├── utilities.css
│   └── globals.css
└── motion/
    ├── hooks/
    │   ├── use-reveal.ts
    │   └── use-reduced-motion.ts
    ├── presets/
    │   ├── reveal.ts
    │   ├── stagger.ts
    │   └── crossfade.ts
    └── motion.tokens.ts
```

No mover ProductCard o ProductGallery a `shared` si solo pertenecen al catálogo. Compartido no significa “posiblemente reusable”; significa reutilizado realmente por dos o más secciones.

### 17.2 Homepage

```text
app/sections/home-page/
├── components/
│   ├── HeroSection.tsx
│   ├── CategoryShowcase.tsx
│   ├── WhyProalimecSection.tsx
│   ├── BrandStorySection.tsx
│   ├── ColdChainSection.tsx
│   ├── FeaturedProductsSection.tsx
│   ├── TrustMetricsSection.tsx
│   ├── QuoteCtaSection.tsx
│   └── index.ts
├── hooks/
├── loaders/
├── mocks/
├── schemas/
├── services/
├── types/
├── HomePageStoryBook.md
└── HomePage.tsx
```

`HomePageStoryBook.md` debe documentar por componente:

- propósito;
- anatomía;
- props;
- variantes;
- estados;
- contenido esperado;
- responsive;
- accesibilidad;
- movimiento;
- ejemplos de uso permitido y prohibido.

### 17.3 Catálogo

```text
app/sections/product-catalog/
├── components/
│   ├── CatalogHero.tsx
│   ├── CatalogToolbar.tsx
│   ├── SearchField.tsx
│   ├── CategoryFilters.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── ProductInformation.tsx
│   ├── RelatedProducts.tsx
│   └── EmptyCatalog.tsx
├── hooks/
├── loaders/
├── mocks/
├── schemas/
├── services/
├── types/
├── ProductCatalogStoryBook.md
├── ProductCatalogPage.tsx
└── ProductDetailPage.tsx
```

### 17.4 Contacto

```text
app/sections/contact/
├── components/
│   ├── ContactHero.tsx
│   ├── ContactMethods.tsx
│   ├── ContactCard.tsx
│   ├── BusinessHours.tsx
│   ├── LocationSection.tsx
│   └── WholesaleAttentionSection.tsx
├── hooks/
├── loaders/
├── mocks/
├── schemas/
├── services/
├── types/
├── ContactStoryBook.md
└── ContactPage.tsx
```

### 17.5 Flujo de datos

```text
JSON -> Zod schema -> servicio local -> loader -> hook tipado -> página -> sección -> componente
```

Reglas:

- Los componentes NO importan JSON.
- Las secciones reciben datos tipados.
- Los servicios deciden el origen de datos.
- Los loaders conectan rutas y servicios.
- Los hooks simplifican el consumo tipado.
- Zod valida mocks ahora y respuestas de API en el futuro.
- No utilizar `setTimeout` para simular una API.

---

## 18. Contratos de contenido visual

### 18.1 Hero

```ts
export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  media: {
    src: string
    alt: string
    width: number
    height: number
  }
  trustLabel?: string
}
```

### 18.2 Sección de marketing

```ts
export type MarketingSectionContent = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  theme: 'light' | 'frost' | 'navy'
  items?: Array<{
    id: string
    title: string
    description: string
    icon?: string
  }>
  cta?: {
    label: string
    href: string
  }
}
```

### 18.3 Regla de variantes

No guardar clases Tailwind completas dentro del JSON. El contenido puede definir una variante semántica controlada (`light`, `frost`, `navy`), y el componente traduce esa variante a estilos permitidos.

Ejemplo correcto:

```json
{
  "theme": "navy"
}
```

Ejemplo incorrecto:

```json
{
  "className": "bg-[#0B1F53] text-white px-20 rounded-[31px]"
}
```

---

## 19. Accesibilidad

Objetivo: WCAG 2.2 AA para el contenido e interacciones implementados.

### Obligatorio

- Un H1 por página.
- Jerarquía correcta de headings.
- Skip link.
- Navegación por teclado.
- Foco visible.
- Menú móvil con control de foco y cierre por Escape.
- Contraste AA.
- Alt text descriptivo en productos; decoraciones con `alt=""`.
- Labels en búsqueda y filtros.
- Contador del catálogo con `aria-live="polite"`.
- Botones de galería con nombre accesible.
- Reduced motion.
- Targets táctiles mínimos.
- No autoplay con sonido.
- No comunicar información solo por color, posición o movimiento.

---

## 20. Reglas de implementación

- React + TypeScript estricto.
- React Router Framework Mode y prerender estático.
- Tailwind CSS conectado a tokens CSS; no repetir hexadecimales por toda la aplicación.
- GSAP y `@gsap/react` únicamente en componentes que necesiten movimiento.
- CSS transitions para hover, focus y microinteracciones simples.
- No instalar un sistema visual genérico completo como shadcn/ui para esta identidad.
- No usar Zustand/Redux para estados locales de menú, galería o filtros.
- Filtros y búsqueda deben reflejarse en query params.
- No usar `any`.
- No crear componentes monolíticos.
- No crear variantes mediante boolean props ambiguas como `orange`, `big` o `animated`.
- No abstraer antes de identificar dos usos reales o una responsabilidad clara.
- Validar TypeScript, lint, pruebas y build después de cada slice.

---

## 21. Checklist de revisión visual

### Marca

- [ ] Logo oficial, sin deformación y con mínimo de 140 px.
- [ ] Navy, frost e ice dominan el sistema; naranja funciona como acento.
- [ ] La página comunica frío confiable, no carnicería genérica.
- [ ] No se copiaron recursos de AGROSUPER o de plantillas.

### Jerarquía

- [ ] Cada viewport tiene un protagonista claro.
- [ ] Existe un solo H1.
- [ ] Los CTAs principal y secundario se distinguen.
- [ ] No hay tres grids densos consecutivos.

### Producto

- [ ] Imágenes reales/autorizadas y optimizadas.
- [ ] Ratios consistentes.
- [ ] No aparecen precios, descuentos, rating o stock.
- [ ] Cada consulta identifica el producto.

### Marketing

- [ ] Toda cifra está confirmada.
- [ ] No existen testimonios ni certificaciones inventados.
- [ ] Cada sección explica, demuestra o convierte.
- [ ] El cierre contiene una acción comercial clara.

### Responsive y accesibilidad

- [ ] Funciona desde 320 px.
- [ ] No hay scroll horizontal.
- [ ] Todo funciona sin hover.
- [ ] Foco visible y navegación por teclado.
- [ ] Contraste verificado.
- [ ] Reduced motion implementado.
- [ ] El contenido sigue visible sin GSAP.

### Rendimiento

- [ ] Hero priorizado y dimensionado.
- [ ] Imágenes inferiores con lazy loading.
- [ ] No hay saltos de layout.
- [ ] Animaciones usan transform/opacity.
- [ ] GSAP se carga solo donde se usa.

---

## 22. Definition of Done del Design System

El sistema puede considerarse listo para implementar cuando:

1. PROALIMEC confirma el logo maestro y las variantes oficiales.
2. Se aprueban paleta y tipografías web definitivas.
3. Existen tokens en `tokens.css` y no hay colores hexadecimales repetidos en componentes.
4. Button, Container, SectionHeading, ProductCard y estados de foco tienen documentación.
5. Se aprueban los wireframes de Home, Catálogo, Detalle y Contacto.
6. Se seleccionan fotografías reales para hero, catálogo, operación y contacto.
7. El cliente aprueba slogan, claims, métricas y textos institucionales.
8. Cada componente documenta desktop, tablet, móvil, teclado y reduced motion.
9. Los mocks cumplen schemas Zod.
10. Existe una revisión visual en 375, 768, 1024, 1440 y 1920 px.

---

## 23. Información pendiente del cliente

Antes de cerrar diseño o contenido se debe confirmar:

- archivos maestros del logo en SVG y variantes;
- fotografías autorizadas;
- categorías definitivas;
- listado final y presentaciones de productos;
- si el alcance de carga inicial es 20 o 30 productos;
- número de WhatsApp, teléfono, correo, dirección y horarios;
- ubicación aprobada para mapa;
- historia institucional resumida;
- años de experiencia que pueden publicarse;
- procesos de cadena de frío que pueden describirse;
- cobertura y segmentos de clientes reales;
- métricas, certificaciones, clientes o testimonios que puedan mostrarse;
- responsable final de aprobar copy y fotografía.

Mientras un dato no esté confirmado, debe permanecer marcado como placeholder interno y NO publicarse como afirmación real.

---

## 24. Decisión final de dirección visual

La nueva propuesta de PROALIMEC será una landing corporativa B2B de apariencia limpia, fría y moderna. La fotografía real tendrá el protagonismo visual de las referencias, pero el lenguaje será propio: navy estructural, superficies hielo, arcos protectores, naranja dosificado, tipografía Montserrat/Inter y movimiento GSAP breve.

La web no debe parecer una tienda minorista ni una plantilla de carnicería. Debe sentirse como una empresa estable, especializada en alimentos cárnicos congelados y preparada para atender consultas mayoristas de forma directa.
