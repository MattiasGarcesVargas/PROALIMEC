# Contacto

## Propósito

La página reúne los canales comerciales, horarios y ubicación aprobados de PROALIMEC. Mientras esos datos no estén confirmados, muestra estados vacíos explícitos y nunca enlaces o valores provisionales.

## Componentes

- `ContactHero`: presenta el objetivo de la página, un CTA interno seguro y un espacio reservado para fotografía autorizada.
- `ContactMethods`: organiza los canales confirmados o informa que siguen pendientes.
- `ContactCard`: muestra etiqueta, valor y acción accesible de un canal validado.
- `BusinessHours`: presenta los horarios como una lista descriptiva o su estado vacío.
- `LocationSection`: muestra dirección, fotografía y enlace aprobado; no embebe un mapa por defecto.
- `WholesaleAttentionSection`: cierra la página con navegación al catálogo, sin simular una consulta.

## Contenido y estados

- La fuente es `contact.mock.json` y siempre se valida con `ContactSchema`.
- `methods` y `businessHours` pueden estar vacíos; `location` y las fotografías pueden ser `null`.
- Los enlaces de teléfono, correo y WhatsApp se aceptan únicamente con el esquema correspondiente.
- No se publican placeholders, datos de contacto inventados, formularios sin backend ni mapas no aprobados.

## Responsive y accesibilidad

- La composición pasa de una columna a dos columnas desde desktop.
- El orden del DOM mantiene título, contenido y medio.
- Existe un único `h1`; las secciones usan `h2` y las tarjetas `h3`.
- Los iconos son decorativos, los enlaces tienen texto visible y los targets interactivos miden al menos 44 px.
- Las zonas sin fotografía se ocultan a tecnologías asistivas.
- El movimiento es progresivo, respeta `prefers-reduced-motion` y no oculta contenido esencial.
