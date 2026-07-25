// Toast utility
let timer = null;

export function showToast(msg, duration = 2000) {
  const container = document.getElementById('toast-container');
  container.innerHTML = `<div class="toast show">${msg}</div>`;
  clearTimeout(timer);
  timer = setTimeout(() => { container.innerHTML = ''; }, duration);
}
