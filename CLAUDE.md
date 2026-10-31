# Blueprint Strategies · sitio web

Sitio de blueprintstrategies.us. Blueprint es una agencia de crecimiento con IA para negocios
de servicios del hogar (HVAC, plomería, techos, electricidad y más). Dueño: Piero.

## Canario
Empieza tu primera respuesta de cada sesión con `🔧 BP`.
(Si deja de aparecer, la sesión está saturada: abrir una nueva.)

## Ramas (lo más importante)
- `master` = la web EN VIVO. Nunca se toca directo.
- `rebrand-2026` = base de la web nueva.
- `website-final` = la versión de trabajo de Piero. Todo cambio nuevo parte de aquí.
- `archive/developer-2025` = respaldo viejo. No se toca.
- Flujo: rama nueva desde `website-final` → Pull Request hacia `website-final` →
  Piero revisa la vista previa de Netlify y aprueba el merge. Nunca hacer merge tú.

## Cómo está armado
- Astro, desplegado en Netlify (`netlify.toml`: build `npm run build`, salida `dist/`, Node 22).
- Todo el texto de la home, en inglés y español: `src/i18n/home.ts`. Cada cambio de copy va en los dos idiomas.
- Secciones de la home: `src/components/Home.astro`. Formulario del Score: `src/components/ScoreForm.astro`.
- Rutas: `src/pages/` (`/`, `/es/`, gracias, legales, opt-in de SMS).
- Colores y tipografías: `src/styles/global.css`. Logos: `public/brand/`.
- Datos pendientes (teléfono, WhatsApp, calendario de GHL): `src/config.ts`. Vacío = el botón se oculta.

## Reglas que no se rompen
1. Cambios pequeños y de un solo tema por PR. No reescribir archivos enteros.
2. No cambiar diseño, colores, tipografías ni logo salvo que Piero lo pida.
   Marca: Navy #060F19, Panel #0E1B27, Line #1E2E3E, Signal Lime #9CE24A (logo + un CTA),
   Chalk #F4F3F2, Steel #93A1AF. Oxanium 700 (títulos), IBM Plex Sans (texto), IBM Plex Mono (etiquetas).
   Sin degradados, brillos, clip art ni robots.
3. Nunca poner precios en la web. El precio se da en la llamada.
4. Nunca inventar testimonios, clientes, estadísticas ni resultados. Si falta una prueba, escribir `[NEED: ...]` y avisar.
5. No tocar el texto de consentimiento de SMS/llamadas, las páginas legales, el opt-in de SMS
   ni los redirects de `netlify.toml` sin permiso (cumplimiento TCPA y A2P 10DLC).
6. No cambiar cómo envía el formulario del Score (Netlify Forms, honeypot) sin permiso.
7. No agregar librerías, trackers ni scripts de terceros sin permiso.
8. No borrar archivos. Si algo sobra, avisar.
9. Solo se habla de Blueprint Strategies. No mencionar ni mezclar otras marcas o proyectos.

## Copy
- Para dueños de negocios de servicios del hogar: casual, directo, beneficio primero.
  Palabras de contratista: trabajos, llamadas, agendado, temporada baja.
- Todo lleva al Blueprint Score gratis. Un solo camino recomendado, nunca un menú.
- El español se adapta, no se traduce literal. Usar "tú".
- Usar la skill blueprint-copy para escribir o revisar textos.

## Antes de abrir un PR
- `npm run build` sin errores.
- Revisar `/` y `/es/` en móvil (390 px) y escritorio. Consola sin errores.
- Probar el formulario del Score (paso 1 → paso 2).
- En el PR: qué cambió, por qué, capturas antes/después y cómo deshacerlo.

## Cómo hablarme
En español, corto, lo útil primero. Recomendaciones directas, no menús.
Si algo no va a funcionar, decirlo. Preguntar antes de cualquier cosa que no se pueda deshacer.
