/* Utilidades compartidas. Todo el proyecto cuelga del espacio de nombres global Sim (sin módulos ES,
   para que funcione abriendo index.html con doble clic). */
window.Sim = window.Sim || {};

(function (S) {
  S.esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  S.el = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  /* Generador pseudoaleatorio con semilla (mulberry32): mismo modelo = mismas preguntas y mismo orden de opciones. */
  S.rng = (seed) => () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  S.hash = (str) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };

  S.shuffle = (arr, r = Math.random) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* localStorage opcional: si el navegador lo bloquea, todo funciona igual sin guardar progreso. */
  S.store = {
    prefix: 'robotica-p1-',
    get(k, d) { try { const v = localStorage.getItem(this.prefix + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(this.prefix + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } },
    keys(start) { try { return Object.keys(localStorage).filter((k) => k.startsWith(this.prefix + start)); } catch (e) { return []; } },
    remove(k) { try { localStorage.removeItem(k); } catch (e) { /* nada */ } },
  };
})(window.Sim);
