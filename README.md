# 🖥️ Galeed León // Retro TUI Portfolio

Portfolio personal interactivo basado en Astro, inspirado en una terminal CRT retro. La interfaz principal está en inglés y la información personal está en español.

## Incluye

- Modo **CLI** y dashboard **GUI**.
- Seis temas CRT intercambiables: Phosphor Green, Amber, Cyber Cyan, Dracula Synth, Monochrome y Cappuccino.
- Efectos CRT, Matrix rain y sonidos de teclado.
- Juegos Pong y Snake con controles de teclado y táctiles.
- Radio Lo-Fi con pistas locales/YouTube y carga de URLs personalizadas.
- Estadísticas y repositorios públicos de GitHub cargados desde la API.
- Sección de música: Spotify, Apple Music, SoundCloud y YouTube.
- Formulario de contacto AJAX mediante FormSubmit.
- Diseño responsive para escritorio y móvil.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build de producción

```bash
npm run build
npm run preview
```

## Personalización

- `src/data/portfolio.ts`: nombre, biografía, habilidades, proyecto, enlaces y comandos.
- `src/config/themeConfig.ts`: temas y configuración CRT.
- `src/config/radioConfig.ts`: pistas y streams de radio.
- `src/config/gamesConfig.ts`: integración opcional de actividad en Discord/Lanyard.
- `src/config/spotifyConfig.ts`: widget opcional de actividad de Spotify mediante Lanyard.

## Proyecto destacado

**Moustache de Chat LAB** — suite para edición, mezcla y masterización de audio.

Repositorio: <https://github.com/galeed/Moustache-de-Chat-LAB-2>

## Deploy

La plantilla puede desplegarse en Netlify, Vercel o GitHub Pages. Para GitHub Pages, revisa `astro.config.mjs` si el repositorio usa un nombre o dominio personalizado.

## Licencia

La base original utiliza licencia MIT. Conserva el archivo `LICENSE.MD` al redistribuir o modificar el proyecto.
