/* SPDX-License-Identifier: Apache-2.0 */
const themes = new Set(['sunset', 'arcade', 'meadow']);
const themeKey = 'rpo-hub-theme';
const motionKey = 'rpo-hub-pause-motion';
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const motionToggle = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function getSession(key) {
  try { return sessionStorage.getItem(key); } catch { return null; }
}
function setSession(key, value) {
  try { sessionStorage.setItem(key, value); } catch { /* A blocked session store must not break navigation. */ }
}
function setTheme(value, persist = true) {
  const theme = themes.has(value) ? value : 'sunset';
  root.dataset.theme = theme;
  if (themeSelect) themeSelect.value = theme;
  if (persist) setSession(themeKey, theme);
}
function setPaused(paused, persist = true) {
  root.classList.toggle('motion-paused', paused);
  if (!motionToggle) return;
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.querySelector('.motion-label').textContent = paused ? 'Resume motion' : 'Pause motion';
  motionToggle.setAttribute('aria-label', paused ? 'Resume animation' : 'Pause animation');
  if (persist) setSession(motionKey, String(paused));
}

setTheme(getSession(themeKey) || 'sunset', false);
setPaused(getSession(motionKey) === 'true' || reducedMotion.matches, false);
if (reducedMotion.matches && motionToggle) {
  motionToggle.disabled = true;
  motionToggle.title = 'Your device requests reduced motion';
  motionToggle.querySelector('.motion-label').textContent = 'Reduced motion';
  motionToggle.setAttribute('aria-label', 'Animation reduced by your device preference');
}
themeSelect?.addEventListener('change', event => setTheme(event.currentTarget.value));
motionToggle?.addEventListener('click', () => {
  if (reducedMotion.matches) return;
  setPaused(!root.classList.contains('motion-paused'));
});
reducedMotion.addEventListener?.('change', event => {
  if (event.matches) {
    setPaused(true);
    motionToggle.disabled = true;
    motionToggle.title = 'Your device requests reduced motion';
    motionToggle.querySelector('.motion-label').textContent = 'Reduced motion';
    motionToggle.setAttribute('aria-label', 'Animation reduced by your device preference');
  } else {
    motionToggle.disabled = false;
    motionToggle.removeAttribute('title');
    setPaused(getSession(motionKey) === 'true');
  }
});
