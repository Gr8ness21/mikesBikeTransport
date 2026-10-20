(function () {
  const gate = document.getElementById('intro-gate');
  const video = document.getElementById('intro-video');
  if (!gate) return;

  document.body.style.overflow = 'hidden';

  function kickPlay() {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    const play = video.play();
    if (play && play.catch) play.catch(function () {});
  }

  kickPlay();
  if (video) {
    video.addEventListener('loadeddata', kickPlay);
    video.addEventListener('canplay', kickPlay);
  }

  let start = null;
  let leaving = false;

  function enter() {
    if (leaving) return;
    leaving = true;
    gate.classList.add('is-wiping');
  }

  function onKey(e) {
    if (leaving || !document.body.contains(gate)) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      enter();
    }
  }

  gate.addEventListener('pointerdown', function (e) {
    start = { x: e.clientX, y: e.clientY };
    kickPlay();
  });

  gate.addEventListener('pointerup', function (e) {
    const from = start;
    start = null;
    if (!from) {
      enter();
      return;
    }
    const dist = Math.hypot(e.clientX - from.x, e.clientY - from.y);
    if (dist > 36 || dist < 12) enter();
  });

  gate.addEventListener('pointercancel', function () {
    start = null;
  });

  gate.addEventListener('animationend', function () {
    if (!gate.classList.contains('is-wiping')) return;
    gate.remove();
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKey);
  });

  window.addEventListener('keydown', onKey);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') kickPlay();
  });
  window.addEventListener('pageshow', kickPlay);
})();
