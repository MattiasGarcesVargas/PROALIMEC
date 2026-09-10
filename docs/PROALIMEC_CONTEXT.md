---
title: "PROALIMEC - Contexto maestro para diseño y desarrollo web"
project: "PROALIMEC"
status: "planning"
owner: "Mattias Garcés"
updated: "2026-09-05"
---

# PROALIMEC - Contexto maestro para diseño y desarrollo web

> Documento operativo para iniciar y ejecutar el proyecto con OpenCode.
>
> Estado: planificación inicial.
> Fecha de preparación: 2026-09-05.
> Responsable: Mattias Garcés.

---

## 0. Cómo debe usar OpenCode este documento

Lee este archivo completo antes de crear, instalar o modificar código.

Las palabras **DEBE**, **NO DEBE**, **RECOMENDADO** y **OPCIONAL** expresan prioridad:

- **DEBE**: requisito obligatorio del alcance o de calidad.
- **NO DEBE**: límite explícito del proyecto.
- **RECOMENDADO**: decisión técnica ya razonada; cambiarla requiere justificar el beneficio.
- **OPCIONAL**: mejora que solo se implementa si no compromete plazo, rendimiento o alcance.

Reglas de ejecución:

1. No inventar datos, productos, certificaciones, precios, cobertura, clientes, marcas comercializadas ni afirmaciones sanitarias.
2. Usar placeholders claramente identificados cuando falte información de PROALIMEC.
3. No copiar textos, imágenes, ilustraciones, código, layout ni recursos de AGROSUPER.
4. Mantener el proyecto completamente estático: sin backend, base de datos, autenticación, carrito, pagos ni panel administrativo.
5. Desarrollar por slices verticales y completar una experiencia funcional antes de abrir la siguiente.
6. Después de cada slice, ejecutar TypeScript, lint, pruebas relacionadas y build.
7. No agregar dependencias sin una necesidad concreta y documentada.
8. No usar `any`, componentes gigantes, lógica comercial dentro de rutas ni archivos genéricos que mezclen responsabilidades.
9. Conservar la experiencia completa sin animaciones; GSAP es una mejora progresiva, no un requisito para entender o utilizar el sitio.
10. Antes de implementar una afirmación comercial, marcarla como pendiente si no aparece aprobada en los materiales o por el cliente.

---

## 1. Resumen del proyecto

PROALIMEC es una empresa de Ambato, Ecuador, dedicada a la comercialización mayorista de alimentos cárnicos congelados nacionales e importados. De acuerdo con el manual corporativo, posee más de 15 años de experiencia.

El proyecto contratado es una presencia web corporativa con catálogo estático. Su función principal es ayudar a un potencial cliente a:

1. Entender quién es PROALIMEC y por qué puede confiar en la empresa.
2. Explorar categorías y productos disponibles.
3. Abrir el detalle de un producto.
4. Solicitar información o una cotización mediante WhatsApp.

La web no es un e-commerce. No muestra precios ni disponibilidad en tiempo real y no permite comprar.

### Objetivo comercial

Convertir la presencia digital de PROALIMEC en un canal comercial claro, confiable, rápido y visualmente memorable que facilite el contacto de compradores mayoristas.

### Objetivo de experiencia

Transmitir tres ideas en pocos segundos:

- conservación y cadena de frío;
- calidad y confianza comercial;
- atención directa y distribución responsable.

### Conversión principal

**Clic en “Solicitar cotización” o “Consultar por WhatsApp”.**

### Conversiones secundarias

- visitar el catálogo;
- abrir el detalle de un producto;
- usar una categoría o búsqueda;
- llamar por teléfono;
- abrir la ubicación;
- copiar o abrir el correo comercial.

### Aclaración sobre “generar tráfico”

El desarrollo puede mejorar descubrimiento, velocidad, indexación y conversión. No puede garantizar por sí solo un volumen de visitas. Campañas publicitarias, producción permanente de contenido, posicionamiento SEO continuo, community management y pauta están fuera del alcance contratado.

---

## 2. Alcance contractual que se debe respetar

### Incluido

- Inicio/Home corporativo.
- Catálogo estático de productos.
- Vista de detalle por producto.
- Página o área de contacto.
- Organización por categorías.
- Búsqueda y filtros sencillos dentro de los datos estáticos.
- Enlace de WhatsApp asociado al producto consultado.
- Diseño responsive para celular, tablet y escritorio.
- Optimización básica de imágenes entregadas por PROALIMEC.
- Transiciones y animaciones sencillas.
- Títulos, descripciones, HTML semántico, sitemap y configuración técnica SEO básica.
- Pruebas de navegación, catálogo y enlaces de contacto.
- Dominio, hosting, DNS y HTTPS durante el primer año, según disponibilidad y aprobación.
- Hasta dos rondas consolidadas de ajustes sobre la propuesta visual aprobada.
- Una ronda de correcciones funcionales antes del lanzamiento.
- Garantía de 30 días calendario para errores reproducibles del alcance entregado.

### No incluido

- Backend o API.
- Base de datos.
- Login, roles o panel administrativo.
- Inventario o disponibilidad en tiempo real.
- Carrito, checkout, cobros, facturación o tienda en línea.
- Integraciones con ERP, CRM, logística u otros sistemas.
- Aplicación móvil.
- Formulario avanzado que almacene o envíe información mediante un servicio propio.
- Producción profesional de fotografía o video.
- Retoque fotográfico avanzado.
- Redacción extensa o creación de una nueva identidad de marca.
- Publicidad, pauta, campañas SEO continuas o publicaciones permanentes.
- Mantenimiento evolutivo después de la garantía.
- Animaciones cinematográficas, WebGL, escenas 3D o interacciones experimentales de alta complejidad.

### Alerta contractual: 20 o 30 productos

La propuesta aceptada contiene una inconsistencia que se debe confirmar por escrito antes de cerrar la carga:

- varias secciones indican una carga inicial de **hasta 30 productos**;
- el cronograma y el desglose económico indican **hasta 20 productos**.

Decisión provisional de arquitectura: el sistema soportará al menos 30 registros estáticos sin cambios técnicos. Decisión provisional de alcance: no prometer una cantidad final hasta que PROALIMEC y Mattias confirmen si el límite contratado es 20 o 30.

### Alcance visual

“Llamativa” significa una composición fuerte, fotografía protagonista, jerarquía tipográfica, movimiento controlado y CTAs claros. No significa llenar la interfaz de efectos. Las animaciones deben seguir siendo compatibles con la promesa contractual de “animaciones sencillas” y con un sitio rápido en móviles.

---

## 3. Material revisado

Se analizaron completamente:

1. `Propuesta_Comercial_PROALIMEC (2).docx` - 11 páginas.
2. `Manual Identidad Visual_PROALIMEC.pdf` - 10 páginas.
3. `Manual_Identidad_Corporativa_PROALIMEC.pdf` - 19 páginas.
4. Cuatro capturas suministradas de la web de AGROSUPER: Home, franja de marca, catálogo y detalle de producto.
5. Contenido público oficial indexado de `https://www.agrosuper.com/global/es/`.

### Limitación de la revisión en vivo de AGROSUPER

Se intentó revisar el sitio en vivo el 2026-09-05, pero su verificación de seguridad de Cloudflare mantuvo al navegador remoto en un control de “verificar que es un ser humano”. Por lo tanto:

- la estructura, composición y estados visuales se observaron en las capturas entregadas;
- la narrativa y jerarquía se contrastaron con el contenido oficial indexado;
- el comportamiento exacto, duración y easing de las animaciones de AGROSUPER no se afirma como observación directa;
- el plan de movimiento de PROALIMEC es una propuesta original y no una reproducción técnica del referente.

---

## 4. Lectura de marca y decisiones de identidad

### Valores comunicados por los manuales

- Calidad.
- Confianza.
- Experiencia.
- Servicio.
- Evolución.
- Protección.
- Frescura.
- Inocuidad.
- Cadena de frío.

No presentar “inocuidad”, “estándares de seguridad”, “calidad premium”, “trazabilidad” o afirmaciones similares como certificaciones verificadas. Pueden usarse como lenguaje institucional únicamente después de validar el texto final con PROALIMEC.

### Componentes conceptuales del logo

- escudo: protección, integridad y fortaleza;
- siluetas cárnicas: líneas de producto;
- gota: pureza, frescura e inocuidad;
- contraste cálido/frío: pasión y tecnología, tradición y confianza.

### Reglas obligatorias del logo

- Usar archivos oficiales; no reconstruir el identificador con texto o SVG trazado manualmente.
- No deformar, rotar, recolorear, separar o reordenar sus elementos.
- Respetar el área de protección indicada en los manuales.
- Preferir la versión completa cuando exista espacio.
- No usar fondos fotográficos que reduzcan su contraste; agregar una superficie sólida si hace falta.
- Usar **140 px como ancho mínimo digital de la versión completa**, por ser la regla más estricta de los dos manuales.
- Solicitar el logo maestro en SVG y sus variantes a color, monocromática y negativa antes de producción.

### Conflictos entre los dos manuales

| Tema | Manual de Identidad Visual | Manual de Identidad Corporativa | Decisión provisional para web |
|---|---|---|---|
| Naranja | `#D85A1A` | `#D94B0B` | `#D85A1A` como token digital principal |
| Azul principal | `#0B1F53` | `#17345B` | `#0B1F53` como navy digital |
| Azul claro | `#D9F1FB` | `#CDEAF5` | `#D9F1FB` para fondos hielo |
| Azul de apoyo | `#63C8F2` | `#4D9AC1` | `#63C8F2` como acento frío; `#4D9AC1` solo si se aprueba |
| Tipografía de títulos | Montserrat | Aptos Display | Montserrat |
| Tipografía de cuerpo | Inter | Aptos | Inter |
| Logo mínimo digital | 120 px | 140 px | 140 px |

Razón: el Manual de Identidad Visual está expresamente planteado para aplicaciones visuales/digitales de 2026 y ofrece un sistema más completo para web. El manual corporativo será la fuente para historia, valores, aplicaciones y tono institucional. Si el propietario de la identidad declara otro archivo como fuente oficial, sus tokens reemplazarán esta decisión antes de aprobar el diseño.

No empaquetar Aptos como fuente web salvo que PROALIMEC entregue los archivos y confirme sus condiciones de uso.

### Tokens de diseño iniciales

```css
:root {
  --color-brand-orange: #d85a1a;
  --color-brand-ice: #63c8f2;
  --color-brand-navy: #0b1f53;
  --color-brand-frost: #d9f1fb;
  --color-brand-white: #ffffff;

  --color-ink: #071633;
  --color-muted: #526079;
  --color-surface: #ffffff;
  --color-surface-cold: #f3fbfe;
  --color-border: #c6e2ee;

  --font-display: "Montserrat", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --shadow-soft: 0 1rem 3rem rgb(11 31 83 / 0.12);
}
```

Estos tokens no alteran los colores del logo. `--color-ink`, `--color-muted`, bordes y sombras son colores funcionales de interfaz y deben revisarse durante el diseño.

### Nota de contraste

El terracota `#D85A1A` no alcanza contraste AA para texto normal blanco o sobre blanco. Por ello:

- el CTA primario debe usar navy con texto blanco;
- el naranja se usa como acento, icono, borde, indicador, superficie decorativa o texto grande;
- no usar texto blanco pequeño sobre un botón naranja;
- cualquier variante oscura adicional del naranja requiere aprobación de marca.

### Tipografía

- Montserrat Bold/Semibold: H1, H2, títulos de producto, cifras y frases de impacto.
- Inter Regular/Medium/Semibold: navegación, párrafos, etiquetas, botones y datos.
- Fuentes autohospedadas en WOFF2 para evitar dependencias externas.
- Escala fluida con `clamp()`; no multiplicar tamaños específicos por breakpoint sin necesidad.

### Slogan y claims del manual visual

Slogan principal propuesto por el manual:

> Frescura protegida, calidad garantizada.

Claims de respaldo:

- Cadena de frío que conserva la calidad.
- Respaldo y confianza en cada corte.
- Calidad cárnica con estándares de seguridad.

CTAs sugeridos:

- Conoce nuestro portafolio.
- Solicita una cotización.
- Distribución confiable.

El cliente debe aprobar cuáles se publican. No usar todos juntos; elegir un mensaje principal y dos o tres apoyos.

### Dirección fotográfica

- Producto: limpio, luminoso, alto contraste, textura visible y sensación de frescura.
- Procesos: almacenamiento, cadena de frío, transporte, orden e higiene.
- Personas y servicio: equipo real, atención profesional y entornos limpios.
- No descargar ni reutilizar fotografías de AGROSUPER.
- No publicar imágenes sin autorización de PROALIMEC.
- Preferir fotos reales de la empresa sobre imágenes genéricas de stock.

---

## 5. Análisis del referente AGROSUPER

### Lo que funciona y se puede reinterpretar

- Navegación corporativa amplia y muy visible.
- Tipografía de gran escala que domina la composición.
- Fotografía de producto como protagonista.
- Alternancia entre azul, naranja y superficies claras.
- Franjas horizontales repetitivas que refuerzan una idea de marca.
- Catálogo con filtros visibles y tarjetas consistentes.
- Página de producto con galería, presentación y CTA comercial directo.
- Mensajes orientados a negocio, calidad, proceso y confianza.
- Narrativa por secciones, no una pared de información.

### Lo que no se debe copiar

- textura de mármol;
- frase “We make it premium”;
- tipografía desgastada;
- estructura exacta del hero;
- disposición exacta de los menús;
- tarjetas, filtros o ficha de producto pixel a pixel;
- fotografías, iconos, ilustraciones o textos;
- secuencias exactas de movimiento.

### Traducción original para PROALIMEC

AGROSUPER usa una estética cálida/premium. PROALIMEC debe apropiarse del territorio de **frío confiable**:

- fondos hielo suaves, no mármol;
- bruma o textura helada muy sutil;
- escudo, gota y copo como sistema gráfico propio;
- navy para estructura y confianza;
- naranja para energía, énfasis y señalización;
- fotografía real de producto y operación;
- mensajes B2B directos y cercanos.

---

## 6. Concepto creativo recomendado

### Nombre interno

**Frescura protegida**

### Idea

Cada sección debe sentirse protegida por una estructura firme y limpia: superficies frías, bordes inspirados en el escudo, gotas y líneas que recorren el sitio como una cadena de frío. El naranja aparece en momentos de acción, no como ruido permanente.

### Personalidad

- limpia;
- confiable;
- técnica sin ser distante;
- mayorista sin verse anticuada;
- dinámica sin perder seriedad;
- local y cercana;
- preparada para crecer.

### Recursos visuales propios

- recortes de producto sobre placas blancas o hielo;
- degradados frío-claro: navy -> azul hielo -> blanco;
- marco de tarjeta derivado de la geometría del escudo;
- línea/gota animada que conecta beneficios;
- patrón muy sutil de copos, gotas o siluetas autorizado por la marca;
- franja móvil con el slogan o categorías, no con texto de AGROSUPER;
- números grandes para trayectoria, categorías o cobertura, solo con datos aprobados.

### Hero recomendado

**Contenido:**

- eyebrow: `PROALIMEC · Alimentos cárnicos congelados`;
- H1: `Frescura protegida, calidad garantizada.`;
- texto corto orientado a compradores mayoristas;
- CTA primario: `Solicitar cotización`;
- CTA secundario: `Ver productos`;
- fotografía real protagonista;
- apoyo de confianza: “Más de 15 años de experiencia”, únicamente tras aprobación final.

**Movimiento:**

- entrada del H1 mediante máscara vertical;
- aparición escalonada de texto y CTAs;
- leve desplazamiento de producto y gota decorativa;
- nada de intro obligatoria, loader largo o bloqueo de navegación.

---

## 7. Decisión tecnológica

### Stack elegido

**React + TypeScript + React Router en Framework Mode + Vite + prerender estático + Tailwind CSS + GSAP.**

Configuración de producción:

```ts
// react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    // Debe devolver las páginas principales y todos los slugs de productos.
    return ["/", "/productos", "/contacto"];
  },
} satisfies Config;
```

El código real de `prerender()` debe agregar `products.map(product => `/productos/${product.slug}`)` y cualquier ruta legal aprobada.

### Por qué esta opción

- conserva un flujo de trabajo completamente React;
- usa Vite, conocido por Mattias;
- permite rutas estáticas generadas durante el build;
- entrega HTML inicial para páginas y productos;
- mejora SEO, carga y vista previa de enlaces frente a una SPA puramente cliente;
- no necesita backend ni servidor Node en producción;
- admite loaders y metadata por ruta;
- funciona bien con GSAP y componentes interactivos;
- deja una ruta de crecimiento sin introducir complejidad innecesaria hoy.

### React Router vs. Astro

| Criterio | React Router Framework Mode | Astro + islas React |
|---|---|---|
| Preferencia y experiencia del desarrollador | Excelente | Buena |
| React como arquitectura central | Sí | Solo en islas/componentes elegidos |
| Prerender estático | Sí | Sí |
| Catálogo interactivo y navegación cliente | Directo | Requiere elegir hidratación por isla |
| GSAP en múltiples secciones | Directo | Posible, con más fronteras de hidratación |
| Complejidad para este proyecto | Baja-media | Baja-media |
| Decisión | **Elegido** | Alternativa válida, no necesaria |

Astro sería una buena elección si casi todo el sitio fuera contenido sin interacción. Aquí se prioriza React porque el catálogo, filtros, galería, navegación, estados responsive y animaciones forman una parte importante de la experiencia, y el prerender de React Router cubre la necesidad de HTML estático.

### Dependencias recomendadas

Producción:

- `react` y `react-dom`;
- `react-router` / paquetes generados por el template oficial;
- `typescript`;
- `tailwindcss` y `@tailwindcss/vite`;
- `gsap`;
- `@gsap/react`;
- `zod` para validar catálogo y configuración en build;
- `clsx` y `tailwind-merge` para variantes pequeñas;
- `lucide-react` solo para iconos genéricos que no pertenezcan a la identidad.

Desarrollo y QA:

- ESLint;
- Prettier;
- Vitest;
- React Testing Library;
- Playwright;
- `@axe-core/playwright` como auditoría accesible automatizada complementaria.

### Lo que no se necesita

- Axios: no existe API.
- TanStack Query: no existe estado de servidor.
- Zustand/Redux: el estado es local o vive en la URL.
- shadcn/ui completo: el sitio necesita una identidad propia, no un set visual genérico.
- Swiper: crear una galería sencilla accesible o agregar una librería solo si la necesidad real lo justifica.
- Framer Motion: GSAP ya cubre el sistema de movimiento.
- Lenis/ScrollSmoother: evitar alterar el scroll nativo en la primera versión.
- Three.js/WebGL: fuera de alcance y presupuesto de rendimiento.

### Inicialización

```bash
npx create-react-router@latest proalimec-web
cd proalimec-web
npm install
npm install gsap @gsap/react zod clsx tailwind-merge lucide-react
npm install tailwindcss @tailwindcss/vite
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test @axe-core/playwright prettier
npx playwright install
npm run dev
```

Usar las versiones estables que instale el template al iniciar y conservar el lockfile. No actualizar dependencias en mitad del proyecto sin una razón funcional o de seguridad.

---

## 8. Arquitectura de información y rutas

| Ruta | Propósito | Render |
|---|---|---|
| `/` | Marca, propuesta de valor, categorías, confianza, destacados y CTA | prerender |
| `/productos` | Catálogo, búsqueda, filtros y acceso a detalles | prerender |
| `/productos/:slug` | Ficha individual compartible e indexable | prerender por cada slug |
| `/contacto` | WhatsApp, teléfono, correo, ubicación y horarios | prerender |
| `*` | Página 404 con retorno al catálogo | estática |

No crear rutas “Nosotros”, “Procesos”, “Distribución” o “Sostenibilidad” por imitación del referente. Esa información se integra como secciones de Home mientras el cliente no apruebe ampliar la arquitectura.

### Navegación principal

- Inicio.
- Productos.
- Contáctanos.
- CTA persistente: Solicitar cotización.

### Flujo principal

```text
Home -> categoría o producto destacado -> catálogo filtrado -> detalle -> WhatsApp
```

### Flujo directo

```text
Google/red social/enlace compartido -> detalle de producto -> WhatsApp
```

---

## 9. Estructura de páginas

### Home

Orden recomendado:

1. Skip link y header.
2. Hero de marca con dos CTAs.
3. Franja dinámica con slogan/categorías.
4. Categorías destacadas.
5. Sección “Por qué PROALIMEC” basada en valores aprobados.
6. Historia corta o cifra de trayectoria.
7. Cadena de frío, procesos o distribución, solo con información y fotos reales.
8. Productos destacados.
9. Bloque de atención mayorista y cotización.
10. Datos de contacto y footer.

### Catálogo

- H1 y descripción corta.
- Contador de resultados.
- Campo de búsqueda por nombre y descripción.
- Chips o botones de categorías.
- Botón de limpiar filtros.
- Grid responsive.
- Estado sin resultados con recuperación clara.
- Filtros reflejados en query params, por ejemplo `?categoria=res&q=lomo`.
- Hasta 30 elementos: no implementar paginación en la versión inicial.

### Tarjeta de producto

- imagen con proporción consistente;
- categoría;
- nombre;
- presentación corta, si existe;
- enlace “Ver detalle”;
- acción secundaria “Consultar”;
- hover sutil en desktop y estado táctil equivalente;
- toda la tarjeta no debe convertirse en un conjunto confuso de enlaces anidados.

### Detalle de producto

- breadcrumbs;
- H1;
- galería accesible;
- categoría;
- descripción;
- presentaciones disponibles;
- información adicional aprobada;
- CTA a WhatsApp con producto identificado;
- productos relacionados por categoría;
- metadata y JSON-LD propios.

No mostrar precio, stock, SKU, certificaciones o ficha técnica si PROALIMEC no los proporciona y aprueba.

### Contacto

- WhatsApp;
- teléfono;
- correo;
- dirección;
- horarios;
- enlace a ubicación;
- CTA de cotización;
- mapa embebido solo si aporta valor, tiene URL aprobada y no perjudica rendimiento/privacidad.

No crear un formulario que parezca enviar información si no existe un servicio real detrás.

---

## 10. Modelo de datos estático

Los datos son código/content validado en build, no estado remoto.

### Categoría

```ts
export const ProductCategorySchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  icon: z.string().min(1),
  order: z.number().int().nonnegative(),
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;
```

### Imagen

```ts
export const ProductImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  kind: z.enum(["cover", "gallery", "packaging"]),
});
```

### Presentación

```ts
export const ProductPresentationSchema = z.object({
  label: z.string().min(1),
  netWeight: z.string().optional(),
  packaging: z.string().optional(),
});
```

### Producto

```ts
export const ProductSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  categoryId: z.string().min(1),
  shortDescription: z.string().min(1),
  description: z.string().min(1),
  presentations: z.array(ProductPresentationSchema).default([]),
  images: z.array(ProductImageSchema).min(1),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative(),
  whatsappMessage: z.string().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }).optional(),
});

export type Product = z.infer<typeof ProductSchema>;
```

### Configuración empresarial

```ts
export const SiteConfigSchema = z.object({
  name: z.literal("PROALIMEC"),
  legalName: z.string().optional(),
  siteUrl: z.string().url(),
  whatsappNumber: z.string().regex(/^\d+$/),
  phoneDisplay: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
  mapsUrl: z.string().url().optional(),
  businessHours: z.array(z.string()).default([]),
});
```

### Reglas del catálogo

- IDs y slugs únicos.
- Categoría existente para cada producto.
- Al menos una imagen por producto.
- Alt text descriptivo, sin repetir keywords artificialmente.
- Orden explícito; no depender del orden accidental del array.
- Productos destacados limitados a una cantidad razonable en Home.
- Validar todo el dataset durante test y build.
- Si un producto se retira, no borrar su slug sin definir qué ocurrirá con el enlace anterior.

---

## 11. Organización de carpetas con vertical slice

```text
proalimec-web/
├── app/
│   ├── root.tsx
│   ├── routes.ts
│   ├── app.css
│   │
│   ├── routes/
│   │   ├── home.tsx
│   │   ├── products.tsx
│   │   ├── product-detail.tsx
│   │   ├── contact.tsx
│   │   └── not-found.tsx
│   │
│   ├── features/
│   │   ├── home/
│   │   │   ├── ui/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── BrandMarquee.tsx
│   │   │   │   ├── CategoryShowcase.tsx
│   │   │   │   ├── TrustSection.tsx
│   │   │   │   └── FeaturedProducts.tsx
│   │   │   ├── content/
│   │   │   │   └── home-content.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── catalog/
│   │   │   ├── domain/
│   │   │   │   ├── product.schema.ts
│   │   │   │   ├── category.schema.ts
│   │   │   │   └── catalog.types.ts
│   │   │   ├── application/
│   │   │   │   ├── filter-products.ts
│   │   │   │   ├── get-product-by-slug.ts
│   │   │   │   └── get-related-products.ts
│   │   │   ├── data/
│   │   │   │   ├── categories.ts
│   │   │   │   └── products.ts
│   │   │   ├── ui/
│   │   │   │   ├── CatalogFilters.tsx
│   │   │   │   ├── ProductGrid.tsx
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductGallery.tsx
│   │   │   │   ├── ProductDetails.tsx
│   │   │   │   └── EmptyCatalog.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── application/
│   │   │   │   └── build-whatsapp-url.ts
│   │   │   ├── ui/
│   │   │   │   ├── ContactCard.tsx
│   │   │   │   └── WhatsAppCta.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── navigation/
│   │   │   ├── ui/
│   │   │   │   ├── SiteHeader.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   └── SiteFooter.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── motion/
│   │       ├── hooks/
│   │       │   ├── use-reveal.ts
│   │       │   └── use-reduced-motion.ts
│   │       ├── presets/
│   │       │   ├── reveal.ts
│   │       │   └── stagger.ts
│   │       └── index.ts
│   │
│   ├── shared/
│   │   ├── config/
│   │   │   ├── site-config.ts
│   │   │   └── env.ts
│   │   ├── lib/
│   │   │   ├── cn.ts
│   │   │   ├── normalize-search.ts
│   │   │   └── seo.ts
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── OptimizedImage.tsx
│   │   │   └── VisuallyHidden.tsx
│   │   └── styles/
│   │       ├── tokens.css
│   │       ├── fonts.css
│   │       └── utilities.css
│   │
│   └── test/
│       └── setup.ts
│
├── public/
│   ├── assets/
│   │   ├── brand/
│   │   ├── home/
│   │   ├── products/
│   │   │   └── {product-slug}/
│   │   └── icons/
│   ├── fonts/
│   ├── favicon.svg
│   ├── robots.txt
│   └── social-card.jpg
│
├── tests/
│   ├── e2e/
│   └── accessibility/
├── scripts/
│   ├── validate-content.ts
│   ├── generate-sitemap.ts
│   └── optimize-images.mjs
├── .env.example
├── react-router.config.ts
├── vite.config.ts
├── playwright.config.ts
└── README.md
```

### Regla de dependencia

```text
routes -> features -> shared
```

- `shared` no importa desde `features`.
- Un feature no importa internals de otro feature; usa su API pública.
- Las rutas componen slices y metadata, pero no contienen algoritmos de filtro, WhatsApp o selección de relacionados.
- El dominio del catálogo no conoce React, GSAP ni el navegador.

---

## 12. Aplicación práctica de SOLID y Clean Code

### Single Responsibility

- `ProductCard` presenta un producto; no filtra ni crea URLs de WhatsApp.
- `CatalogFilters` emite criterios; no conoce el dataset completo.
- `buildWhatsAppUrl` transforma datos en una URL; no renderiza botones.
- la ruta obtiene datos y compone; no implementa detalles visuales internos.

### Open/Closed

- categorías y productos son data-driven;
- agregar una categoría no debe exigir editar varios `switch` visuales;
- las variantes de `Button` se amplían mediante un contrato pequeño, no copiando estilos.

### Liskov Substitution

- los componentes que acepten un enlace o botón deben conservar semántica, foco y estados;
- no sustituir un `<button>` por un `<div onClick>`.

### Interface Segregation

- pasar a cada componente solo los campos que utiliza;
- preferir props pequeñas como `ProductCardViewModel` frente al objeto empresarial completo cuando corresponda.

### Dependency Inversion

- la UI de contacto recibe una función/URL ya construida;
- analytics usa un puerto pequeño `track(event)` con implementación no-op por defecto;
- la lógica de catálogo depende de tipos y funciones puras, no del router.

### Reglas de código

- TypeScript `strict: true`.
- Funciones puras para filtros, slugs, relacionados y WhatsApp.
- Guard clauses sobre anidación profunda.
- Nombres en inglés consistentes en código; contenido visible en español.
- Evitar boolean props ambiguas como `blue`, `big`, `animated`.
- No guardar componentes dentro de un archivo de 400 líneas.
- No crear abstracciones antes de que existan dos usos reales o una responsabilidad clara.
- Comentarios explican decisiones, no repiten el código.
- El contenido comercial debe permanecer separado de JSX siempre que sea razonable.
- Evitar barrel files globales; cada feature puede exponer solo su API pública en `index.ts`.

### Estado

- filtros y búsqueda del catálogo: URL search params;
- menú móvil, galería y disclosure: estado local;
- configuración de empresa: módulo estático validado;
- no crear store global.

---

## 13. Sistema de movimiento con GSAP

### Principios

- La animación guía atención y jerarquía.
- Nunca retrasa el acceso a navegación o contacto.
- Nunca oculta contenido si JavaScript falla.
- Usar principalmente `transform` y `opacity`.
- Evitar animar width, height, top o left cuando pueda causar layout/repaint.
- No aplicar `will-change` globalmente.
- Respetar `prefers-reduced-motion`.
- Limitar efectos complejos en móvil.

### Herramientas

- `@gsap/react` con `useGSAP()` para lifecycle y cleanup.
- `gsap.context()` para limitar selectores al componente.
- `ScrollTrigger` para reveals, progreso y parallax suave.
- CSS transitions para hover, focus y microinteracciones simples.

### Presets iniciales

```ts
export const motion = {
  duration: {
    fast: 0.18,
    base: 0.42,
    slow: 0.72,
  },
  ease: {
    enter: "power3.out",
    exit: "power2.in",
  },
  distance: {
    sm: 12,
    md: 28,
    lg: 48,
  },
} as const;
```

### Secuencias recomendadas

#### Header

- aparece sin animación larga;
- fondo sólido o blur solo después de scroll;
- menú móvil con panel corto y foco controlado;
- CTA siempre usable.

#### Hero

- reveal del H1 por líneas o máscara;
- stagger corto de párrafo y CTAs;
- producto con desplazamiento de 20-30 px y escala mínima;
- no usar animación perpetua en el producto principal.

#### Franja de marca

- marquee lento con duplicación accesible marcada como decorativa;
- pausar o convertir en bloque estático cuando `prefers-reduced-motion: reduce`;
- no hacer que el texto esencial exista solo dentro del marquee.

#### Categorías y tarjetas

- entrada escalonada al viewport;
- imagen escala máximo 1.03 en hover;
- borde/acento cambia sin mover el layout;
- filtro con transición de opacidad/posición corta; evitar coreografías largas.

#### Cadena de frío

- línea o gota progresa con scroll;
- cada hito aparece al acercarse;
- en móvil se convierte en lista vertical normal;
- no usar pinning agresivo en pantallas pequeñas.

#### Detalle de producto

- cambio de imagen con crossfade breve;
- miniaturas accesibles como botones;
- CTA no entra tarde ni depende del scroll.

### Reduced motion

Cuando el usuario prefiera movimiento reducido:

- duración casi inmediata;
- sin parallax, scrub, marquee ni desplazamientos grandes;
- contenido visible desde el primer render;
- conservar solo feedback de foco/estado necesario.

### Cleanup obligatorio

Cada componente animado debe revertir timelines y ScrollTriggers al desmontarse. Esto es especialmente importante bajo React Strict Mode.

---

## 14. WhatsApp y contacto

### Configuración

- Guardar el número sin `+`, espacios ni guiones.
- Mostrar el número en formato humano por separado.
- El número no es secreto; puede vivir en configuración pública.
- No escribirlo directamente en múltiples componentes.

### Mensaje por producto

```text
Hola, vengo desde la página web de PROALIMEC.
Me interesa recibir información y una cotización de: {PRODUCT_NAME}.
Enlace: {PRODUCT_URL}
```

### Mensaje general

```text
Hola, vengo desde la página web de PROALIMEC y deseo información para una compra al por mayor.
```

### Implementación

```ts
export function buildWhatsAppUrl(input: {
  phone: string;
  message: string;
}): string {
  const phone = input.phone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(input.message)}`;
}
```

- abrir en una nueva pestaña;
- usar `rel="noopener noreferrer"`;
- identificar el producto;
- probar caracteres con tilde y enlaces;
- si se habilita analytics, registrar el clic sin bloquear la navegación.

---

## 15. Responsive design

### Enfoque

- Mobile first.
- Diseñar desde 320 px sin scroll horizontal.
- Usar containers fluidos y ancho máximo.
- Usar `clamp()` para títulos y espacios.
- No esconder información crítica en hover.

### Comportamiento recomendado

| Área | Móvil | Tablet | Desktop |
|---|---|---|---|
| Header | logo completo si conserva 140 px, menú panel | navegación compacta | navegación completa + CTA |
| Hero | una columna, imagen debajo | composición mixta | dos columnas/editorial |
| Categorías | carrusel con scroll-snap o grid 1 columna | 2 columnas | 3-4 columnas |
| Catálogo | filtros en disclosure + 1 columna | 2 columnas | sidebar/chips + 3 columnas |
| Detalle | galería arriba | 2 columnas | galería amplia + info sticky moderada |
| CTA WhatsApp | fijo respetando safe area | fijo | fijo o integrado según composición |

Breakpoints orientativos de Tailwind: `sm`, `md`, `lg`, `xl`. No diseñar únicamente para anchos exactos; probar rangos intermedios.

---

## 16. Accesibilidad

Objetivo: WCAG 2.2 nivel AA en las interacciones y contenido implementados.

### Obligatorio

- un solo H1 por página;
- jerarquía H1 -> H2 -> H3 sin saltos arbitrarios;
- skip link;
- navegación operable con teclado;
- foco visible y no oculto por header sticky;
- targets táctiles suficientes;
- contraste AA;
- alt text útil en imágenes de producto;
- imágenes decorativas con `alt=""`;
- labels visibles para búsqueda y filtros;
- estado activo no comunicado solo por color;
- contador de resultados con `aria-live="polite"` cuando cambie;
- menú móvil con foco controlado y cierre por Escape;
- miniaturas de galería como botones con nombre accesible;
- reduced motion;
- no autoplay con sonido;
- enlaces de contacto descriptivos.

La validación automática con axe no reemplaza una revisión manual de teclado, lectura, foco, zoom y movimiento.

---

## 17. SEO técnico y contenido indexable

### Decisión principal

Prerenderizar todas las rutas públicas y todos los slugs de productos en el build. El contenido principal no debe depender de que el crawler ejecute JavaScript.

### Por página

- title único;
- meta description única;
- canonical absoluta;
- Open Graph title, description, image y URL;
- Twitter/X card;
- idioma `es`;
- headings semánticos;
- breadcrumbs visibles en detalles;
- links HTML reales, no navegación basada solo en `onClick`;
- URLs legibles y estables;
- página 404 real.

### Archivos

- `robots.txt`;
- `sitemap.xml` generado desde rutas y productos;
- favicon y app icons derivados de archivos oficiales;
- `social-card.jpg` propio de PROALIMEC;
- manifest solo si aporta valor; no convertir el proyecto en PWA sin necesidad.

### Datos estructurados

- Home: `Organization` y, solo con datos completos/aprobados, tipo local apropiado.
- Catálogo: `ItemList` con enlaces a productos.
- Detalle: `Product` sin inventar `offers`, precio, disponibilidad, rating o review.
- Detalle: `BreadcrumbList`.

Google contempla datos `Product` para páginas donde el producto no se compra directamente. Aun así, el marcado debe representar únicamente información visible y aprobada.

### Contenido local

Usar “Ambato, Ecuador” de manera natural donde aporte contexto. No repetir ubicaciones o keywords de forma artificial. Preparar la web para vincularla posteriormente con Google Business Profile y Search Console, sin considerar esa gestión parte automática del desarrollo.

---

## 18. Rendimiento

### Objetivos

- Lighthouse móvil, build de producción: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95.
- Core Web Vitals como referencia de campo: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 en p75.
- Evitar saltos visuales reservando `width`, `height` o `aspect-ratio` en medios.
- Mantener el JavaScript inicial lo más pequeño posible; objetivo orientativo <= 180 KB gzip, sujeto a medición real.

### Imágenes

- AVIF como primera opción y WebP como fallback cuando el pipeline lo permita.
- `srcset` y `sizes`.
- hero con `fetchpriority="high"` y sin lazy load.
- resto con lazy loading nativo.
- no subir originales de varios megabytes directamente a `public`.
- tarjetas: archivo optimizado idealmente menor a 100 KB cuando la calidad lo permita.
- galería/detalle: variantes dimensionadas; no servir la imagen máxima en miniaturas.
- social card separada de imágenes de UI.

### JavaScript y CSS

- route-based code splitting del framework;
- cargar GSAP únicamente en los slices que lo usan;
- evitar dos librerías para resolver el mismo problema;
- CSS crítico simple y tokens autohospedados;
- no usar videos de fondo automáticos en la primera versión;
- medir antes de optimizar de forma especulativa.

---

## 19. Analytics preparado, no impuesto

Crear un puerto mínimo:

```ts
export type AnalyticsEvent =
  | { name: "catalog_view" }
  | { name: "catalog_filter"; category: string }
  | { name: "product_view"; productId: string }
  | { name: "whatsapp_click"; source: string; productId?: string }
  | { name: "phone_click"; source: string }
  | { name: "maps_click"; source: string };

export interface AnalyticsPort {
  track(event: AnalyticsEvent): void;
}
```

La implementación inicial es no-op. Activar un proveedor solo cuando PROALIMEC apruebe la cuenta, privacidad y configuración correspondiente. No agregar cookies o banners decorativos sin una necesidad real y una política definida.

---

## 20. Seguridad y despliegue

### Seguridad básica

- HTTPS activo.
- Sin secretos dentro del repositorio.
- `.env.example` sin valores reales sensibles.
- Dependencias mínimas y lockfile versionado.
- Validar y codificar mensajes de WhatsApp.
- `noopener noreferrer` en enlaces externos.
- Headers recomendados: `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy`.
- Configurar CSP solo después de probar metadata, JSON-LD, fuentes y scripts; no publicar una política que rompa el sitio.

### Hosting

RECOMENDADO: Vercel como hosting estático por experiencia previa de Mattias, despliegues por Git y gestión sencilla de dominio/HTTPS.

El build estático de React Router debe publicar su salida cliente. Verificar la carpeta exacta generada por la versión instalada; la documentación actual usa `build/client` para los archivos prerenderizados.

### Entornos

- local;
- preview por pull request o rama;
- producción.

### Dominio

- registrar a nombre de PROALIMEC o persona autorizada;
- documentar proveedor, renovación y accesos;
- no comprar hasta validar disponibilidad y titularidad;
- verificar `www` y dominio raíz;
- elegir una versión canonical y redirigir la otra.

---

## 21. Pruebas y QA

### Unitarias

- validación de catálogo;
- slugs únicos;
- búsqueda sin sensibilidad a mayúsculas/tildes;
- filtros combinados;
- producto por slug;
- productos relacionados;
- construcción de WhatsApp URL;
- metadata por producto;
- sitemap contiene todas las rutas.

### Componentes

- tarjeta muestra información correcta;
- filtros son accesibles;
- empty state permite limpiar;
- galería cambia con teclado;
- menú móvil controla foco;
- CTA produce el enlace esperado.

### E2E con Playwright

1. Home -> catálogo.
2. Home -> producto destacado -> detalle.
3. Filtrar por categoría.
4. Buscar producto.
5. Abrir detalle desde resultados.
6. Verificar enlace de WhatsApp con producto y URL.
7. Navegar contacto.
8. 404 vuelve al catálogo.
9. Smoke test en Chromium, WebKit y Firefox.
10. Emulación de móvil y desktop.

### Revisión manual

- 320, 375, 768, 1024, 1440 y 1920 px.
- iOS Safari y Android Chrome reales si están disponibles.
- teclado completo.
- zoom 200 %.
- reduced motion.
- red lenta y CPU limitada en DevTools.
- links tel, mailto, maps y WhatsApp.
- contenido, ortografía, datos y autorizaciones.
- dominio, HTTPS, redirects, sitemap y robots en producción.

### Definition of Done por slice

- requisito funcional completo;
- responsive;
- estados loading/empty/error solo si aplican;
- teclado y foco revisados;
- reduced motion;
- sin errores de consola;
- test relevante;
- TypeScript, lint y build en verde;
- screenshot de avance para revisión del cliente cuando corresponda.

---

## 22. Plan de trabajo de cinco semanas

### Semana 1 - Descubrimiento y contenido

- confirmar público objetivo y cobertura comercial;
- resolver límite de 20/30 productos;
- recibir logo maestro y variantes;
- recibir datos de contacto;
- inventariar fotos y productos;
- definir categorías reales;
- validar claims;
- cerrar sitemap y wireframes.

Entregable: inventario de contenido, sitemap, flujo principal y wireframes.

### Semana 2 - Dirección visual y base técnica

- aprobar concepto “Frescura protegida” o su reemplazo;
- diseñar Home, catálogo, detalle y contacto en responsive;
- definir tokens y motion board;
- inicializar repositorio;
- configurar React Router, Tailwind, fuentes, lint, test y build;
- construir shell, navegación y componentes shared.

Entregable: dirección visual aprobada y estructura base funcional.

### Semana 3 - Home y catálogo

- implementar Home por slices;
- implementar dataset validado;
- implementar catálogo, filtros, búsqueda y query params;
- optimizar primeras imágenes;
- integrar animaciones base y reduced motion.

Entregable: Home y catálogo navegables en preview.

### Semana 4 - Detalle, contacto y carga final

- detalle prerenderizado por slug;
- galería y relacionados;
- WhatsApp general y por producto;
- contacto;
- carga del número aprobado de productos;
- metadata, JSON-LD y sitemap;
- QA responsive intermedio.

Entregable: versión funcional completa en ambiente de prueba.

### Semana 5 - QA y lanzamiento

- Playwright, axe, Lighthouse y revisión manual;
- correcciones funcionales;
- revisión final de contenido;
- dominio, DNS y HTTPS;
- analytics solo si fue aprobado;
- build y publicación;
- entrega de accesos/documentación;
- inicio de garantía de 30 días.

Entregable: producción aprobada.

---

## 23. Inventario que PROALIMEC debe entregar

### Marca

- logo SVG a color;
- logo SVG negativo;
- versión monocromática;
- símbolo independiente, si su uso está autorizado;
- favicon oficial o permiso para derivarlo;
- confirmación de qué manual prevalece cuando exista conflicto.

### Empresa

- nombre legal;
- descripción corta y larga;
- año de inicio o confirmación de “más de 15 años”;
- propuesta de valor;
- procesos que se pueden publicar;
- ciudades/provincias atendidas;
- marcas o líneas comercializadas, con permiso de uso;
- datos y documentos que respalden certificaciones o claims si van a publicarse.

### Contacto

- WhatsApp comercial;
- teléfono;
- correo;
- dirección;
- enlace de Google Maps;
- horarios;
- responsable de aprobación.

### Productos

- nombre;
- categoría;
- descripción corta;
- descripción completa;
- presentaciones/pesos;
- una o más fotos autorizadas;
- orden o prioridad;
- indicación de destacado;
- cualquier ficha técnica publicable.

### Fotografía

- hero horizontal de alta resolución;
- producto recortado o con fondo limpio;
- instalaciones/cámaras de frío;
- transporte;
- equipo o atención comercial;
- autorizaciones de uso.

### Reglas de archivos

- nombres sin `final-final-2`;
- carpeta por producto;
- originales separados de versiones web;
- no usar imágenes enviadas por WhatsApp si existe el original;
- mantener una hoja de inventario con estado: recibido, aprobado, optimizado, publicado.

---

## 24. Criterios de aceptación final

El proyecto se considera listo cuando:

- las rutas contratadas funcionan en móvil y desktop;
- cada producto aprobado aparece en catálogo y tiene detalle;
- búsqueda y filtros devuelven resultados correctos;
- todos los CTAs de WhatsApp usan el número aprobado;
- el mensaje identifica correctamente el producto;
- no existe backend, login, carrito o comportamiento simulado;
- el logo cumple tamaño, color y protección;
- los textos y claims fueron aprobados;
- no hay imágenes de AGROSUPER ni copias de su identidad;
- reduced motion funciona;
- teclado, foco y contraste fueron revisados;
- no existen enlaces rotos ni errores de consola;
- sitemap, robots, canonical y metadata están publicados;
- todos los slugs de producto se prerenderizan;
- Lighthouse y sus métricas de laboratorio se encuentran dentro de los objetivos o existe una justificación documentada; los Core Web Vitals de campo se revisarán cuando exista tráfico suficiente;
- dominio raíz, `www`, HTTPS y canonical funcionan;
- credenciales operativas acordadas se entregaron;
- se registró la fecha de inicio de la garantía de 30 días.

---

## 25. Backlog futuro fuera del alcance actual

- panel administrativo;
- base de datos/CMS;
- inventario;
- precios y listas por cliente;
- e-commerce;
- cotización formal con formulario y CRM;
- fichas técnicas descargables;
- multiidioma;
- blog/recetas/contenido SEO;
- integración con Google Merchant Center si el modelo comercial aplica;
- campañas, pauta y medición avanzada;
- animaciones WebGL/3D;
- portal B2B.

Nada de esta lista se debe implementar o presentar como incluido sin nueva cotización y aprobación escrita.

---

## 26. Primera instrucción recomendada para OpenCode

Usar este prompt después de colocar el archivo en la raíz del repositorio:

```text
Lee PROALIMEC_CONTEXT.md completo y trátalo como fuente principal del proyecto.

Por ahora ejecuta únicamente la Fase 0:
1. Resume las decisiones no negociables.
2. Señala datos o assets faltantes sin inventarlos.
3. Propón el árbol inicial exacto de archivos.
4. Inicializa React Router Framework Mode con TypeScript.
5. Configura ssr:false y el mecanismo de prerender.
6. Configura Tailwind, tokens, fuentes con fallbacks, ESLint, Prettier y Vitest.
7. Crea site-config con placeholders tipados y un catálogo demo claramente marcado como temporal.
8. Implementa únicamente el app shell, rutas vacías accesibles y una página 404.
9. Agrega pruebas mínimas de configuración y ejecuta lint, test y build.

No diseñes todavía las secciones finales y no uses imágenes de AGROSUPER.
Al terminar, reporta archivos creados, decisiones, comandos ejecutados, resultados y bloqueos.
```

Después de revisar esa base, continuar slice por slice en este orden:

1. navegación;
2. Home/hero;
3. catálogo y filtros;
4. detalle;
5. WhatsApp/contacto;
6. motion;
7. SEO/performance;
8. QA y despliegue.

---

## 27. Fuentes técnicas y de referencia

- PROALIMEC: propuesta comercial y dos manuales adjuntos.
- AGROSUPER, referencia oficial: https://www.agrosuper.com/global/es/
- React Router, instalación: https://reactrouter.com/start/framework/installation
- React Router, prerender: https://reactrouter.com/how-to/pre-rendering
- React Router, estrategias de render: https://reactrouter.com/start/framework/rendering
- Tailwind con React Router: https://tailwindcss.com/docs/installation/framework-guides/react-router
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP context/useGSAP: https://gsap.com/docs/v3/GSAP/gsap.context()/
- Google, fundamentos de SEO para JavaScript: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=es-419
- Google, datos estructurados de producto: https://developers.google.com/search/docs/appearance/structured-data/product?hl=es
- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- web.dev, Core Web Vitals: https://web.dev/articles/vitals
- Playwright: https://playwright.dev/docs/intro
- Vitest: https://vitest.dev/guide/

---

## 28. Decisión final resumida

Construir una web estática prerenderizada con React Router Framework Mode, TypeScript, Tailwind y GSAP; organizada por vertical slices; alimentada por productos validados con Zod; enfocada en catálogo, confianza y contacto por WhatsApp; visualmente basada en el territorio propio de frío, protección y distribución de PROALIMEC; accesible, rápida y sin copiar AGROSUPER.
