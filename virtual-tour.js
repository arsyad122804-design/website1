// VIRTUAL TOUR JS — HIBATULLAH IIBS (REAL 360° WEBGL VIEWER FOR SINGLE CUSTOM PANORAMA)

document.addEventListener('DOMContentLoaded', () => {
  // Scene Config using the new 360 panorama image
  const sceneConfig = {
    title: "Pesantren Hibatullah IIBS",
    desc: "Pemandangan panorama 360° kompleks sekolah dan asrama santri Hibatullah International Islamic Boarding School.",
    image: "virtual/WhatsApp Image 2026-07-28 at 11.23.38 AM.jpeg",
    hotSpots: [
      { "pitch": -2, "yaw": -45, "type": "info", "text": "Gedung Pembelajaran: Tempat berlangsungnya kegiatan belajar mengajar formal santri." },
      { "pitch": 4, "yaw": 15, "type": "info", "text": "Masjid Al-Hibatullah: Pusat kegiatan ibadah berjamaah, setoran hafalan Al-Qur'an, dan kajian adab." },
      { "pitch": -5, "yaw": 75, "type": "info", "text": "Asrama Santri: Fasilitas hunian santri modern yang nyaman, bersih, dan asri." }
    ]
  };

  // DOM Elements
  const sceneTitle = document.getElementById('scene-title');
  const sceneDesc = document.getElementById('scene-desc');
  const tourLoader = document.getElementById('tourLoader');
  
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnAutoRotate = document.getElementById('btnAutoRotate');
  const btnFullScreen = document.getElementById('btnFullScreen');
  
  const sceneItems = document.querySelectorAll('.scene-item');
  
  // Floating UI elements for hide/show toggle
  const floatingHeader = document.querySelector('.tour-floating-header');
  const descCard = document.getElementById('descCard');
  const floatingSelector = document.querySelector('.tour-floating-selector');

  let isAutoRotating = true;
  let uiVisible = true;

  // Initialize Pannellum Viewer for a single 360° Panorama
  const viewer = pannellum.viewer('tourViewer', {
    "type": "equirectangular",
    "panorama": sceneConfig.image,
    "title": sceneConfig.title,
    "author": "Hibatullah IIBS",
    "autoLoad": true,
    "autoRotate": -1.8,       // Slowly rotate left to right continuously
    "autoRotateInactivityDelay": 3000,
    "showControls": false,    // Hide default controls to use custom UI
    "hotSpots": sceneConfig.hotSpots
  });

  // Set initial UI text
  sceneTitle.textContent = sceneConfig.title;
  sceneDesc.textContent = sceneConfig.desc;

  // Hide loader once the 3D texture is ready
  viewer.on('load', () => {
    if (tourLoader) {
      tourLoader.style.opacity = '0';
      tourLoader.style.pointerEvents = 'none';
    }
  });

  // Controls Event Listeners
  btnZoomIn.addEventListener('click', () => {
    viewer.setHfov(viewer.getHfov() - 10);
  });

  btnZoomOut.addEventListener('click', () => {
    viewer.setHfov(viewer.getHfov() + 10);
  });

  btnAutoRotate.addEventListener('click', () => {
    isAutoRotating = !isAutoRotating;
    if (isAutoRotating) {
      viewer.startAutoRotate(-1.8);
      btnAutoRotate.classList.add('active');
    } else {
      viewer.stopAutoRotate();
      btnAutoRotate.classList.remove('active');
    }
  });

  btnFullScreen.addEventListener('click', () => {
    viewer.toggleFullscreen();
  });

  // Double Click viewer container to toggle UI HUD
  document.getElementById('tourViewer').addEventListener('dblclick', (e) => {
    // Avoid double click triggering on hotspots/buttons
    if (e.target.closest('.pnlm-hotspot-base') || e.target.closest('.tour-control-btn')) return;

    uiVisible = !uiVisible;
    if (uiVisible) {
      floatingHeader.classList.remove('header-hidden');
      descCard.classList.remove('ui-hidden');
      floatingSelector.classList.remove('ui-hidden');
      btnZoomIn.parentElement.classList.remove('controls-hidden');
    } else {
      floatingHeader.classList.add('header-hidden');
      descCard.classList.add('ui-hidden');
      floatingSelector.classList.add('ui-hidden');
      btnZoomIn.parentElement.classList.add('controls-hidden');
    }
  });

  // Trigger active state styling initially
  btnAutoRotate.classList.add('active');
});
