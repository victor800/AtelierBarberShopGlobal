# 🤖 AGENTS.md

## Proyecto
BarberGlobal — Barbería web app
Stack: HTML / CSS / JS vanilla / TailwindCSS / Google Sheets API

## Archivos clave
| Archivo                        | Propósito                        |
|-------------------------------|----------------------------------|
| lib/config.js                 | Única fuente de variables .env   |
| middleware/authGuard.js       | Protege rutas /admin             |
| middleware/sanitize.js        | Limpia inputs antes de Sheets    |
| middleware/rateLimit.js       | Límite de peticiones             |
| api/googleSheets.js           | Conexión con Google Sheets       |
| auth/token.js                 | Genera y verifica JWT            |
| auth/roles.js                 | Permisos por rol                 |
| utils/security/env.js         | Valida variables al iniciar      |
| .env.example                  | Plantilla de variables           |

## Flujo cita cliente
1. /pages/agendar        → elige servicio y slot
2. /api/horario/         → consulta disponibilidad
3. /api/citas/crear.js   → guarda en Sheets
4. /pages/confirmacion   → muestra resumen

## Flujo admin
1. /pages/admin/login    → autenticación
2. auth/token.js         → genera JWT
3. authGuard.js          → verifica en cada ruta
4. /pages/admin/         → gestión completa

## Convenciones
- Archivos: camelCase → googleSheets.js
- Carpetas: minúsculas → /middleware
- Variables: UPPER_SNAKE en .env
- Funciones: verbos → crearCita(), validarToken()

## Lo que NUNCA debes hacer
- Modificar .env directamente
- Saltarte authGuard en rutas admin
- Escribir en Sheets sin sanitizar
- Hardcodear IDs o keys en el código