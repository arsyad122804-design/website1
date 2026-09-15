const fs = require('fs');
const code = `
// Global Audio Player Logic
(function() {
  const audioHTML = \`
  <div id="globalAudioPlayerToggle" class="floating-audio-btn" style="position: fixed; bottom: 30px; left: 30px; width: 50px; height: 50px; border-radius: 50%; background: #f0c040; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 9999; cursor: pointer; transition: all 0.3s ease;">
    <i class="fas fa-volume-mute" id="globalAudioIcon" style="font-size: 20px;"></i>
  </div>
  <audio id="globalBgMusic" src="assets/audio/bg-music.mp4" loop preload="auto" autoplay></audio>
  \`;

  document.addEventListener('DOMContentLoaded', () => {
    // Only inject if it doesn't exist
    if (!document.getElementById('globalAudioPlayerToggle')) {
      document.body.insertAdjacentHTML('beforeend', audioHTML);
    }
    
    const bgMusic = document.getElementById('globalBgMusic');
    const audioToggleBtn = document.getElementById('globalAudioPlayerToggle');
    const audioIcon = document.getElementById('globalAudioIcon');
    let hasInteracted = false;
    let isPlaying = false;

    // Check saved state
    const savedState = localStorage.getItem('isMusicPlaying');
    // If there is no saved state, we assume it should try to play
    let shouldPlay = savedState === null ? true : savedState === 'true';

    const updateUI = (playing) => {
      isPlaying = playing;
      if (playing) {
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
        audioToggleBtn.style.background = '#4ade80';
      } else {
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
        audioToggleBtn.style.background = '#f0c040';
      }
      localStorage.setItem('isMusicPlaying', playing);
    };

    const attemptPlay = () => {
      if (shouldPlay) {
        bgMusic.play().then(() => {
          updateUI(true);
        }).catch(err => {
          console.log("Autoplay blocked by browser. Awaiting user interaction...");
          updateUI(false);
          shouldPlay = true; // keep it intent to play
        });
      } else {
        bgMusic.pause();
        updateUI(false);
      }
    };

    // Try playing immediately (might work if MEI is high or navigating between pages)
    attemptPlay();

    // Toggle button click
    audioToggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      shouldPlay = !isPlaying;
      if (shouldPlay) {
        attemptPlay();
      } else {
        bgMusic.pause();
        updateUI(false);
      }
    });

    // Auto-play on first user interaction anywhere on the document if it should be playing
    const startAudioOnInteract = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        if (shouldPlay && !isPlaying) {
          attemptPlay();
        }
        document.removeEventListener('click', startAudioOnInteract);
        document.removeEventListener('scroll', startAudioOnInteract);
        document.removeEventListener('touchstart', startAudioOnInteract);
      }
    };
    
    document.addEventListener('click', startAudioOnInteract);
    document.addEventListener('scroll', startAudioOnInteract);
    document.addEventListener('touchstart', startAudioOnInteract);
  });
})();
\`;
fs.appendFileSync('script.js', code);
`;
