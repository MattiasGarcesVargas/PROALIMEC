# PROALIMEC Web

Presencia corporativa y catálogo estático de PROALIMEC, construidos con React, TypeScript, React Router Framework Mode, Tailwind CSS, Zod y GSAP.

## Desarrollo

```bash
npm install
npm run dev
```

## Calidad

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
```

El build estático se genera en `build/client` y prerenderiza `/`, `/productos`, `/contacto` y `/404`.

## Arquitectura

```text
routes -> sections -> shared
JSON -> Zod -> service -> loader -> hook -> page -> component
```

Los módulos verticales viven en `src/sections`. El registro de implementaciones está en `src/service-registry.ts`, como composition root de la aplicación.

## Contenido

Los productos, categorías, canales de contacto, fotografías y datos empresariales siguen pendientes de aprobación. Los mocks permanecen vacíos y la interfaz no inventa información comercial.

La dirección visual y las reglas de implementación están documentadas en `docs/PROALIMEC_DESIGN_SYSTEM.md`.
