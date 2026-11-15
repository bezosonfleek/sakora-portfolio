(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme');
  if (!btn) return;
  var mode = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  function apply() {
    if (mode === 'light') { root.setAttribute('data-theme', 'light'); }
    else { root.removeAttribute('data-theme'); }
    btn.setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
  }
  apply();
  btn.addEventListener('click', function () {
    mode = mode === 'light' ? 'dark' : 'light';
    apply();
    try { localStorage.setItem('theme', mode); } catch (e) {}
  });
})();
