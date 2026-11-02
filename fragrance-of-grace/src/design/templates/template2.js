// design/templates/template2.js
// Converted from Figma: "Template 2" (node 1:31).
// Shares the photo, microphone and platform logos with Template 1, so those
// assets are referenced from /templates/t1/ rather than duplicated.

const MONT = "'Montserrat', sans-serif";
const BROWN = '#5D2E07';
const RED = '#C50A0A';
const NAVY = '#0B1B33';
const GOLD = '#C9A127';

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -107, y: -22, w: 1294, h: 1294, src: '/templates/t2/bg.jpg', fit: 'cover' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 259, y: 78, w: 1105, h: 1172, src: '/templates/t1/hilda.webp', fit: 'cover' },

  // The microphone here is barely rotated, unlike Template 1's.
  { id: 'mic', type: 'image', name: 'Microphone',
    x: 845.64, y: 779.45, w: 378.014, h: 543.245, src: '/templates/t1/mic.webp',
    rotate: -0.14, flipY: true,
    crop: { w: 170.58, h: 118.69, left: -70.58, top: -9.64 } },

  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 47.83, y: 141.65, w: 309, h: 49, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 103.04, y: 140.93, w: 199.27, text: 'New Drop', fontFamily: MONT, fontSize: 37.513,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247, rotate: -7 },

  // White on this background, unlike Template 1's navy.
  { id: 'new', type: 'text', name: '"NEW"',
    x: 81.05, y: 161.12, w: 350, text: 'NEW', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 81.05, y: 280.12, w: 625, text: 'EPISODE', fontFamily: MONT, fontSize: 131.967,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  { id: 'card', type: 'image', name: 'Headline card',
    x: 67, y: 445, w: 501, h: 706.78, src: '/templates/t2/card.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 99, y: 535, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 116, y: 601, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: RED, align: 'center', lineHeight: 1.247 },
  // Narrower than the others so it wraps onto two lines, as the design does.
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 136, y: 776, w: 363, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 0.96 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 200, y: 1025, w: 742, h: 160, background: NAVY, radius: 30,
    border: 3, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 296, y: 1051, w: 550, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 37.513, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 346, y: 1109, w: 236.33, h: 53.54, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 622.23, y: 1109, w: 172.8, h: 54, src: '/templates/t1/spotify.svg', fit: 'contain' },

  // Last, so the bar paints over the headline card as it does in Figma.
  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 65, y: 438, w: 559, h: 69, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 141, y: 449, w: 440, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.513, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
];

// ── YouTube 1280x720 ──
// Follows the proportions Tomiwa set on Template 1's YouTube frame: photo
// right and bleeding past the bottom, headline block left, listen bar
// bottom-right, and no microphone.
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1280, src: '/templates/t2/bg.jpg', fit: 'cover' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 604, y: -8, w: 709.5, h: 946, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'tag-bg', type: 'shape', name: 'New Drop tag',
    x: 59.83, y: 43.99, w: 281.72, h: 47.17, background: GOLD, rotate: -7 },
  { id: 'tag-text', type: 'text', name: 'New Drop text',
    x: 101.81, y: 50.76, w: 196.55, text: 'New Drop', fontFamily: MONT, fontSize: 34.069,
    fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247, rotate: -7 },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 63.24, y: 84.92, w: 393.1, text: 'NEW', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 63.24, y: 194.99, w: 602.76, text: 'EPISODE', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 68.48, y: 318.16, w: 524.14, h: 62.9, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 89.45, y: 328.64, w: 482.21, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 34.069, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  { id: 'card', type: 'image', name: 'Headline card',
    x: 46, y: 396, w: 470, h: 324, src: '/templates/t2/card.svg', fit: 'fill' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 66, y: 424, w: 430, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 66, y: 478, w: 430, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 66, y: 626, w: 430, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: BROWN, align: 'center', lineHeight: 0.96 },

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

export const template2 = {
  id: 'template-2',
  name: 'Template 2 — Tall Card',
  description: 'Teal background, white headings, tall white headline card.',
  layouts: {
    'post-1080x1250': { background: '#0B2B2B', elements },
    'yt-1280x720':    { background: '#0B2B2B', elements: ytElements },
  },
};
