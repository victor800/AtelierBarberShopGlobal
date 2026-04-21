# 🤖 CLAUDE.md

## Proyecto
BarberGlobal — Sistema de citas para barbería
Stack: HTML + CSS + JavaScript vanilla + TailwindCSS
Base de datos: Google Sheets API

## Estructura
- /pages        → vistas HTML
- /api          → llamadas a Google Sheets
- /components   → fragmentos reutilizables
- /middleware   → authGuard, rateLimit, sanitize
- /auth         → JWT, sesión, roles
- /lib          → config.js, slots.js, types.js
- /utils        → helpers y seguridad
- /assets       → css y js globales

## Reglas
1. NUNCA tocar .env
2. NUNCA hardcodear credenciales
3. Variables siempre desde lib/config.js
4. Sanitizar inputs antes de escribir en Sheets
5. Rutas /admin siempre con authGuard.js

## Google Sheets como BD
- Hoja "citas"     → reservas de clientes
- Hoja "servicios" → cortes y precios
- Hoja "horario"   → disponibilidad
- Hoja "admin"     → credenciales hasheadas

## Seguridad
- Contraseñas: bcrypt, nunca texto plano
- Auth: JWT expira en 8h
- Rate limit: 10 intentos login / 5 citas por hora
- CSRF: token en cada formulario
- Sanitizar contra formula injection en Sheets

## Comandos
npx tailwindcss -i ./assets/css/globals.css -o ./assets/css/output.css --watch

## NO hacer
- No usar React, Vue u otros frameworks
- No exponer API keys en el frontend
- No usar localStorage para sesiones
- No subir .env a GitHub