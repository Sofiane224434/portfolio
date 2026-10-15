// Dérogation à la maintenance : la clé est vérifiée par l'API azim404, qui pose un cookie
// signé et HttpOnly valable sur tous les sous-domaines. Aucune clé n'est stockée ici.
const BYPASS_API = 'https://azim404.com/api/site-status/bypass';

async function call(method, body) {
  try {
    const res = await fetch(BYPASS_API, {
      method,
      credentials: 'include',
      cache: 'no-store',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = res.ok ? await res.json() : null;
    return Boolean(data?.active);
  } catch {
    return false;
  }
}

export const fetchBypassStatus = () => call('GET');
export const requestBypass = (key) => call('POST', { key });
export const revokeBypass = () => call('DELETE');

// Lien « ?admin_bypass=CLÉ » : la clé est retirée de l'URL puis envoyée au serveur
export function takeBypassKeyFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('admin_bypass') || params.get('azim_admin_bypass') || params.get('bypass');
  if (!key) return null;
  ['admin_bypass', 'azim_admin_bypass', 'bypass'].forEach((p) => params.delete(p));
  const query = params.toString();
  window.history.replaceState({}, document.title, window.location.pathname + (query ? `?${query}` : '') + window.location.hash);
  return key;
}
