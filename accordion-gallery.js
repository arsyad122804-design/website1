/* AccordionGallery Component JavaScript (React Bits GSAP implementation) */
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('accordionGallery');
  if (!rootEl) return;

  const panels = Array.from(rootEl.querySelectorAll('.ag-panel'));
  const count = panels.length;
  if (!count) return;

  let activeIndex = 2; // defaultIndex = 2
  let activeTl = null;
  let isFirstRun = true;
  let mediaSize = 320;

  const expandRatio = 0.52;
  const duration = 0.6;
  const ease = 'power3.out';
  const tilt = 8;
  const parallax = 0.5;
  const grayscale = false;
  const showLabels = false;
  const stagger = 0.06;
  const gap = 10;

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  function applyLayout(animate = true) {
    if (window.innerWidth <= 768) {
      if (activeTl) activeTl.kill();
      panels.forEach(panel => {
        if (!panel) return;
        panel.style.transform = '';
        panel.style.flexGrow = '';
        const media = panel.querySelector('.ag-panel__media');
        if (media) media.style.transform = '';
      });
      return;
    }
    const isVertical = window.innerWidth <= 520;
    const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
    const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

    if (activeTl) activeTl.kill();
    const dur = animate && !prefersReduced ? duration : 0;
    const tl = gsap.timeline();

    panels.forEach((panel, i) => {
      if (!panel) return;
      const isActive = i === activeIndex;
      const media = panel.querySelector('.ag-panel__media');
      const bar = panel.querySelector('.ag-panel__bar');
      const text = panel.querySelector('.ag-panel__text');

      if (isActive) {
        panel.classList.add('ag-panel--active');
        panel.setAttribute('aria-current', 'true');
      } else {
        panel.classList.remove('ag-panel--active');
        panel.removeAttribute('aria-current');
      }

      const rot = isActive ? 0 : i < activeIndex ? tilt : -tilt;
      const rotProp = isVertical ? { rotateX: -rot } : { rotateY: rot };

      tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

      if (media) {
        const drift = Math.max(-1.5, Math.min(1.5, activeIndex - i));
        const shift = drift * parallax * mediaSize * 0.06;
        tl.to(
          media,
          {
            xPercent: -50,
            yPercent: -50,
            x: isVertical ? 0 : isActive ? 0 : shift,
            y: isVertical ? (isActive ? 0 : shift) : 0,
            '--ag-gray': 0,
            '--ag-dim': 0,
            duration: dur,
            ease
          },
          0
        );
      }

      if (showLabels && bar && text) {
        if (isActive) {
          tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
        } else {
          tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
        }
      }
    });

    activeTl = tl;
  }

  function measure() {
    const rect = rootEl.getBoundingClientRect();
    const isVertical = window.innerWidth <= 520;
    const total = isVertical ? rect.height : rect.width;
    const usable = Math.max(total - gap * (count - 1), 120);
    const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
    mediaSize = Math.max(140, usable * r * 1.22);
    rootEl.style.setProperty('--ag-media-size', `${mediaSize}px`);
    applyLayout(!isFirstRun);
    isFirstRun = false;
  }

  // Event Listeners for Hover, Focus, and Click
  panels.forEach((panel, i) => {
    panel.addEventListener('mouseenter', () => {
      if (activeIndex !== i) {
        activeIndex = i;
        applyLayout(true);
      }
    });

    panel.addEventListener('focus', () => {
      if (activeIndex !== i) {
        activeIndex = i;
        applyLayout(true);
      }
    });

    panel.addEventListener('click', (e) => {
      // Langsung menuju ke galeri.html ketika user mengklik foto
      window.location.href = panel.getAttribute('href') || 'galeri.html';
    });

    panel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (i + 1) % count;
        panels[activeIndex].focus();
        applyLayout(true);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (i - 1 + count) % count;
        panels[activeIndex].focus();
        applyLayout(true);
      }
    });
  });

  measure();
  window.addEventListener('resize', measure);
});
