/* ═══════════════════════════════════════════════════
   ATELIER CORE — carga de instancia compartida
   Usado por: panel.html, home.html
═══════════════════════════════════════════════════ */

const GAS_URL = "https://script.google.com/macros/s/AKfycbyD-iwgwbMdBqSc4i8H62TU5AB5hV3cGaG5z9gbG32vtYM08s5kVibbmwN4EiYxoDCb/exec";

/* ── Sesión activa ── */
function getSesion() {
  return JSON.parse(sessionStorage.getItem('atelier_sesion') || '{}');
}

/* ── Carga el perfil completo desde el Sheet ──
   Retorna: { perfil: {...} } o { perfil: null } si no existe */
async function cargarInstancia(barberia_id) {
  if (!barberia_id || barberia_id === 'BAR-DEMO') return { perfil: null };
  try {
    const res  = await fetch(`${GAS_URL}?accion=leerPerfil&barberia_id=${encodeURIComponent(barberia_id)}`);
    const json = await res.json();
    if (json.error) return { perfil: null };
    return json; // { perfil: {...} } o { perfil: null }
  } catch(e) {
    console.warn('cargarInstancia error:', e);
    return { perfil: null };
  }
}

/* ── Carga horarios ── */
async function cargarHorarios(barberia_id) {
  if (!barberia_id) return null;
  try {
    const res  = await fetch(`${GAS_URL}?accion=leerHorarios&barberia_id=${encodeURIComponent(barberia_id)}`);
    const json = await res.json();
    return json.horarios || null;
  } catch(e) { return null; }
}

/* ── Carga cortes / galería ── */
async function cargarCortes(barberia_id) {
  if (!barberia_id) return [];
  try {
    const res  = await fetch(`${GAS_URL}?accion=leerCortes&barberia_id=${encodeURIComponent(barberia_id)}`);
    const json = await res.json();
    return json.cortes || [];
  } catch(e) { return []; }
}