// design/templates/template6.js
// Converted from Figma: "Template 6" (node 93:140).
// Green poster with a speech bubble, an exclamation mark and a blurred
// colour wash behind the headline. Photo, microphone and logos are shared
// with Template 1.

const MONT = "'Montserrat', sans-serif";
const GOLD = '#C9A127';
const YELLOW = '#F9D155';
const DEEP_GREEN = '#256200';
const HEADLINE_GOLD = '#DFC34B';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -58, y: -172, w: 1195, h: 1593.33, src: '/templates/t6/bg.jpg', fit: 'cover' },

  { id: 'bubble', type: 'image', name: 'Speech bubble',
    x: 50, y: 94, w: 979, h: 566, src: '/templates/t6/bubble.svg', fit: 'fill' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: -96, y: 387, w: 860, h: 912.28, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 260, y: 94, w: 412, text: 'NEW', fontFamily: MONT, fontSize: 155.104,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 181, y: 244.37, w: 676, text: 'EPISODE', fontFamily: MONT, fontSize: 142.815,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 415, y: 406, w: 434, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.041, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  // A heavily blurred block that darkens the foot of the poster so the
  // headline reads over the photo.
  { id: 'wash', type: 'shape', name: 'Headline wash',
    x: -245, y: 1008, w: 1569, h: 413, background: DEEP_GREEN, blur: 100 },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 321, y: 930, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 338, y: 972, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 202, y: 1115, w: 634, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'excl-bar', type: 'image', name: 'Exclamation mark',
    x: 817, y: -23, w: 197, h: 421.5, src: '/templates/t6/excl-bar.svg', fit: 'fill' },
  { id: 'excl-dot', type: 'image', name: 'Exclamation dot',
    x: 871, y: 381, w: 111, h: 100, src: '/templates/t6/excl-dot.svg', fit: 'fill' },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 527, y: 706, w: 473.03, h: 102, background: YELLOW, radius: 19.13,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 588.2, y: 722.58, w: 351, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 23.914, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 620.07, y: 759.55, w: 150.64, h: 34.13, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 796.17, y: 759.55, w: 110.15, h: 34.42, src: '/templates/t6/spotify.svg', fit: 'contain' },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 795.65, y: 829.46, w: 397.946, h: 571.888, src: '/templates/t1/mic.webp',
    rotate: 0.13, flipY: true, crop: MIC_CROP },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1707, src: '/templates/t6/bg.jpg', fit: 'cover' },

  { id: 'bubble', type: 'image', name: 'Speech bubble',
    x: 30, y: 24, w: 820, h: 474, src: '/templates/t6/bubble.svg', fit: 'fill' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 700, y: 40, w: 620, h: 658, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 90, y: 56, w: 500, text: 'NEW', fontFamily: MONT, fontSize: 124,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 60, y: 176, w: 560, text: 'EPISODE', fontFamily: MONT, fontSize: 114,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 90, y: 310, w: 500, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 32, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'wash', type: 'shape', name: 'Headline wash',
    x: -200, y: 500, w: 1100, h: 300, background: DEEP_GREEN, blur: 100 },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 60, y: 476, w: 560, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 60, y: 512, w: 560, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: HEADLINE_GOLD, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 60, y: 636, w: 560, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'excl-bar', type: 'image', name: 'Exclamation mark',
    x: 846, y: -18, w: 165, h: 353, src: '/templates/t6/excl-bar.svg', fit: 'fill' },
  { id: 'excl-dot', type: 'image', name: 'Exclamation dot',
    x: 891, y: 320, w: 93, h: 84, src: '/templates/t6/excl-dot.svg', fit: 'fill' },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 740, y: 582, w: 473.03, h: 102, background: YELLOW, radius: 19.13,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 801.2, y: 598.58, w: 351, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 23.914, fontWeight: 600, color: DEEP_GREEN, align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 833.07, y: 635.55, w: 150.64, h: 34.13, src: '/templates/t6/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 1009.17, y: 635.55, w: 110.15, h: 34.42, src: '/templates/t6/spotify.svg', fit: 'contain' },
];

export const template6 = {
  id: 'template-6',
  name: 'Template 6 — Green Shout',
  description: 'Green poster with a speech bubble and exclamation mark.',
  layouts: {
    'post-1080x1250': { background: '#2E7D1E', elements },
    'yt-1280x720':    { background: '#2E7D1E', elements: ytElements },
  },
};
