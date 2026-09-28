---
version: 1
slug: "src-sections-contact-contactpage-tsx"
primary_target: "src/sections/contact/ContactPage.tsx"
related_targets: ["src/sections/contact"]
---

# Contacto (/contacto)

Scope: página completa de contacto dentro del mundo visual ya establecido del sitio. Mode: persuade.

Audiencia: restaurantes, asaderos y distribuidores que quieren cotizar cortes al por mayor. Acción: cotizar por WhatsApp con mensaje prellenado. Secundarias: llamar, correo, cómo llegar, horarios. Prueba: foto de producto real y hechos aprobados (Ambato, más de 15 años, nacionales e importados). Restricción: datos de contacto pendientes; nunca inventarlos ni simular formularios.

Decisión: el usuario no expresó preferencia en la ronda de estructura; se construye la estructura asignada por la tirada (split editorial), elevada con la vista previa del mensaje.

## Direction contract

THESIS: Una sola decisión por pantalla: el corte ofrecido a sangre y "Cotiza tu pedido" con WhatsApp al lado. Rechaza la rejilla de tarjetas de canales vacías con etiquetas sobre cada título.

OWN-WORLD: El del sitio: blanco con columna tipográfica navy, fotografía de producto sobre fondo oscuro, negro en las escenas, naranja solo para la acción principal y los datos clave, hielo para lo frío/estado. Montserrat 800 en titulares, Inter en cuerpo. Bordes rectos, filetes de 1 px, sin tarjetas, sin eyebrows.

STORY: El comprador entiende en un vistazo que cotizar es escribir por WhatsApp, ve el mensaje exacto que se enviará y qué datos incluir, encuentra los canales secundarios en una franja de filetes y cierra en el catálogo si aún no eligió cortes.

FIRST VIEWPORT: Rejilla 12 columnas a altura casi completa. Columnas 1-6 blancas: H1 "Cotiza tu pedido." a escala display, párrafo de 2 líneas, botón WhatsApp (o catálogo mientras el número esté pendiente) y tres hechos aprobados separados por filetes verticales. Columnas 7-12: foto costillar.jpg a sangre hasta el borde derecho, arriba y abajo.

FORM: Split editorial, posición 6 de 7 en la lista ordenada. Seed f4a231a7. Elevación: vista previa del mensaje de WhatsApp como pieza de prueba.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

La vista previa del mensaje: una pieza con el texto exacto que se abrirá en WhatsApp, cuyas líneas se completan con los datos que el comprador marca en la lista "qué incluir".

## Unresolved

Número de WhatsApp, teléfono, correo, dirección, horarios, Facebook y enlace de Google Maps: pendientes en `src/shared/config/contact.ts`.
