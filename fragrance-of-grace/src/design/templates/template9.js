// design/templates/template9.js
// Converted from Figma: "Template 9" (node 93:191).
// Dark green with a yellow disc behind the photo and NEW EPISODE spread
// across the top in one line.

const MONT = "'Montserrat', sans-serif";
const GOLD = '#C9A127';
const YELLOW = '#F9D155';
const DEEP_GREEN = '#256200';
const HEADLINE_GOLD = '#DFC34B';
const SHADOW = '0px 4px 10px rgba(0,0,0,0.35)';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -24, y: -144, w: 1128, h: 2006.34, src: '/templates/t9/bg.jpg', fit: 'cover' },

  { id: 'disc', type: 'image', name: 'Yellow disc',
    x: 225, y: 149, w: 629, h: 629, src: '/templates/t9/circle.svg', fit: 'fill' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 56, y: 289, w: 967, h: 1025.78, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'panel', type: 'shape', name: 'Headline panel',
    x: 0, y: 836, w: 614, h: 323, background: 'rgba(14,88,65,0.69)' },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 25, y: 859, w: 521, text: 'WHEN THEY', fontFamily: MONT, fontSize: 79.569,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 25, y: 893.19, w: 525, text: 'STOP', fontFamily: MONT, fontSize: 182.021,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 25, y: 1078.25, w: 533, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 56.079,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.959 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 816.7, y: -57.2, w: 481.352, h: 691.751, src: '/templates/t1/mic.webp',
    rotate: 16.8, crop: MIC_CROP },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 49, y: 64, w: 361, text: 'NEW', fontFamily: MONT, fontSize: 136.047,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247, shadow: SHADOW },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 437.59, y: 71.71, w: 593, text: 'EPISODE', fontFamily: MONT, fontSize: 125.268,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247, shadow: SHADOW },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 345, y: 229, w: 390, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 33.286, fontWeight: 700, color: '#000000', align: 'center', lineHeight: 1.247 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 656, y: 1074, w: 395.28, h: 85.24, background: YELLOW, radius: 15.98,
    border: 1.598, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 707.14, y: 1087.85, w: 293, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 19.984, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 733.78, y: 1118.75, w: 125.86, h: 28.52, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 880.93, y: 1118.75, w: 92.03, h: 28.76, src: '/templates/t6/spotify.svg', fit: 'contain' },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 2277, src: '/templates/t9/bg.jpg', fit: 'cover' },

  { id: 'disc', type: 'image', name: 'Yellow disc',
    x: 700, y: 60, w: 520, h: 520, src: '/templates/t9/circle.svg', fit: 'fill' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 660, y: 100, w: 600, h: 637, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 40, y: 40, w: 300, text: 'NEW', fontFamily: MONT, fontSize: 104,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247, shadow: SHADOW },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 320, y: 46, w: 420, text: 'EPISODE', fontFamily: MONT, fontSize: 96,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247, shadow: SHADOW },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 40, y: 176, w: 560, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 30, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'panel', type: 'shape', name: 'Headline panel',
    x: 0, y: 250, w: 620, h: 330, background: 'rgba(14,88,65,0.69)' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 30, y: 274, w: 560, text: 'WHEN THEY', fontFamily: MONT, fontSize: 58,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 30, y: 310, w: 560, text: 'STOP', fontFamily: MONT, fontSize: 132,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 30, y: 466, w: 560, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 42,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.959 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 1010, y: -90, w: 340, h: 489, src: '/templates/t1/mic.webp',
    rotate: 16.8, crop: MIC_CROP },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 110, y: 606, w: 395.28, h: 85.24, background: YELLOW, radius: 15.98,
    border: 1.598, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 161.14, y: 619.85, w: 293, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 19.984, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 187.78, y: 650.75, w: 125.86, h: 28.52, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 334.93, y: 650.75, w: 92.03, h: 28.76, src: '/templates/t6/spotify.svg', fit: 'contain' },
];

export const template9 = {
  id: 'template-9',
  name: 'Template 9 — Yellow Disc',
  description: 'Dark green with a yellow disc behind the photo.',
  layouts: {
    'post-1080x1250': { background: '#0E5841', elements },
    'yt-1280x720':    { background: '#0E5841', elements: ytElements },
  },
};
