// design/templates/template4.js
// Converted from Figma: "Template 4" (node 1:76).
// Inverted compared with the others: the headline leads at the top and
// NEW / EPISODE closes at the bottom, over the photo. Only the navy speech
// bubble is a new asset; everything else is shared with Template 1.

const MONT = "'Montserrat', sans-serif";
const NAVY = '#0B1B33';
const GOLD = '#C9A127';
const SOFT_RED = '#DB5757';
const TINT = 'rgba(175,223,235,0.57)';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -21, y: 0, w: 1121, h: 1401, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },
  // A pale blue wash over the whole background.
  { id: 'tint', type: 'shape', name: 'Colour wash',
    x: -30, y: 0, w: 1178, h: 1291, background: TINT },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: -34.08, y: 133.97, w: 329.607, h: 473.678, src: '/templates/t1/mic.webp',
    rotate: 171.85, flipY: true, crop: MIC_CROP },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 185, y: 496, w: 710.79, h: 754, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'card', type: 'image', name: 'Headline bubble',
    x: 278, y: 43, w: 524.5, h: 512, src: '/templates/t4/bubble.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 321, y: 94, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 338, y: 140, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 358, y: 286, w: 363, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  // White over the photo, then navy below it.
  { id: 'new', type: 'text', name: '"NEW"',
    x: 365, y: 840, w: 350, text: 'NEW', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 227, y: 953, w: 625, text: 'EPISODE', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 260, y: 1113, w: 559, h: 69, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 320, y: 1124, w: 440, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.513, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  // Tucked under the bubble's tail rather than at the foot of the design.
  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 489, y: 426, w: 542.31, h: 116.94, background: NAVY, radius: 21.93,
    border: 2.193, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 559.16, y: 445, w: 402, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 27.417, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 595.71, y: 487.39, w: 172.71, h: 39.13, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 797.6, y: 487.39, w: 126.28, h: 39.46, src: '/templates/t1/spotify.svg', fit: 'contain' },
];

// ── YouTube 1280x720 ──
// Keeps this template's character — headline bubble leading, NEW / EPISODE
// closing — rearranged into landscape.
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1280, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },
  { id: 'tint', type: 'shape', name: 'Colour wash',
    x: 0, y: 0, w: 1280, h: 720, background: TINT },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: -40, y: 300, w: 300, h: 431, src: '/templates/t1/mic.webp',
    rotate: 171.85, flipY: true, crop: MIC_CROP },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 604, y: -8, w: 709.5, h: 946, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'card', type: 'image', name: 'Headline bubble',
    x: 40, y: 30, w: 500, h: 390, src: '/templates/t4/bubble.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 60, y: 66, w: 460, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 60, y: 110, w: 460, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 60, y: 258, w: 460, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 70, y: 436, w: 440, text: 'NEW', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 40, y: 540, w: 500, text: 'EPISODE', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 690, y: 582, w: 560, h: 112, background: NAVY, radius: 24,
    border: 2.193, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 710, y: 598, w: 520, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 27, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 811, y: 642, w: 172, h: 39, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 1003, y: 642, w: 126, h: 39, src: '/templates/t1/spotify.svg', fit: 'contain' },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 60, y: 652, w: 460, h: 56, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 80, y: 662, w: 420, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 30, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
];

export const template4 = {
  id: 'template-4',
  name: 'Template 4 — Bubble First',
  description: 'Headline leads at the top, NEW EPISODE closes over the photo.',
  layouts: {
    'post-1080x1250': { background: '#FFFFFF', elements },
    'yt-1280x720':    { background: '#FFFFFF', elements: ytElements },
  },
};
