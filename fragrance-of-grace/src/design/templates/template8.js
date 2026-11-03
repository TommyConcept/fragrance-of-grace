// design/templates/template8.js
// Converted from Figma: "Template 8" (node 93:165).
// Split layout: headings left, headline right, joined by an arrow, over a
// green organic pattern.

const MONT = "'Montserrat', sans-serif";
const GOLD = '#C9A127';
const YELLOW = '#F9D155';
const DEEP_GREEN = '#256200';
const HEADLINE_GOLD = '#DFC34B';
const WASH_GREEN = '#598E77';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  // The pattern is used upside down in this design.
  { id: 'bg', type: 'image', name: 'Background',
    x: -24, y: -78, w: 1127, h: 1499.09, src: '/templates/t8/bg.jpg', fit: 'cover', rotate: 180 },

  { id: 'photo', type: 'image', name: 'Photo',
    x: -91, y: 43, w: 909.7, h: 965, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'wash', type: 'shape', name: 'Lower wash',
    x: -245, y: 813, w: 1569, h: 608, background: WASH_GREEN, blur: 100 },

  { id: 'panel-left', type: 'image', name: 'Left panel',
    x: -6.02, y: 641, w: 523.3, h: 615, src: '/templates/t8/panel-left.svg', fit: 'fill' },
  { id: 'panel-right', type: 'image', name: 'Right panel',
    x: 562.98, y: 619.14, w: 522.86, h: 636.3, src: '/templates/t8/panel-right.svg',
    fit: 'fill', rotate: 180, flipY: true },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 303, y: 1086, w: 473.03, h: 102, background: YELLOW, radius: 19.13,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 364.2, y: 1102.58, w: 351, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 23.914, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 396.07, y: 1139.55, w: 150.64, h: 34.13, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 572.17, y: 1139.55, w: 110.15, h: 34.42, src: '/templates/t6/spotify.svg', fit: 'contain' },

  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 625, y: 788, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 628, y: 742, w: 400, text: 'WHEN THEY', fontFamily: MONT, fontSize: 61.058,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 619, y: 944, w: 409, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 43.033,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.959 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 30, y: 732, w: 234, text: 'NEW', fontFamily: MONT, fontSize: 88.226,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 30, y: 813.91, w: 385, text: 'EPISODE', fontFamily: MONT, fontSize: 81.236,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 38, y: 907, w: 390, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 33.286, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'arrow', type: 'image', name: 'Arrow',
    x: 434, y: 797, w: 188.2, h: 187.9, src: '/templates/t8/arrow.svg', fit: 'fill' },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 748, y: -74.42, w: 427.594, h: 614.495, src: '/templates/t1/mic.webp',
    rotate: 16.8, crop: MIC_CROP },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1703, src: '/templates/t8/bg.jpg', fit: 'cover', rotate: 180 },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 40, y: -40, w: 620, h: 658, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'wash', type: 'shape', name: 'Lower wash',
    x: -200, y: 400, w: 1700, h: 420, background: WASH_GREEN, blur: 100 },

  { id: 'panel-left', type: 'image', name: 'Left panel',
    x: -6, y: 370, w: 440, h: 360, src: '/templates/t8/panel-left.svg', fit: 'fill' },
  { id: 'panel-right', type: 'image', name: 'Right panel',
    x: 620, y: 352, w: 670, h: 380, src: '/templates/t8/panel-right.svg',
    fit: 'fill', rotate: 180, flipY: true },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 700, y: 400, w: 520, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 700, y: 436, w: 520, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 700, y: 570, w: 520, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 40,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.959 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 40, y: 392, w: 300, text: 'NEW', fontFamily: MONT, fontSize: 78,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 40, y: 466, w: 380, text: 'EPISODE', fontFamily: MONT, fontSize: 72,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 40, y: 556, w: 380, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 30, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'arrow', type: 'image', name: 'Arrow',
    x: 470, y: 452, w: 150, h: 150, src: '/templates/t8/arrow.svg', fit: 'fill' },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 740, y: 614, w: 473.03, h: 86, background: YELLOW, radius: 19.13,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 801.2, y: 624, w: 351, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 22, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 833, y: 656, w: 140, h: 32, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 1000, y: 656, w: 102, h: 32, src: '/templates/t6/spotify.svg', fit: 'contain' },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 980, y: -120, w: 300, h: 431, src: '/templates/t1/mic.webp',
    rotate: 16.8, crop: MIC_CROP },
];

export const template8 = {
  id: 'template-8',
  name: 'Template 8 — Split Panels',
  description: 'Headings left, headline right, joined by an arrow.',
  layouts: {
    'post-1080x1250': { background: '#E8EFE4', elements },
    'yt-1280x720':    { background: '#E8EFE4', elements: ytElements },
  },
};
