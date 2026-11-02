// design/templates/template1.js
// Converted from Figma: "Template 1" (file 55NLUvpIKvOFT4KfmvLGOD, node 1:3).
// Positions, sizes, fonts and colours are taken from the Figma node.
//
// The image files live in public/templates/t1/ and are pending download —
// figma.com is blocked by the environment's network policy. Until they land,
// the image elements render as empty frames and everything else is correct.

const MONT = "'Montserrat', sans-serif";
const BROWN = '#5D2E07';
const RED = '#C50A0A';
const NAVY = '#0B1B33';
const GOLD = '#C9A127';

const elements = [
  // ── Background ──
  { id: 'bg-texture', type: 'image', name: 'Background texture',
    x: -13, y: -27, w: 1140, h: 1423, src: '/templates/t1/bg-texture.jpg', fit: 'cover' },
  { id: 'bg-overlay', type: 'image', name: 'Background wash',
    x: -13, y: -21, w: 1121, h: 1401, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },

  // ── Photo of Hilda ──
  { id: 'photo', type: 'image', name: 'Photo',
    x: 259, y: 78, w: 1105, h: 1172, src: '/templates/t1/hilda.webp', fit: 'cover' },

  // ── Microphone ──
  { id: 'mic', type: 'image', name: 'Microphone',
    x: -94.58, y: 420.14, w: 315.218, h: 453, src: '/templates/t1/mic.webp',
    rotate: -172.72, flipY: true,
    crop: { w: 170.58, h: 118.69, left: -70.58, top: -9.64 } },

  // ── "New Drop" angled tag ──
  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 35, y: 158, w: 309, h: 49, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 91, y: 160, w: 199, text: 'New Drop', fontFamily: MONT, fontSize: 37.5,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.25, rotate: -7 },

  // ── NEW / EPISODE ──
  { id: 'new', type: 'text', name: '"NEW"',
    x: 70, y: 176, w: 350, text: 'NEW', fontFamily: MONT, fontSize: 132,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 70, y: 304, w: 625, text: 'EPISODE', fontFamily: MONT, fontSize: 132,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  // ── Season / episode pill ──
  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 77, y: 490, w: 559, h: 69, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 137, y: 501, w: 440, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.5, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.25 },

  // ── Headline card ──
  { id: 'card', type: 'image', name: 'Headline card',
    x: 74.62, y: 596.68, w: 691.62, h: 510.41, src: '/templates/t1/card.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 202, y: 659, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.7,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 219, y: 724, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.7,
    fontWeight: 900, color: RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 111, y: 886, w: 620, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.7,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 0.96 },

  // ── Watch / listen bar ──
  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 169, y: 1040, w: 742, h: 160, background: NAVY, radius: 30,
    border: 3, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 265, y: 1066, w: 550, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 37.5, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.25 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 315, y: 1124, w: 236, h: 54, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 591, y: 1124, w: 173, h: 54, src: '/templates/t1/spotify.svg', fit: 'contain' },
];


// ── YouTube 1280x720 ──
// Measured from the Figma frame "Template 1 — YouTube 1280x720" (node 7:18)
// after the designer's own adjustments. The microphone was moved off-canvas
// there, so it is deliberately absent from this size.
const ytElements = [
  { id: 'bg-texture', type: 'image', name: 'Background texture',
    x: 0, y: 0, w: 1280, h: 720, src: '/templates/t1/bg-texture.jpg', fit: 'cover' },
  { id: 'bg-overlay', type: 'image', name: 'Background wash',
    x: 0, y: 0, w: 1280, h: 720, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 604, y: -8, w: 709.5, h: 946, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'card', type: 'image', name: 'Headline card',
    x: 29.29, y: 322.29, w: 650.85, h: 483.57, src: '/templates/t1/card.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 112.99, y: 425, w: 484.07, text: 'WHEN THEY', fontFamily: MONT, fontSize: 63.044,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 136, y: 468, w: 437.97, text: 'STOP', fontFamily: MONT, fontSize: 131.966,
    fontWeight: 900, color: RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 44, y: 617, w: 622.37, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 63.044,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 0.96 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 63.24, y: 84.92, w: 393.1, text: 'NEW', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 63.24, y: 194.99, w: 602.76, text: 'EPISODE', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 59.83, y: 43.99, w: 281.72, h: 47.17, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 101.81, y: 50.76, w: 196.55, text: 'New Drop', fontFamily: MONT, fontSize: 34.069,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247, rotate: -7 },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 68.48, y: 318.16, w: 524.14, h: 62.9, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 89.45, y: 328.64, w: 482.21, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 34.069, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

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
];

export const template1 = {
  id: 'template-1',
  name: 'Template 1 — Headline Card',
  description: 'Mic and photo, with the headline on a cream card.',
  layouts: {
    'post-1080x1250': { background: '#FFFFFF', elements },
    'yt-1280x720':    { background: '#FFFFFF', elements: ytElements },
  },
};
