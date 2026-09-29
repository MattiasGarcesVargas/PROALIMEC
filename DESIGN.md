---
name: PROALIMEC
description: Distribuidor mayorista de cárnicos congelados en Ambato. Blanco y navy editorial, producto sobre fondo oscuro, frío en hielo.
colors:
  navy: '#0b1f53'
  orange: '#d85a1a'
  ember: '#b8460f'
  ice: '#63c8f2'
  frost: '#d9f1fb'
  ink: '#071633'
  muted: '#526079'
  muted-cold: '#9fb4d2'
  cold: '#f3fbfe'
  shade: '#040a18'
  white: '#ffffff'
  black: '#000000'
typography:
  display:
    fontFamily: 'Montserrat, system-ui, sans-serif'
    fontSize: 'clamp(2.6rem, 7.6vw, 6.5rem)'
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: '-0.055em'
  headline:
    fontFamily: 'Montserrat, system-ui, sans-serif'
    fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)'
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: '-0.05em'
  section:
    fontFamily: 'Montserrat, system-ui, sans-serif'
    fontSize: 'clamp(1.85rem, 3.6vw, 3rem)'
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: '-0.04em'
  subsection:
    fontFamily: 'Montserrat, system-ui, sans-serif'
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)'
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: '-0.04em'
  title:
    fontFamily: 'Montserrat, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  lead:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '15px'
    fontWeight: 400
    lineHeight: 1.7
  caption:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '12px'
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '0.12em'
rounded:
  none: '0px'
  focus: '0.2rem'
spacing:
  shell-gutter: 'clamp(2.5rem, 8vw, 8rem)'
  shell-max: '80rem'
  section-y: 'clamp(4rem, 9vw, 7rem)'
  section-y-scene: 'clamp(3.5rem, 8vw, 8rem)'
components:
  button-primary:
    backgroundColor: '{colors.navy}'
    textColor: '{colors.white}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '0 26px'
    height: '52px'
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.white}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.navy}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '0 26px'
    height: '52px'
  button-secondary-hover:
    backgroundColor: '{colors.navy}'
    textColor: '{colors.white}'
  button-inverse:
    backgroundColor: '{colors.white}'
    textColor: '{colors.navy}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '0 26px'
    height: '52px'
  button-inverse-hover:
    backgroundColor: '{colors.frost}'
    textColor: '{colors.navy}'
  button-compact:
    padding: '0 20px'
    height: '44px'
  option-toggle:
    backgroundColor: '{colors.white}'
    textColor: '{colors.navy}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '0 16px'
    height: '44px'
  option-toggle-active:
    backgroundColor: '{colors.navy}'
    textColor: '{colors.white}'
  text-action:
    textColor: '{colors.navy}'
    typography: '{typography.label}'
    padding: '0 0 4px'
---

# Design System: PROALIMEC

## Overview

**Creative North Star: "La cámara de frío con la puerta abierta"**

Una columna tipográfica navy sobre blanco, y al lado el producto real: cortes fotografiados sobre fondo negro, a sangre o en escenas oscuras de ancho completo. El sitio alterna entre dos temperaturas de superficie, el blanco o el blanco frío (`cold`) donde se lee y se decide, y el negro o el ink donde el producto se exhibe. El hielo marca todo lo que es frío, estado o cadena; el naranja es escaso y se reserva para la acción principal y los datos clave.

La densidad es editorial, no de tablero: titulares Montserrat 800 muy apretados a escala fluida, párrafos Inter con interlineado amplio y medida corta, secciones separadas por mucho aire vertical. Nada tiene esquinas redondeadas ni sombras; la estructura la dan filetes de 1 px en navy traslúcido y los cambios de fondo entre secciones.

El movimiento es mejora progresiva: revelados al entrar en pantalla con `ease-out-expo`, un riel de cadena de frío que se llena con el scroll, escenas colgantes con GSAP. Todo se entiende y funciona con `prefers-reduced-motion`.

**Key Characteristics:**

- Blanco con columna tipográfica navy; producto sobre negro.
- Esquinas rectas en todo; estructura por filetes de 1 px, no por tarjetas.
- Naranja escaso: acción principal, datos clave, acento de una línea del titular.
- Hielo para lo frío, el estado y lo pendiente.
- Titulares Montserrat 800 con tracking negativo; cuerpo Inter con medida corta.
- Movimiento progresivo, siempre prescindible.

## Colors

Una paleta de marca tomada del logo: navy dominante, un naranja de acento escaso y un azul hielo que carga el tema del frío.

### Primary

- **Navy PROALIMEC** (navy): el color del sistema. Titulares, texto de navegación activa, botón primario, iconos de línea, filetes (al 10-16 % de opacidad) y el contorno de foco. Sobre blanco es la voz principal.

### Secondary

- **Naranja brasa** (orange): acento escaso. Sobre fondos oscuros como texto (cifras clave de la cadena de frío, etiqueta de línea en la tarjeta de producto) y como acento no textual o de gran tamaño (la línea acentuada del titular del home, flechas, el subrayado del ítem de navegación activo).
- **Ember** (ember): la versión del naranja para texto pequeño sobre blanco o blanco frío (contraste aprox. 5.4:1). Hoy la usan los hechos aprobados del hero de contacto.

### Tertiary

- **Hielo** (ice): frío, estado y cadena. Riel de progreso, puntos de la cadena de frío, el cuadrado de `PendingNote`, texto de énfasis y foco sobre fondos oscuros, color de selección de texto.
- **Escarcha** (frost): texto base del footer sobre ink, hover del botón inverso, extremo claro del riel.

### Neutral

- **Tinta** (ink): texto de cuerpo por defecto sobre blanco; fondo del footer y de la vista previa del mensaje de WhatsApp; hover del botón primario.
- **Gris pizarra** (muted): texto secundario sobre claro (párrafos de introducción, pistas, `PendingNote`, navegación inactiva).
- **Gris frío** (muted-cold): texto secundario sobre fondos oscuros.
- **Blanco frío** (cold): fondo alterno de secciones claras (servicio, constructor de cotización, relacionados, 404).
- **Sombra** (shade): velos y degradados sobre fotografía, siempre con opacidad (10-95 %); también el fondo del modal al 72 %.
- **Blanco** (white) y **Negro** (black): superficie de lectura por defecto; fondo detrás de toda foto de producto y de las escenas.

### Named Rules

**The Ember-On-Light Rule.** El texto naranja de tamaño de cuerpo o menor sobre blanco o `cold` usa `ember`, nunca `orange` (que queda en aprox. 3.9:1). `orange` se reserva para fondos oscuros, texto de escala display y acentos no textuales.

**The Scarce Orange Rule.** El naranja marca la acción principal y los datos clave, no la decoración. Si una pantalla tiene más de dos o tres toques naranja, sobra alguno.

**The Ice Means Cold Rule.** El hielo pertenece al frío, al estado y a lo pendiente. No se usa como segundo color de acento genérico.

## Typography

**Display Font:** Montserrat (con system-ui, sans-serif), pesos cargados 600, 700 y 800.
**Body Font:** Inter (con system-ui, sans-serif), pesos 200 a 700.

**Character:** Montserrat 800 con tracking muy negativo da titulares compactos, industriales y seguros; Inter a 17 px con interlineado 1.75 mantiene el cuerpo sereno y legible. Las etiquetas de acción son Inter 600 en mayúsculas espaciadas.

### Hierarchy

- **Display** (800, clamp 2.6-6.5rem, 0.98): H1 de home y contacto. `text-balance`.
- **Headline / page** (800, clamp 2.4-5.5rem, 1.02): H1 de páginas interiores (catálogo, 404).
- **Section** (800, clamp 1.85-3rem, 1.06): H2 de sección.
- **Subsection** (800, clamp 1.6-2.4rem, 1.08): H2 de bloques secundarios (canales de contacto).
- **Title** (Montserrat 700, 1.25rem, 1.15, -0.025em): H3 de ítem (canal, tarjeta de producto, paso de la cadena a 1.375rem).
- **Lead** (Inter 400, 17px, 1.75): párrafo de introducción bajo un titular, medida `max-w-136` (34rem) o menos, `text-pretty`.
- **Body** (Inter 400, 15px, 1.7): texto de ítems y de canales.
- **Caption** (Inter 400, 13px): pistas, etiquetas de hechos, `PendingNote`.
- **Label** (Inter 600, 12px, 0.12em, mayúsculas): botones, enlaces de acción, toggles. La navegación usa 0.14em y el filtro del catálogo 0.16em.
- **Footer light** (Inter 200-300): enlaces del footer y la frase de marca; es el único uso de los pesos ligeros.

### Named Rules

**The Heavy Head, Quiet Body Rule.** Los titulares son siempre Montserrat 800 (700 para títulos de ítem) con tracking negativo; el cuerpo es siempre Inter. No se mezclan roles.

**The Short Measure Rule.** Ningún párrafo de cuerpo pasa de unos 34rem de ancho.

## Layout

Un contenedor único para todo el sitio (`shell`): ancho `min(100% - clamp(2.5rem, 8vw, 8rem), 80rem)` centrado. Las secciones son bandas de ancho completo que alternan fondo (blanco, `cold`, negro, ink) con relleno vertical fluido de aprox. 3.5-8rem. Las rejillas son fluidas: `grid-fit-N` (auto-fit con mínimo N × 0.25rem, p. ej. 56, 60, 72, 80) o `grid-fill-N` cuando pocas tarjetas no deben estirarse. Composiciones de columna usan 12 columnas desde `lg` (1024px) y colapsan a una sola columna en móvil. El hero de contacto es un split editorial: texto en la mitad izquierda del shell, foto a sangre hasta el borde derecho del viewport desde `lg`, debajo del texto en móvil. Los espacios internos entre titular, lead y acción son aprox. 1.25rem, 1.75-2.25rem.

## Elevation & Depth

Sistema plano. No hay sombras estructurales: la profundidad viene de la alternancia de fondos, de los velos `shade` en degradado sobre fotografía y de la escala de la foto en hover (1.05, 800ms `ease-out-expo`). Las únicas sombras del código son el resplandor hielo del nodo del riel de progreso y la sombra del enlace "saltar al contenido", ambas funcionales.

### Shadow Vocabulary

- **Chain glow** (`box-shadow: 0 0 0.75rem rgb(99 200 242 / 0.9)`): solo el nodo del riel de cadena de frío.

### Named Rules

**The Flat Cold Room Rule.** Las superficies no flotan. Para separar, cambia el fondo o traza un filete; no agregues sombra.

## Shapes

Esquinas rectas en todo: botones, toggles, casillas, tarjetas de producto, el panel de vista previa y el modal (0px). El único redondeo es el contorno de foco (0.2rem) y el punto de la cadena de frío. La estructura se traza con filetes de 1 px en navy al 10-16 % sobre claro y en blanco al 12-18 % sobre oscuro; listas y rejillas de canales llevan filete superior por ítem y cierre inferior. Los marcadores son cuadrados sólidos pequeños (el cuadrado hielo de 6 px de `PendingNote`, el nodo del riel). Las fotos se recortan con `object-cover` en cajas de proporción fija (4/5 en tarjetas, 4/3 en el hero móvil).

## Components

### Buttons

Rectangulares, planos, de mayúsculas espaciadas; firmes y sin adorno.

- **Shape:** esquinas rectas (0px), borde de 1 px siempre presente.
- **Primary:** fondo navy, texto blanco, alto 52px, relleno horizontal 26px; label Inter 600 12px 0.12em.
- **Hover / Focus:** transición de fondo/color/borde en 300ms; primary pasa a ink; foco global con contorno navy de 2px desplazado 4px (hielo sobre oscuro).
- **Secondary:** transparente con borde y texto navy; hover se rellena de navy.
- **Outline:** borde navy al 25 %, texto navy; hover oscurece el borde.
- **Inverse:** para fondos oscuros; blanco con texto navy, hover a frost.
- **Compact:** alto 44px, relleno 20px (el CTA de la cabecera).
- Un ícono de marca (WhatsApp) entra por `MaskIcon` a 18px y hereda `currentColor`.

### Text action

Enlace de acción secundario junto a un botón o al pie de un canal: label en mayúsculas navy con subrayado de 1px navy al 30 % a 4px, que pasa a navy sólido en hover.

### Option toggles

Grupo de botones con `aria-pressed` (línea de producto en el constructor de cotización): rectangulares, alto 44px, borde navy al 20 % sobre blanco; activo relleno navy con texto blanco. El filtro del catálogo es una variante de subrayado: borde inferior de 2px navy en el activo, gris pizarra en inactivos, con el conteo en naranja.

### Checkbox rows

Lista separada por filetes navy al 14 %, filas de mínimo 60px; casilla cuadrada de 20px con borde navy al 40 % que se rellena de navy con un check blanco.

### Cards / Containers

- **Product card:** foto a 4/5 sobre negro, degradado `shade` de 0 a 90 % hacia abajo, texto blanco superpuesto (título 1.25rem Montserrat 700, descripción 13px blanco al 84 %). Toda la tarjeta es un botón; hover y foco escalan la foto.
- **Rule list, no cards:** los grupos de ítems (canales de contacto, pasos, cifras) no son tarjetas; son columnas separadas por filete superior.
- **Panel oscuro:** fondo ink, relleno clamp(1.5rem, 4vw, 3rem), texto blanco, divisor blanco al 12 % (vista previa del mensaje).

### Navigation

Cabecera blanca de alto 64px con filete inferior navy al 10 %, logo horizontal a la izquierda. Enlaces en label de 12px con 0.14em: gris pizarra en reposo, navy en hover, navy con subrayado naranja de 1px cuando están activos; cierra con el botón compacto "cotizar". El footer es ink con texto frost, marca y frase a la izquierda tras un filete vertical, tres columnas de enlaces Inter 200 e iconos sociales de 18px en áreas de 40px con hover `frost/10`.

### Pending Note (signature)

Cómo se dice un dato comercial aún no confirmado: un cuadrado hielo de 6px y una línea en caption gris ("… por confirmar"). En fondo oscuro el texto pasa a `muted-cold`. Nunca un valor inventado ni un campo vacío.

### WhatsApp message preview (signature)

Panel ink que muestra el texto exacto que se abrirá en WhatsApp; cada línea agregada entra con `line-in` (destello hielo y ascenso de 6px, 0.9s) y termina en un guion punteado hielo al 40 % donde el comprador completará el dato.

## Do's and Don'ts

### Do:

- **Do** usar `ember` para cualquier texto naranja de tamaño cuerpo o menor sobre blanco o `cold`; `orange` solo sobre oscuro, a escala display o en acentos no textuales.
- **Do** poner la fotografía de producto sobre negro y velarla con `shade` en degradado cuando lleva texto encima.
- **Do** separar ítems con filetes de 1 px (navy al 10-16 % en claro, blanco al 12-18 % en oscuro) en lugar de tarjetas.
- **Do** mantener esquinas rectas (0px) en botones, campos, paneles y tarjetas.
- **Do** mostrar cada dato comercial pendiente con `PendingNote`.
- **Do** envolver todo movimiento en `motion-reduce` o en `MOTION_OK`, con `ease-out-expo` para entradas.
- **Do** usar `shell` para el ancho de toda sección y `grid-fit-*` / `grid-fill-*` para rejillas.

### Don't:

- **Don't** usar `orange` para texto pequeño sobre blanco o `cold` (aprox. 3.9:1, falla AA).
- **Don't** agregar sombras de elevación ni esquinas redondeadas a superficies.
- **Don't** usar el hielo como acento decorativo fuera de frío, estado o pendiente.
- **Don't** inventar teléfonos, correos, direcciones u horarios, ni simular formularios que envían datos.
- **Don't** poner etiquetas en mayúsculas (eyebrows) sobre los titulares en superficies nuevas; el componente `Eyebrow` existente es herencia, no patrón.
