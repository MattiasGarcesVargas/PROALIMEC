# PROALIMEC — Plan de rediseño visual "Frescura Protegida 2.0"
> Mapeo de tareas a skills instaladas · Basado en PROALIMEC_CONTEXT.md y PROALIMEC_DESIGN_SYSTEM.md

---

## 0. Antes de empezar — el límite que no debes cruzar sin renegociar

Tu contexto ya define el techo permitido:

| Permitido y recomendado | Prohibido sin nueva cotización |
|---|---|
| GSAP (scroll reveals, masks, stagger, parallax 2D) | WebGL / Three.js |
| Transiciones de corte/wipe entre secciones | Escenas 3D |
| Cursor de marca, microinteracciones, hover states | Interacciones experimentales de alta complejidad |
| Storytelling editorial por bloques | Animación que bloquee la lectura o el teclado |

**"Arte" en este proyecto = composición + tipografía + ritmo + movimiento con propósito.** No = más efectos por metro cuadrado. Con eso en mente, cada fase abajo te dice exactamente qué skill usar y para qué.

---

## 1. Paleta de color — a partir del logo

Tu logo ya define una paleta con lógica propia (calor/carne vs. frío/cadena de frío), y tu Design System ya la tokenizó bien:

```
brand-navy   #0B1F53   confianza, estructura, CTA primario
brand-orange #D85A1A   acento, acción (nunca texto blanco pequeño encima)
brand-ice    #63C8F2   frío, detalle decorativo
brand-frost  #D9F1FB   fondos suaves
brand-white  #FFFFFF   respiración
```

**Lo que le falta para sentirse "arte" y no "landing corporativa":**
- Un **navy más profundo** para secciones dark hero (`#071633`, que ya tienes como `--color-ink`) usado como fondo real, no solo texto.
- Un **degradado firma**: navy → ice → frost, usado en 1-2 momentos clave (hero, cierre), no repetido en cada tarjeta.
- Un **naranja ember** (versión ~15% más oscura, ej. `#B8460F`) solo para estados hover/pressed, para que el naranja base se sienta más precioso al no repetirse igual en todos lados.

Tarea: **`theme-factory`** → generar el archivo de tokens ampliado (color, tipografía fluida con `clamp()`, radios, sombras) a partir del logo y los tokens existentes.
Tarea: **`brand`** → documentar reglas de uso del logo (protección, tamaño mínimo 140px, versión sobre fondo oscuro/claro) para que no se viole en el rediseño.

---

## 2. Dirección creativa y moodboard

| Tarea | Skill |
|---|---|
| Moodboard visual explorando "frío confiable" (arcos tipo escudo, degradados, fotografía real) | **`canvas-design`** o **`design`** (Claude Design) |
| Curar que las decisiones no se vean "genéricas de IA" — ojo de dirección de arte | **`taste-skill`** |
| Aplicar principios de diseño distintivo: tipografía a gran escala, espaciado, jerarquía no plantillera | **`frontend-design`** |
| Piezas de apoyo (hero banner, banner de categoría destacada) | **`banner-design`** |

---

## 3. Prototipo de alta fidelidad (Home, Catálogo, Detalle, Contacto)

| Tarea | Skill |
|---|---|
| Maquetas de las 4 rutas contratadas, con el nuevo lenguaje visual | **`prototype`** |
| Decidir qué librería de componentes usar (tu doc ya descarta shadcn/ui completo) | **`pick-ui-library`** |
| Refinar estilos finos de componentes: Button, Card, estados focus/hover | **`ui-styling`**, **`ui-ux-pro-max`** |
| Construir el prototipo como artifact interactivo antes de pasarlo a código real | **`web-artifacts-builder`** |

---

## 4. Movimiento y "cortes" (la parte que pediste de efectos y transiciones)

Esta es la fase donde vive lo que pediste — pero ejecutado en 2D, con propósito, respetando `prefers-reduced-motion`.

| Tarea | Skill |
|---|---|
| Definir el lenguaje de movimiento: duraciones, easing, qué anima y qué no | **`motion-doctrine`** |
| Vocabulario de movimiento consistente (nombrar los patrones: mask-reveal, stagger, parallax sutil) | **`animation-vocabulary`** |
| Implementación real de animaciones GSAP (scroll-trigger, entrada del H1 por máscara, gota decorativa) | **`animate`** |
| Piezas de motion más elaboradas: loop del ícono de gota, línea de "cadena de frío" recorriendo el sitio | **`motion-graphics`** |
| **Transiciones de corte/wipe entre secciones o rutas** (esto es literalmente lo que pediste de "cortes") | **`cut-the-curve`** |
| Framing/paneles tipo cámara 2D para transiciones entre bloques editoriales (sin ser 3D) | **`hyperframes`**, **`hyperframes-animation`**, **`hyperframes-creative`** |
| Cursor de marca personalizado en desktop (ej. una gota o marco del escudo siguiendo el mouse sobre productos) | **`oversized-cursor`** |
| Auditar el prototipo y encontrar dónde SÍ vale la pena animar (evitar saturación) | **`find-animation-opportunities`** |
| Revisar y pulir animaciones ya implementadas (timing, performance, que no compitan entre sí) | **`review-animations`**, **`improve-animations`** |

---

## 5. Construcción, feedback y QA

| Tarea | Skill |
|---|---|
| Ingeniería de detalle en la implementación final de componentes (acabado de producción) | **`emil-design-eng`** |
| Micro-feedback de UI (ej. confirmación visual al copiar el número de WhatsApp o correo) | **`ask-sonner`** |
| QA visual y funcional cross-device, accesibilidad, reduced motion | **`webapp-testing`** |
| Revisión de acabado final y aplicación de ediciones manuales pendientes | **`impeccable-finish-reviewer`**, **`impeccable-manual-edit-applier`** |
| Documentar decisiones tomadas durante el rediseño (para entregar a Mattias/cliente) | **`impeccable-documenter`** |
| Producción de assets finales (recortes, exportaciones optimizadas) | **`impeccable-asset-producer`** |

---

## 6. Opcional / según necesidad real

| Situación | Skill |
|---|---|
| Si necesitas presentar la propuesta visual al dueño de PROALIMEC antes de construir | **`slides`** |
| Solo si en algún punto necesitas una llamada a la API de Claude dentro del sitio (poco probable en un sitio estático) | **`claude-api`** |
| Solo si terminas construyendo una integración/MCP propia (no aplica a este proyecto) | **`mcp-builder`** — omitir |
| Solo si luego quieres crear una skill nueva reutilizable a partir de este proceso | **`skill-creator`** — omitir por ahora |

---

## 7. Orden recomendado de ejecución

```
1. theme-factory + brand           → paleta y reglas de logo definitivas
2. canvas-design/design + taste    → moodboard y dirección de arte
3. frontend-design + pick-ui-lib   → lenguaje visual y componentes base
4. prototype + web-artifacts-build → maquetas de alta fidelidad, 4 rutas
5. motion-doctrine + vocabulary    → reglas de movimiento antes de animar nada
6. animate + motion-graphics       → implementación de movimiento
7. cut-the-curve + hyperframes*    → transiciones entre secciones/rutas
8. oversized-cursor                → detalle de marca en desktop
9. find/review/improve-animations  → auditoría y pulido
10. emil-design-eng + ask-sonner   → detalle de producción
11. webapp-testing                 → QA completo
12. impeccable-* (finish/manual)   → revisión final y documentación
```

---

## 8. Recordatorios de tu propio documento (no perderlos en el camino)

- No reconstruir el logo con SVG trazado a mano — usar el archivo oficial.
- Naranja nunca como texto blanco pequeño encima (falla contraste AA).
- No inventar cifras, certificaciones, testimonios ni clientes.
- No copiar layout, textos ni animaciones de AGROSUPER.
- El sitio debe seguir siendo 100% funcional y legible sin GSAP (progressive enhancement).
- `prefers-reduced-motion` es obligatorio, no opcional.
