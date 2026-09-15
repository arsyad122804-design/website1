const fs = require('fs');

// 1. Update testimoni.css
let css = fs.readFileSync('testimoni.css', 'utf8');

const largeAuthorStyles = `
/* Large Author Styles for Video Testimonials */
.tokoh-author-large {
  position: relative;
  padding-left: 25px;
  text-align: left;
}
.tokoh-author-large::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background: var(--primary-gold);
  border-radius: 3px;
}
.tokoh-name-large {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: white;
  line-height: 1.2;
}
.tokoh-title-large {
  color: #94A3B8;
  font-size: 1.3rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tokoh-author-large {
    padding-left: 15px;
  }
  .tokoh-name-large {
    font-size: 1.6rem;
  }
  .tokoh-title-large {
    font-size: 1rem;
  }
}
`;

css += largeAuthorStyles;
fs.writeFileSync('testimoni.css', css, 'utf8');
console.log('Updated testimoni.css');

// 2. Update testimoni.html
let html = fs.readFileSync('testimoni.html', 'utf8');

// Replace Slide 1 content area to remove the quote and make the name/title large
const oldSlide1Content = `<div class="tokoh-content">
                <i class="fas fa-quote-left tokoh-quote-icon"></i>
                <div class="tokoh-text">
                  Pendidikan sejati haruslah mengutamakan adab sebelum ilmu, guna melahirkan generasi pejuang yang berkarakter.
                </div>
                <div class="tokoh-author">
                  <div class="tokoh-name">Ustadz Dr. Adian Husaini</div>
                  <div class="tokoh-title">Ketua Dewan Da'wah Islamiyah Indonesia</div>
                </div>
              </div>`;

const newSlide1Content = `<div class="tokoh-content">
              <div class="tokoh-author-large">
                <div class="tokoh-name-large">Ustadz Dr. Adian Husaini</div>
                <div class="tokoh-title-large">Ketua Dewan Da'wah Islamiyah Indonesia</div>
              </div>
            </div>`;

html = html.replace(oldSlide1Content, newSlide1Content);

// Update cache buster
html = html.replace('testimoni.css?v=20260826j', 'testimoni.css?v=20260826k');

fs.writeFileSync('testimoni.html', html, 'utf8');
console.log('Successfully patched testimoni.html for Dr. Adian Husaini');
