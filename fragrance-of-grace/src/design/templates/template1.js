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
    x: -122, y: 402, w: 370, h: 489, src: '/templates/t1/mic.webp', fit: 'contain' },

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
  { id: 'card', type: 'shape', name: 'Headline card',
    x: 77, y: 599, w: 687, h: 504, background: '#FDF6EC', radius: 48 },
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

export const template1 = {
  id: 'template-1',
  name: 'Template 1 — Headline Card',
  description: 'Mic and photo, with the headline on a cream card.',
  layouts: {
    'post-1080x1250': { background: '#FFFFFF', elements },
  },
};
