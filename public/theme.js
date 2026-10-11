// Apply before styles load. An unset preference keeps following the OS.
(() => {
  const key = 'steam-shelf-theme';
  const root = document.documentElement;
  const system = globalThis.matchMedia?.('(prefers-color-scheme: light)');
  const choice = value => value === 'light' || value === 'dark' ? value : null;
  function readPreference(value) {
    return choice(value);
  }
  let preference = null;
  try { preference = readPreference(localStorage.getItem(key)); } catch {}
  function apply() {
    const theme = preference || (system?.matches ? 'light' : 'dark');
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#e7ebef' : '#0b111a');
    document.dispatchEvent(new CustomEvent('themechange'));
  }
  globalThis.AppTheme = {
    get preference() { return preference; },
    get theme() { return root.dataset.theme; },
    setPreference(value) { preference = choice(value); apply(); },
  };
  system?.addEventListener('change', () => { if (!preference) apply(); });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = readPreference(event.newValue);
    apply();
  });
  apply();
})();
