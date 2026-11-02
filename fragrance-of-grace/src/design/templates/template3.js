// design/templates/template3.js
// Converted from Figma: "Template 3" (node 1:53).
// Every image is shared with Template 1, so nothing new is downloaded.
// The headline sits on a navy rounded rectangle rather than an SVG card.

const MONT = "'Montserrat', sans-serif";
const NAVY = '#0B1B33';
const GOLD = '#C9A127';
const SOFT_RED = '#DB5757';

// The microphone is large and tilted here, filling the right of the canvas.
const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -21, y: 0, w: 1121, h: 1401, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 467.4, y: 75, w: 891.688, h: 1281.445, src: '/templates/t1/mic.webp',
    rotate: 10.41, flipY: true, crop: MIC_CROP },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 316.63, y: 285, w: 909.7, h: 965, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 64.05, y: 193.12, w: 350, text: 'NEW', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 64.05, y: 312.12, w: 625, text: 'EPISODE', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 30.83, y: 173.65, w: 309, h: 49, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 86.04, y: 172.93, w: 199.27, text: 'New Drop', fontFamily: MONT, fontSize: 37.513,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247, rotate: -7 },

  { id: 'card', type: 'shape', name: 'Headline panel',
    x: 64, y: 515, w: 548, h: 401, background: NAVY, radius: 20 },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 119, y: 545, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 136, y: 601, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 186, y: 762, w: 363, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 169, y: 1040, w: 742, h: 160, background: NAVY, radius: 30,
    border: 3, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 265, y: 1066, w: 550, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 37.513, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 315, y: 1124, w: 236.33, h: 53.54, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 591.23, y: 1124, w: 172.8, h: 54, src: '/templates/t1/spotify.svg', fit: 'contain' },

  // Last, so the bar overlaps the top of the headline panel.
  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 64, y: 476, w: 559, h: 69, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 124, y: 487, w: 440, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.513, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1280, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 880, y: -120, w: 620, h: 891, src: '/templates/t1/mic.webp',
    rotate: 10.41, flipY: true, crop: MIC_CROP },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 604, y: -8, w: 709.5, h: 946, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 59.83, y: 43.99, w: 281.72, h: 47.17, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 101.81, y: 50.76, w: 196.55, text: 'New Drop', fontFamily: MONT, fontSize: 34.069,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247, rotate: -7 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 63.24, y: 84.92, w: 393.1, text: 'NEW', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 63.24, y: 194.99, w: 602.76, text: 'EPISODE', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'card', type: 'shape', name: 'Headline panel',
    x: 46, y: 352, w: 540, h: 330, background: NAVY, radius: 20 },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 66, y: 378, w: 500, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 66, y: 428, w: 500, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 66, y: 580, w: 500, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 690, y: 582, w: 560, h: 112, background: NAVY, radius: 30,
    border: 3, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 710, y: 598, w: 520, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 27, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 811, y: 642, w: 172, h: 39, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 1003, y: 642, w: 126, h: 39, src: '/templates/t1/spotify.svg', fit: 'contain' },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 68.48, y: 318.16, w: 524.14, h: 62.9, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 89.45, y: 328.64, w: 482.21, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 34.069, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
];

export const template3 = {
  id: 'template-3',
  name: 'Template 3 — Navy Panel',
  description: 'Large tilted microphone, navy headline panel, soft red accent.',
  layouts: {
    'post-1080x1250': { background: '#FFFFFF', elements },
    'yt-1280x720':    { background: '#FFFFFF', elements: ytElements },
  },
};
